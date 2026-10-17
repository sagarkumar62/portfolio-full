import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sagarportfoliome.netlify.app"),
  title: "Sagar Kumar | MERN Full-Stack Developer & AI Engineer Intern",
  description:
    "The Human Behind The Machine: Sagar Kumar — MERN Full-Stack Developer & AI Engineer Intern at The AI Signal. Exploring intelligent systems, RAG document assistants, agent pipelines, and high-performance digital experiences.",
  keywords: [
    "Sagar Kumar",
    "MERN Full-Stack Developer",
    "AI Engineer Intern",
    "The AI Signal",
    "Next.js Developer",
    "Python RAG",
    "Agent Data Extraction",
    "Bhopal Developer",
    "LNCTE",
  ],
  authors: [{ name: "Sagar Kumar", url: "https://github.com/sagarkumar62" }],
  creator: "Sagar Kumar",
  openGraph: {
    title: "Sagar Kumar — The Human Behind The Machine",
    description:
      "MERN Full-Stack Developer & AI Engineer Intern. Building intelligent agents, vector search pipelines, and responsive web platforms.",
    url: "https://sagarportfoliome.netlify.app",
    siteName: "Sagar Kumar Portfolio",
    images: [
      {
        url: "/images/sagar-portrait-blue.jpg",
        width: 1200,
        height: 630,
        alt: "Sagar Kumar — Full-Stack & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Kumar — MERN Full-Stack Developer & AI Engineer Intern",
    description:
      "The Human Behind The Machine: Full-stack applications and applied AI engineering.",
    images: ["/images/sagar-portrait-blue.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${inter.variable} bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#D9DDE4]/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
