import { SidebarTrigger } from "@/components/ui/sidebar";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { LinkCard } from "@/components/link-card";

export interface LinkType {
  id: string;
  name?: string;
  note?: string;
  url: string;
}

export default async function Page() {
  //server component

  //query la db côté server
  const links = await prisma.link.findMany();

  const setNewName = async (id: string, name: string, note: string) => {
    "use server";

    await prisma.link.update({
      where: {
        id,
      },
      data: {
        name,
        note,
      },
    });

    revalidatePath("/dashboard");
  };

  return (
    <div className="p-6">
      <SidebarTrigger />
      <div className="grid gap-4 lg:grid-cols-3">
        {links.map((link, index) => {
          return (
            <LinkCard
              key={index}
              link={link as LinkType}
              setNewName={setNewName}
            />
          );
        })}
      </div>
    </div>
  );
}
