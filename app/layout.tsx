import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ryhar.my.id"),
  title: {
    default: "Efren | Portfolio",
    template: "%s | Efren Portfolio",
  },
  description: "Personal portfolio of Efren Francis Anonuevo, a software developer specializing in modern web development.",
  keywords: ["Efren Francis Anonuevo", "Portfolio", "Software Developer", "Web Development", "Backend", "Frontend", "Next.js", "React", "Node.js"],
  authors: [{ name: "Efren Francis Anonuevo" }],
  creator: "Efren Francis Anonuevo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Efren | Portfolio",
    description: "Personal portfolio of Efren Francis Anonuevo, a software developer specializing in modern web development.",
    siteName: "Efren Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Efren Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efren | Portfolio",
    description: "Personal portfolio of Efren Francis Anonuevo, a software developer specializing in modern web development.",
    images: ["/images/hero.png"],
    creator: "@efrenfrancisanonuevo",
  },
  icons: {
    icon: "/images/hero.png",
    shortcut: "/images/hero.png",
    apple: "/images/hero.png",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
