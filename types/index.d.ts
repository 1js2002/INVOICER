import { InvoiceSchema, ItemSchema } from "@/schemas";
export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        github: string;
    };
}
export type InvoiceType = z.infer<typeof InvoiceSchema>;
export type ItemType = z.infer<typeof ItemSchema>;
export type FormType = UseFormReturn<InvoiceType>;
export type NameType = FieldPath<InvoiceType>;
export type NameType = FieldPath<InvoiceType>;

export type NavItem = {
    title: string
    href: string
   disabled? : boolean
}

export type MainNavItem = NavItem

export type NavConfig = {
    mainNav: MainNavItem[]
}
export type InvoiceType = z.infer<typeof InvoiceSchema>;