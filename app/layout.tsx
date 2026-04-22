import type { Metadata } from "next";
import { Unica_One, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unicaOne = Unica_One({
  variable: "--font-unica-one",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marktoebaertmedia.ca"),
  title: {
    default: "Mark Toebaert Media — Fraser Valley photographer",
    template: "%s — Mark Toebaert Media",
  },
  description:
    "Mark Toebaert is a Fraser Valley photographer covering festivals, performance, portraits, brand, travel, and behind-the-scenes work. Not bound by style.",
  openGraph: {
    type: "website",
    siteName: "Mark Toebaert Media",
    locale: "en_CA",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${unicaOne.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
