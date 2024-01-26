import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/shared/icons";
const home = () => {
  return (
    <div className="container h-full flex flex-col items-center text-center max-w-[64rem]  ">
      <h1 className="md:max-h-[15rem] max-h-[10rem] animate-fade-left animate-ease-in-out text-balance font-bold py-28 text-3xl md:text-5xl lg:text-6xl leading-4 " style={{ lineHeight: "1.2" }}>
        Streamlining Your Billing Experience with
        <span className="text-gradient"> INVOICER </span>
      </h1>
      <p className="max-w-[42rem] text-balance py-0 md:py-8 animate-fade-left animate-ease-in-out animate-delay-75 text-muted-foreground opacity-0">
        Built using Next.js 14, Prisma, Auth.js, Resend, React Email and
        Shadcn/ui.
      </p>
      <div className="flex animate-fade-up justify-center space-x-2 py-6 md:py-3 opacity-0 md:space-x-4 ">
        <Link href="/create" className={cn(buttonVariants({ size: "lg" }))}>
          Create Invoice
        </Link> 
        {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
            >
              <Icons.gitHub className="mr-2 size-4" />
              <p>
                <span className="hidden sm:inline-block">Star on</span>{" "}GitHub{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </Link> */}
      </div>
    </div>
  );
};

export default home;
