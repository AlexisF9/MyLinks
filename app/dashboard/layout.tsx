import { ModeToggle } from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserMenu } from "@/components/user-menu";
import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  const categories = await prisma.category.findMany();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-6">
          <h1 className="text-2xl">
            <Link href={"/"}>MyLinks</Link>
          </h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="p-4">
            <SidebarGroupLabel>Default categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categories &&
                  categories.length > 0 &&
                  categories.map((cat, index) => {
                    return (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton>{cat.name}</SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-6">
          <ModeToggle />
          <UserMenu />
        </SidebarFooter>
      </Sidebar>
      <main className="w-full p-6">
        <SidebarTrigger className="mb-4" />
        {children}
      </main>
    </SidebarProvider>
  );
}
