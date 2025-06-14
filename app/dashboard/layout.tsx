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
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
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
          <Button variant={"outline"} className="w-fit">
            <Link href={"/"}>Logout</Link>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <main>{children}</main>
    </SidebarProvider>
  );
}
