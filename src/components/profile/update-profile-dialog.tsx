"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPen } from "lucide-react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
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
import { authClient } from "@/lib/auth-client";

interface UpdateProfileDialogProps {
  name: string;
  image?: string | null;
}

export function UpdateProfileDialog({ name, image }: UpdateProfileDialogProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    );

    const newName = String(formData.name ?? "").trim();
    const newImage = String(formData.image ?? "").trim();

    const { error } = await authClient.updateUser({
      name: newName,
      image: newImage ? newImage : null,
    });

    if (!error) {
      toast.add({
        type: "success",
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      setOpen(false);
      router.refresh();
    } else {
      toast.add({
        type: "error",
        title: "Couldn't update profile",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="h-9 rounded-full gap-1.5 px-4">
            <UserPen className="size-4" aria-hidden />
            Edit profile
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your public profile. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <div className="heroui-scope">
          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" defaultValue={name}>
              <Label>Full Name</Label>
              <Input placeholder="e.g. Jane Doe" className="h-10" />
              <FieldError />
            </TextField>

            <TextField
              name="image"
              type="url"
              defaultValue={image ?? ""}
              validate={(value: string) =>
                !value || /^https?:\/\/.+/i.test(value)
                  ? null
                  : "Please enter a valid image URL"
              }
            >
              <Label>Profile Image URL</Label>
              <Input placeholder="Enter your image url" className="h-10" />
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
