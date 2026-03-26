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
  publisher: 'Lån.dk ApS',
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lån.dk ApS",
    "alternateName": "Lån.dk",
    "url": "https://www.xn--ln-yia.dk",
    "description": "Uafhængig vejledning om lån i Danmark. Sammenlign boliglån, forbrugslån og billån.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stengårds Alle 45",
      "addressLocality": "Kgs. Lyngby",
      "postalCode": "2800",
      "addressCountry": "DK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+45-31-38-02-17",
      "contactType": "customer service",
      "availableLanguage": "Danish"
    },
    "founder": {
      "@type": "Person",
      "name": "Jesper Jensen",
      "jobTitle": "Grundlægger og CEO"
    },
    "taxID": "37923680",
    "sameAs": []
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lån.dk",
    "url": "https://www.xn--ln-yia.dk",
    "publisher": {
      "@type": "Organization",
      "name": "Lån.dk ApS"
    },
    "inLanguage": "da"
  }

  return (
    <html lang="da">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  )
}
