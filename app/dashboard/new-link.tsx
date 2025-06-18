"use client";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export function NewLink(props: {
  setNewLink: (name: string, url: string, note: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const submitNewLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    props.setNewLink(
      values.name as string,
      values.url as string,
      values.note as string
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => submitNewLink(e)}>
          <DialogHeader>
            <DialogTitle>Add new link</DialogTitle>
            <DialogDescription>
              Create a new link here. Click add when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 my-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="url" className="flex gap-1">
                Url<span>*</span>
              </Label>
              <Input id="url" name="url" required aria-required="true" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="note">Note</Label>
              <Textarea id="note" name="note" />
            </div>
            <p>* Required fields</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
