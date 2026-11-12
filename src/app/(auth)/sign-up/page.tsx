"use client";

import { Check } from "@gravity-ui/icons";
import Link from "next/link";
import {
  Button,
  Description,
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
import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUp() {
  const onSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries())

    

    const {data, error} = await signUp.email({
        email : userData.email as string,
        password : userData.password as string,
        name : userData.name as string,
        image : userData.image as string
    })

    if(data){
        redirect("/")
    }
    if(error){
        console.log(error.message)
    }
  }

  const HandleGoogleSignIn = async() => {

    const data = await signIn.social({
        provider : "google"
    })

    console.log(data)
  }

  const HandleGitHubSignIn = async() => {

    const data = await signIn.social({
        provider : "github"
    })
  }
  return (
    <section className="grid w-full flex-1 lg:grid-cols-2">
      <AuthBrandPanel />

      {/* Right: HeroUI form, themed via .heroui-scope */}
      <div className="heroui-scope flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Start making a difference in your community today.
          </p>

          <Form
            className="mt-8 flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                className="h-10"
                autoComplete="name"
              />
              <FieldError />
            </TextField>

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

            <TextField isRequired name="image" type="url">
              <Label>Image</Label>
              <Input
                placeholder="Enter your image url"
                className="h-10"
                autoComplete="url"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                className="h-10"
                autoComplete="new-password"
              />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="mt-1 flex gap-2">
              <Button
                type="submit"
                className="h-10 flex-1 rounded-full text-base"
              >
                <Check />
                Submit
              </Button>
             
            </div>

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
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
}
