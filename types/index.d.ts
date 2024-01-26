export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        github: string;
    };
}

export type NavItem = {
    title: string
    href: string
   disabled? : boolean
}

export type MainNavItem = NavItem

export type NavConfig = {
    mainNav: MainNavItem[]
}
import { InvoiceSchema } from "@/schemas";
export type InvoiceType = z.infer<typeof InvoiceSchema>;