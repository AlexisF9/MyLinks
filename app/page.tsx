import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="w-full border-b p-4">
        <div className="flex items-center gap-4 max-w-5xl mx-auto justify-between">
          <h1 className="text-2xl">MyLinks</h1>
          <div className="flex items-center gap-2">
            <nav className="flex gap-2">
              <Button variant={"outline"}>
                <Link href={"/"}>Login</Link>
              </Button>
              <Button>
                <Link href={"/"}>Signup</Link>
              </Button>
            </nav>

            <ModeToggle />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className="text-3xl">Save your links</h2>
        <h3 className="text-xl">Create for developers and designer</h3>

        <div className="flex gap-4 mt-6">
          <Button>
            <Link href={"/links"}>Go to links list</Link>
          </Button>
          <Button>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
