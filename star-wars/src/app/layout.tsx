import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import {Providers} from './store/providers'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lexend.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
