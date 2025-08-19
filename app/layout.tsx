import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/app/contexts/cart-context"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

const geist = GeistSans
const mono = GeistMono
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <style>{`
          html {
            font-family: ${geist.style.fontFamily};
            --font-sans: ${geist.variable};
            --font-mono: ${mono.variable};
            --font-inter: ${inter.variable};
          }
        `}</style> */}
      </head>
      <body className={`${geist.variable} ${mono.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
