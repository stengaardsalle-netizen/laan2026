import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.xn--ln-yia.dk'),
  title: {
    default: 'Sammenlign lån i 2026 — Find det rette lån til dig | Lån.dk',
    template: '%s | Lån.dk',
  },
  description: 'Den ultimative guide til lån i Danmark. Sammenlign boliglån, forbrugslån og billån. Forstå ÅOP, renter, kreditvurdering og dine rettigheder som låntager.',
  keywords: 'lån, boliglån, forbrugslån, realkreditlån, billån, sammenlign lån, renter, ÅOP, Danmark, opkonvertering, kreditvurdering',
  authors: [{ name: 'Jesper Jensen', url: 'https://www.xn--ln-yia.dk/om-os' }],
  creator: 'Lån.dk',
  publisher: 'FitezFinance',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://www.xn--ln-yia.dk',
    siteName: 'Lån.dk',
    title: 'Sammenlign lån i 2026 — Find det rette lån til dig | Lån.dk',
    description: 'Den ultimative guide til lån i Danmark. Sammenlign boliglån, forbrugslån og billån.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.xn--ln-yia.dk',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
