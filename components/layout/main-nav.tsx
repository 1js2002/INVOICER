"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import { Icons } from "../ui/shared/icons";
import { siteConfig } from "@/configs/site";
import { useSelectedLayoutSegment } from "next/navigation";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/home" className=" flex items-center space-x-2 md:flex">
        <Icons.logo />
        <span className=" font-urban text-xl font-bold ">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))} 
        </nav>
      ) : null}
    </div>
  );
}

