"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInWithProvider = async (provider: string) => {
    await authClient.signIn.social(
      {
        provider: provider,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {},
        onError: (ctx) => {
          toast("Something went wrong");
          console.log("error", ctx);
        },
      }
    );
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          toast("You are successfully logged in");
          router.push("/dashboard");
          router.refresh();
          setLoading(false);
        },
        onError: (ctx) => {
          toast("Something went wrong");
          console.log("error", ctx);
          setError(ctx.error.message);
          setLoading(false);
        },
      }
    );
  }

  return (
    <div className="flex flex-col items gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="text-destructive">{error}</p>}
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
          <p>
            Don't have an account ?{" "}
            <Link
              href={"/auth/signup"}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
        <p className="text-center">Or</p>
        <Button
          variant={"outline"}
          onClick={() => signInWithProvider("github")}
        >
          <Github /> Sign in with GitHub
        </Button>
      </Form>
    </div>
  );
}
