import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://articial.tech"),
  title: "Articial — Akbar's Portfolio",
  description:
    "Akbar's selected projects in web development, useful tools, and data exploration.",
  openGraph: {
    title: "Articial — Akbar's Portfolio",
    description: "Building useful digital experiences.",
    url: "https://articial.tech",
    siteName: "Articial",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Articial — Akbar's developer portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articial — Akbar's Portfolio",
    description: "Building useful digital experiences.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
