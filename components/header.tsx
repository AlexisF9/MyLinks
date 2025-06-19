import { ModeToggle } from "@/components/theme-toggle";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getUser } from "@/lib/auth-server";
import { Button } from "./ui/button";
import Link from "next/link";

export async function Header() {
  const user = await getUser();

  return (
    <header className="w-full border-b p-4">
      <div className="flex items-center gap-4 max-w-5xl mx-auto justify-between">
        <h1 className="text-2xl">
          <Link href={"/"}>MyLinks</Link>
        </h1>
        <div className="flex items-center gap-2">
          <nav className="flex gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <p>Hi {user.name} !</p>
                <form>
                  <Button
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
              </div>
            ) : (
              <>
                <Button variant={"outline"}>
                  <Link href={"/auth/signin"}>Login</Link>
                </Button>
                <Button>
                  <Link href={"/auth/signup"}>Signup</Link>
                </Button>
              </>
            )}
          </nav>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
