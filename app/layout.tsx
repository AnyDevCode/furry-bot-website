import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Furry Bot",
  description: "A Discord bot for furries",
  icons: "/favicon.svg",
  applicationName: "Furry Bot",
  authors: [{ name: "Any Dev Code", url: "https://anydevcode.com" }],
  generator: "Next.js",
  keywords: ["discord", "bot", "furry", "images", "search"],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#edac87",
  colorScheme: "dark",
  creator: "Any Dev Code",
  publisher: "Any Dev Code",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Furry Bot",
    title: "Furry Bot",
    description: "A Discord bot for furries",
    images: [{ url: "/logo.png", alt: "Furry Bot", type: "image/png" }, { url: "/favicon.svg", alt: "Furry Bot", type: "image/svg" }],
    url: "https://furry.anydevcode.com",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
