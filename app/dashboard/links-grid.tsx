import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { LinkType } from "@/app/dashboard/page";
import { LinkCard } from "./link-card";

export async function LinksGrid() {
  //server component

  //query la db côté server
  const links = await prisma.link.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {links &&
        links.length > 0 &&
        links.map((link, index) => {
          return <LinkCard key={index} link={link as LinkType} />;
        })}
    </div>
  );
}
