import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import React from 'react'
import Footer from '@/app/components/footer'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Interactive Analysis | ISP-Myanmar',
  description: 'Survey and Data Analysis in Interactive - ISP-Myanmar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          href="https://ispmyanmar.com/wp-content/uploads/2024/03/cropped-favicon-2024-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://ispmyanmar.com/wp-content/uploads/2024/03/cropped-favicon-2024-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://ispmyanmar.com/wp-content/uploads/2024/03/cropped-favicon-2024-180x180.png"
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
