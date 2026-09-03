import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Ember Practice",
  description:
    "Private counselling in Singapore for individuals, couples and families. A calm, confidential place to pause, understand and move forward.",
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
      <body className="m-0 overflow-x-hidden bg-[#F7F5EF] font-sans text-[16px] text-[#272620] antialiased">
        {children}
      </body>
    </html>
  );
}
