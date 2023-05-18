import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamburee,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamburee = BaiJamburee({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamburee',
})

export const metadata = {
  title: 'Nlw Space Time',
  description: 'Uma capsula do tempo construida com React typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamburee.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
