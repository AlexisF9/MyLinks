import { LayoutPage } from "@/components/layout";
import { SignUpForm } from "./signup-form";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <LayoutPage>
      <h2 className="text-xl my-6">SignUp</h2>
      <Card>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </LayoutPage>
  );
}
