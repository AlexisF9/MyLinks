import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { LinkCard } from "./link-card";
import { LinkType } from "@/app/dashboard/page";

export async function LinksGrid() {
  //server component

  //query la db côté server
  const links = await prisma.link.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  //server
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
    <div className="grid gap-4 lg:grid-cols-3">
      {links &&
        links.length > 0 &&
        links.map((link, index) => {
          return (
            <LinkCard
              key={index}
              link={link as LinkType}
              setNewName={setNewName}
            />
          );
        })}
    </div>
  );
}
