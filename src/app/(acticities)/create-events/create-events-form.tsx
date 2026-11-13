"use client";

import { CalendarPlus } from "lucide-react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { AuthBrandPanel } from "@/components/auth/brand-panel";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const eventTypes = [
  "Cleanup",
  "Plantation",
  "Blood Donation",
  "Donation",
  "Education",
  "Winter Clothes",
];

function getTodayISO() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

export function CreateEventsForm() {

  const {data : session} = useSession()
  const user = session?.user


  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const userData = Object.fromEntries(formData.entries())

    const allData = {
      ...userData,
      ...user
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-events`,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(allData)
    })

    form.reset();
    const data = await res.json()

    if(data.acknowledged){
      // Clear the form so no stale data lingers after submitting
      redirect('/manage-events')
      return;
    }

    console.log(data)
  }
  return (
    <section className="grid w-full flex-1 lg:grid-cols-2">
      <AuthBrandPanel />

      {/* Right: HeroUI form, themed via .heroui-scope */}
      <div className="heroui-scope flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create an event
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Organize a social service activity in your local area.
          </p>

          <Form
            className="mt-8 flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >
            <TextField isRequired name="title">
              <Label>Title</Label>
              <Input
                placeholder="e.g. Sunday morning park cleanup"
                className="h-10"
              />
              <FieldError />
            </TextField>

            <TextField name="description">
              <Label>Description</Label>
              <TextArea
                id="description"
                placeholder="What will volunteers do? What should they bring?"
                className="min-h-24"
              />
              <FieldError />
            </TextField>

            <Select name="eventType" isRequired className="flex flex-col gap-2">
              <Label>Event Type</Label>
              <Select.Trigger className="h-10">
                <Select.Value>
                  {(value: { selectedText: string }) =>
                    value.selectedText || (
                      <span className="text-muted-foreground">
                        Select event type
                      </span>
                    )
                  }
                </Select.Value>
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="flex flex-col gap-1 p-1">
                  {eventTypes.map((type) => (
                    <ListBox.Item
                      key={type}
                      id={type}
                      textValue={type}
                      className="cursor-pointer rounded-md px-2 py-1.5 text-sm outline-none select-none hover:bg-muted focus:bg-muted"
                    >
                      {type}
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
              <FieldError />
            </Select>

            <TextField
              isRequired
              name="thumbnail"
              type="url"
              validate={(value: string) =>
                /^https?:\/\/.+/i.test(value)
                  ? null
                  : "Please enter a valid image URL"
              }
            >
              <Label>Thumbnail Image URL</Label>
              <Input
                placeholder="Enter your image url"
                className="h-10"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="location">
              <Label>Location</Label>
              <Input
                placeholder="e.g. Gulshan Park, Dhaka"
                className="h-10"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="eventDate"
              type="date"
              validate={(value) =>
                !value || value >= getTodayISO()
                  ? null
                  : "Event date must be in the future"
              }
            >
              <Label>Event Date</Label>
              <Input
                min={getTodayISO()}
                placeholder="Select a date"
                className="h-10"
              />
              <FieldError />
            </TextField>

            <Button type="submit" className="h-10 w-full rounded-full text-base">
              <CalendarPlus />
              Create Event
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
