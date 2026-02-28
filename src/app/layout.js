import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sammenlign Lån & Find Det Bedste Tilbud – Lån.dk',
  description: 'Hos Lån.dk hjælper vi dig med at finde det rette lån til dine behov. Sammenlign lånetyper, renter og vilkår fra forskellige udbydere.',
  keywords: 'lån, boliglån, forbrugslån, kviklån, samlelån, erhvervslån, sammenlign lån, renter, danmark',
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