import { auth } from "@/auth";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/sidebar";
import { getUser } from "@/lib/auth-server";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-6">
          <h1 className="text-2xl">MyLinks</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="p-4">
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Link 1</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Link 2</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Link 3</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="p-4">
            <ModeToggle />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-6">
          <form>
            <Button
              variant={"outline"}
              formAction={async () => {
                "use server";

                await auth.api.signOut({
                  headers: await headers(),
                });

                redirect("/");
              }}
            >
              Logout
            </Button>
          </form>
        </SidebarFooter>
      </Sidebar>
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
