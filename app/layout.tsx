import '@/sass/base/globals.scss'
import style from "@/sass/layouts/RootLayout.module.scss"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macumbox',
  description: 'Macumbox',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <main className={style.RootLayout}>

          {children}

        </main>
      </body>
    </html>
  )
}
