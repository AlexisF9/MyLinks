import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div>
      <h2>Account</h2>
      <p>Welcome in your account settings {user.name}</p>
    </div>
  );
}
