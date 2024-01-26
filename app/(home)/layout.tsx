import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { NavItems } from "@/configs/navItems";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default async function HomeLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser();

  
  return (
    <div className="flex min-h-screen flex-col space-y-6  ">
      <Navbar user={user} items={NavItems.mainNav} scroll={false} />

      <main className={lexend.className}>
        {children}
      </main>

    </div>
  );
}
