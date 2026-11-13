"use client";

import { LogIn } from "lucide-react";
import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import {
  AuthBrandPanel,
  AuthDivider,
} from "@/components/auth/brand-panel";
import { GitHubIcon, GoogleIcon } from "@/components/auth/icons";
import { signIn } from "@/lib/auth-client";

import { toast } from "@/components/ui/toast";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries())

    const { data, error } = await signIn.email({
      email: userData.email as string,
      password: userData.password as string
    })

    if (data) {
      toast.add({
        type: "success",
        title: "WellCome",
        description: "Sign in successfull",
      })
      redirect('/')
    }

      if (error) {
        toast.add({
          type: "error",
          title: "Try again",
          description: "Something went wrong!",
        })
      }
    
  }


  const HandleGoogleSignIn = async () => {

    const { data, error } = await signIn.social({
      provider: "google"
    })

    if (data) {
      toast.add({
        type: "success",
        title: "WellCome",
        description: "Sign in successfull",
      })
    }

      if (error) {
        toast.add({
          type: "error",
          title: "Try again",
          description: "Something went wrong!",
        })
      }
    


  }

  const HandleGitHubSignIn = async () => {

    const { data, error } = await signIn.social({
      provider: "github"
    })

    if (data) {
      toast.add({
        type: "success",
        title: "WellCome",
        description: "Sign in successfull",
      })
    }

      if (error) {
        toast.add({
          type: "error",
          title: "Try again",
          description: "Something went wrong!",
        })
      }
    
  }
  return (
    <section className="grid w-full flex-1 lg:grid-cols-2">
      <AuthBrandPanel />

      {/* Right: HeroUI form, themed via .heroui-scope */}
      <div className="heroui-scope flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Sign in to create and join community events.
          </p>

          <Form
            className="mt-8 flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>
              <Input
                placeholder="john@example.com"
                className="h-10"
                autoComplete="email"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                className="h-10"
                autoComplete="current-password"
              />
              <FieldError />
            </TextField>



            <Button type="submit" className="h-10 w-full rounded-full text-base">
              <LogIn />
              Login
            </Button>

            <AuthDivider />

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                className="h-10 rounded-full"
                onClick={HandleGoogleSignIn}
              >
                <GoogleIcon />
                Continue with Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-10 rounded-full"
                onClick={HandleGitHubSignIn}
              >
                <GitHubIcon />
                Continue with GitHub
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
}
