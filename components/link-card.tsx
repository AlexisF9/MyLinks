"use client";
import { FormName } from "@/app/dashboard/form-name";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link, Pencil } from "lucide-react";
import { LinkType } from "@/app/dashboard/page";

export function LinkCard(props: {
  link: LinkType;
  setNewName: (id: string, name: string, note: string) => void;
}) {
  const [edit, setEdit] = useState(false);
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 flex-wrap">
        <img
          width={30}
          src={`${new URL(props.link.url).origin}/favicon.ico`}
          alt=""
        />
        <div className="flex items-center gap-2 flex-wrap">
          {props.link.name ? (
            <CardTitle>
              <h2>{props.link.name}</h2>
            </CardTitle>
          ) : (
            <CardTitle>
              <h2>{new URL(props.link.url).hostname}</h2>
            </CardTitle>
          )}
          <button
            onClick={() => setEdit(true)}
            aria-label="Edit link"
            className="cursor-pointer"
          >
            <Pencil width={16} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {edit ? (
          <>
            <FormName
              //le func .bind() prérempli avec l'id, il reste name et note à mettre depuis le compo
              setNewName={props.setNewName.bind(null, props.link.id)}
              name={props.link.name ?? undefined}
              note={props.link.note ?? undefined}
              setEdit={setEdit}
            />
          </>
        ) : (
          <div className="flex flex-col gap-4">
            {props.link.note && <p>{props.link.note}</p>}
            <p className="flex items-center gap-2 break-all">
              <Link width={16} />
              {props.link.url}
            </p>
          </div>
        )}
      </CardContent>
      {!edit && (
        <CardFooter className="mt-auto">
          <Button className="w-fit">
            <a href={props.link.url} target="_blank">
              Open
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
