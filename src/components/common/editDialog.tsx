"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/toast";
import type { ECType } from "@/components/types/eventsCard";

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


interface EditDialogProps {
  event: ECType;
}

export function EditDialog({ event }: EditDialogProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    );

   
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/manage-events/${event._id}`,
      {
        method: "PATCH",
        headers: {
             "Content-Type": "application/json"
             },
        body: JSON.stringify(formData),
      },
    );

    const data = await res.json()
   

    if (data.modifiedCount > 0) {
      toast.add({
        type: "success",
        title: "Success!",
        description: "Event updated successfully",
      });
      setOpen(false);
      router.refresh();
    } else {
      toast.add({
        type: "error",
        title: "Something went wrong",
        description: "Event is not updated!",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" className="h-9 rounded-full gap-1.5 px-4">
            <Pencil className="size-4" aria-hidden />
            Edit
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit event</DialogTitle>
          <DialogDescription>
            Update the details of your event. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <div className="heroui-scope">
          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="title" defaultValue={event.title}>
              <Label>Title</Label>
              <Input
                placeholder="e.g. Sunday morning park cleanup"
                className="h-10"
              />
              <FieldError />
            </TextField>

            <TextField
              name="description"
              defaultValue={event.description}
            >
              <Label>Description</Label>
              <TextArea
                placeholder="What will volunteers do? What should they bring?"
                className="min-h-24"
              />
              <FieldError />
            </TextField>

            <Select
              name="eventType"
              isRequired
              defaultValue={event.eventType}
              className="flex flex-col gap-2"
            >
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
              defaultValue={event.thumbnail}
              validate={(value: string) =>
                /^https?:\/\/.+/i.test(value)
                  ? null
                  : "Please enter a valid image URL"
              }
            >
              <Label>Thumbnail Image URL</Label>
              <Input placeholder="Enter your image url" className="h-10" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="location"
              defaultValue={event.location}
            >
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
                         defaultValue={event.eventDate}
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

            <DialogFooter className="mt-2">
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit" className="rounded-full">
                Save changes
              </Button>
            </DialogFooter>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
