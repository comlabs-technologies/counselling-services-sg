import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Ember Practice — Three Website Directions",
  description:
    "Three premium, low-friction website concepts for The Ember Practice, Singapore.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SG" className="scroll-smooth">
      <body className="m-0 bg-[#f7f5ef] font-sans text-[#272620] antialiased">
        {children}
      </body>
    </html>
  );
}
