export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "COS Notes",
  description: "Short summaries for all cos modules.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Cos 212",
      href: "/cos212",
    },
    {
      label: "Cos 216",
      href: "/cos216",
    },
    {
      label: "Cos 214",
      href: "/cos214",
    },
    {
      label: "Cos 226",
      href: "/cos226",
    },
    {
      label: "Cos 284",
      href: "/cos284",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
