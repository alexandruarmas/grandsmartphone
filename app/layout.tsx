import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/PageTransition"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Smartphone Store",
  description: "Reparații, accesorii și cursuri în domeniul telefoanelor mobile",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <PageTransition>
          <main className="flex-grow pt-16 md:pt-[70px]">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
