import { SignInForm } from "./signin-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl">SignIn</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
}
