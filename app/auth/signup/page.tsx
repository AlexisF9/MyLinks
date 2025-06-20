import { SignUpForm } from "./signup-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl">SignUp</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
