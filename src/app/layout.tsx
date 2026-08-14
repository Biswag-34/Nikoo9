import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { LeadCaptureProvider } from "@/components/forms/LeadCaptureProvider";
import "./globals.css";

const displayFont = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nikoo Homes 9",
    template: "%s | Nikoo Homes 9",
  },
  description: "Project information and enquiry landing page for Nikoo Homes 9.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2f43",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body><LeadCaptureProvider>{children}</LeadCaptureProvider></body>
    </html>
  );
}
