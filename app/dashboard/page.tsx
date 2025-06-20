import { SidebarTrigger } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NewLink } from "./new-link";
import { LinksGrid } from "./links-grid";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export interface LinkType {
  id: string;
  name?: string;
  note?: string;
  url: string;
}

export default async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  // server function
  const setNewLink = async (name: string, url: string, note: string) => {
    "use server";

    await prisma.link.create({
      data: {
        name,
        url,
        note,
        userId: user.id,
      },
    });

    revalidatePath("/dashboard");
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-xl">Your links</h2>
        <NewLink setNewLink={setNewLink} />
      </div>

      <Separator className="my-6" />

      <Suspense>
        <LinksGrid />
      </Suspense>
    </div>
  );
}
