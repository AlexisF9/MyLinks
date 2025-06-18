"use client";
import { EditLinkForm } from "@/app/dashboard/edit-link-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, Pencil, Trash2 } from "lucide-react";
import { LinkType } from "@/app/dashboard/page";
import { deleteLink } from "./link.action";

export function LinkCard(props: { link: LinkType }) {
  const [edit, setEdit] = useState(false);
  return (
    <Card className="h-fit">
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
            <EditLinkForm link={props.link} setEdit={setEdit} />
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
        <CardFooter className="flex items-center justify-between gap-2 flex-wrap">
          <Button className="w-fit">
            <a href={props.link.url} target="_blank">
              Open
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => deleteLink(props.link.id)}
          >
            <Trash2 width={20} />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
