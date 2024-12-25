import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Whomp – AI bot fine-tuned on Halim Madi's voice to reply to scammers",
  description:
    "Whomp is an AI bot built with the Vercel AI SDK and fine-tuned on Halim Madi's poetry."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}