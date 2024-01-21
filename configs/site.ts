import { SiteConfig } from "../types/index";

const site_url = process.env.NEXT_PUBLIC_APP_URL || '';

export const siteConfig: SiteConfig = {
    name: "INVOICER",
    description:
        "Streamline your billing process with ease – an efficient and user-friendly web app for generating professional invoices effortlessly",
    url: site_url,
    ogImage: `${site_url}/og.jpg`,
    links: {
        github: "https://github.com/1js2002/INVOICER",
    },
};
