import { SidebarTrigger } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NewLink } from "./new-link";
import { LinksGrid } from "./links-grid";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";

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
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <NewLink setNewLink={setNewLink} />
      </div>

      <Suspense>
        <LinksGrid />
      </Suspense>
    </div>
  );
}
