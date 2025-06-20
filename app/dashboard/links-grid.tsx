import { prisma } from "@/lib/prisma";
import { LinkType } from "@/app/dashboard/page";
import { LinkCard } from "./link-card";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export async function LinksGrid() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }
  //server component

  //query la db côté server
  const links = await prisma.link.findMany({
    where: {
      userId: user.id,
    },
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
