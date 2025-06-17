"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";

export const FormName = (props: {
  name?: string;
  note?: string;
  setNewName: (name: string, note: string) => void;
  setEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const submiutForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const note = formData.get("note");

    props.setNewName(name as string, note as string);
    props.setEdit(false);
  };

  return (
    <form onSubmit={(e) => submiutForm(e)} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name" className="mb-2">
          Name
        </Label>
        <Input id="name" name="name" type="text" defaultValue={props.name} />
      </div>
      <div>
        <Label htmlFor="note" className="mb-2">
          Note
        </Label>
        <Input id="note" name="note" type="text" defaultValue={props.note} />
      </div>
      <div className="flex items-center gap-2">
        <Button type="submit">Edit</Button>
        <Button
          variant={"outline"}
          type="button"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
