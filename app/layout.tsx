import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Deluxe painting solutions GH",
  description: "Deluxe painting solutions website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
