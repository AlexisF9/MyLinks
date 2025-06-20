import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className="text-3xl">Save your links</h2>
        <h3 className="text-xl">Create for developers and designer</h3>

        <div className="flex gap-4 mt-6">
          <Button>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
