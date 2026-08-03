import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://articial.tech"),
  title: "Articial — Akbar Alfa",
  description:
    "Akbar Alfa's multidisciplinary portfolio across web development, data, operations, marketing, and brand strategy.",
  openGraph: {
    title: "Articial — Akbar Alfa",
    description: "Digital systems for ideas that need to move.",
    url: "https://articial.tech",
    siteName: "Articial",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Articial — Akbar Alfa's multidisciplinary portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articial — Akbar Alfa",
    description: "Digital systems for ideas that need to move.",
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
