import { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/components/ui/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { UserAuthForm } from "@/components/ui/forms/user-auth-form";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
           Back
            
        </>
      </Link>
      <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]   ">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto size-14    " />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="hover:text-brand underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
