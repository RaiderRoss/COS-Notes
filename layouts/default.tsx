import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "@/components/theme-switch";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-fixed overflow-hidden">
      <Head />
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
      {isMounted && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-fixed"
          style={{
            backgroundImage:
              resolvedTheme === "dark"
                ? "url('dark-background.png')"
                : "url('light-background.png')",
          }}
        >
          <div className="absolute inset-0 backdrop-blur-md"></div>
        </div>
      )}
    </div>
     
  );
}
