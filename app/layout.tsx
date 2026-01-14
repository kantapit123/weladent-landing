import { IBM_Plex_Sans_Thai, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const thaiFont = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-thai",
})

const englishFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-english",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body
        className={`${thaiFont.variable} ${englishFont.variable} ${thaiFont.className} bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  )
}