import type { Metadata } from "next";

import "../styles/globals.css";
import DashboardWrapper from "../components/layout/DashboardWrapper";

export const metadata: Metadata = {
  title: "ThinkBuilt Solutions — Build faster with confidence",
  description: "ThinkBuilt Solutions Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
