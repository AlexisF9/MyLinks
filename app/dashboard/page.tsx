import { LayoutPage } from "@/components/layout";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <SidebarTrigger />
      <p>lorem</p>
    </div>
  );
}
