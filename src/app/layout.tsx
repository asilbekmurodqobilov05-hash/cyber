import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { ToasterProvider } from "@/components/providers/toaster-provider";

export const metadata: Metadata = {
  title: "Oxford International School Alumni",
  description: "Connecting graduates and celebrating achievement through a premium alumni platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>
          {children}
          <ToasterProvider />
        </SiteShell>
      </body>
    </html>
  );
}
