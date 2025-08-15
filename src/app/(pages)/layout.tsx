import type { Metadata } from "next";

import "../styles/globals.css";
import DashboardWrapper from "../components/layout/DashboardWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl!),
  title: { default: "ThinkBuilt Solutions", template: "" },
  description: "Build faster with confidence.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.thinkbuiltsol.com",
    title: "ThinkBuilt Solutions",
    description: "Build faster with confidence.",
    images: ["/images/Group.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Group.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body cz-shortcut-listen="true">
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
