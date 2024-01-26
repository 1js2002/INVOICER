"use client";
import React, { use } from "react";
import { User } from "next-auth";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import useScroll from "@/hooks/use-scroll";
import { UserAccountNav } from "./user-account-nav";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { MainNav } from "./main-nav";
import { MainNavItem } from "@/types";
import { ModeToggle } from "./mode-toggle";
interface NavBarProps {
  scroll?: boolean;
  user: Pick<User, "name" | "image" | "email"> | undefined;
  children?: React.ReactNode;
  items?: MainNavItem[];
  rightElements?: React.ReactNode;
}

const Navbar = ({
  scroll = false,
  user,
  items,
  children,
  rightElements,
}: NavBarProps) => {
  const scrolled = useScroll(50);

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          {!user ? (
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Login Page
            </Link>
          ) : null}

          {user && <UserAccountNav user={user} />}
          <ModeToggle/>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
