import { LayoutPage } from "@/components/layout";
import { SignInForm } from "./signin-form";
import { Card, CardContent } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <LayoutPage>
      <h2 className="text-xl my-6">SignIn</h2>
      <Card>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </LayoutPage>
  );
}
