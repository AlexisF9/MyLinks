import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/lib/auth-server";
import { Pen, Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div>
      <h2 className="text-xl">Account</h2>
      <Separator className="my-6" />
      <p className="mb-4">Welcome in your account settings {user.name}</p>
      <Card>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="size-20">
              {user.image ? (
                <AvatarImage src={user.image} alt={"Avatar of " + user.name} />
              ) : null}
              <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex items-center gap-2 flex-wrap">
          <Button>
            <Pen />
            Edit account
          </Button>
          <Button variant={"destructive"}>
            <Trash2 /> Delete account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
