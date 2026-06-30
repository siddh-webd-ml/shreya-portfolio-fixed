import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Shreya Gupta | AI & ML Enthusiast & Software Developer",
    template: "%s | Shreya Gupta",
  },
  description:
    "Portfolio of Shreya Gupta - AI & Machine Learning Enthusiast, Software Developer, and Research Intern at DRDO × ISRO. B.Tech Computer Science (AI & ML) student passionate about building intelligent systems.",
  keywords: [
    "Shreya Gupta",
    "AI",
    "Machine Learning",
    "Software Developer",
    "Python",
    "Next.js",
    "Portfolio",
    "Artificial Intelligence",
    "Data Science",
    "Computer Science",
    "DRDO",
    "ISRO",
    "Research Intern",
  ],
  authors: [{ name: "Shreya Gupta" }],
  creator: "Shreya Gupta",
  metadataBase: new URL("https://shreyagupta.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreyagupta.dev",
    siteName: "Shreya Gupta Portfolio",
    title: "Shreya Gupta | AI & ML Enthusiast & Software Developer",
    description:
      "Portfolio of Shreya Gupta - AI & Machine Learning Enthusiast, Software Developer, and Research Intern at DRDO × ISRO.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shreya Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Gupta | AI & ML Enthusiast",
    description:
      "Portfolio of Shreya Gupta - AI & Machine Learning Enthusiast, Software Developer, and Research Intern at DRDO × ISRO.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
