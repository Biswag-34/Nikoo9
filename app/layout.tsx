import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikoo Homes 9 | EOI Priority Access",
  description:
    "A new side of city living at Nikoo Homes 9 with resort-style amenities, thoughtful configurations, and EOI priority registration.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
