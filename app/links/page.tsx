import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LINKS } from "./data";
import { LayoutPage } from "../../components/layout";

export default function Page() {
  return (
    <LayoutPage>
      <h2>Links list</h2>
      <Card>
        <CardHeader>
          <CardTitle>Link 1</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {LINKS.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={`/links/${link.id}`}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant={"outline"}>
            <Link href={"/"}>Go to home</Link>
          </Button>
        </CardFooter>
      </Card>
    </LayoutPage>
  );
}
