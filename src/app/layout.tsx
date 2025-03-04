import '../global.css'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

import type { PropsWithChildren, ReactNode } from 'react'

export default function RootLayout({
  pageName,
  children,
}: PropsWithChildren<{ pageName: ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tech Article</title>
      </head>
      <body>
        <div className="flex flex-col min-h-dvh">
          <Header pageName={pageName} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
