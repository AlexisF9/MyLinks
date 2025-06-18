import { SidebarTrigger } from "@/components/ui/sidebar";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { LinkCard } from "@/components/link-card";
import { Suspense } from "react";
import { LinksGrid } from "@/components/links-grid";

export interface LinkType {
  id: string;
  name?: string;
  note?: string;
  url: string;
}

export default async function Page() {
  return (
    <div className="p-6">
      <SidebarTrigger />
      <Suspense>
        <LinksGrid />
      </Suspense>
    </div>
  );
}
