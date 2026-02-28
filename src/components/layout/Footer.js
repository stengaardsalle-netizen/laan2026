import Link from 'next/link'

const footerNavigation = {
  låntyper: [
    { name: 'Boliglån', href: '/boliglaan' },
    { name: 'Forbrugslån', href: '/forbrugslaan' },
    { name: 'Kviklån', href: '/kviklaan' },
    { name: 'Samlelån', href: '/samlelaan' },
    { name: 'Erhvervslån', href: '/erhvervslaan' },
  ],
  information: [
    { name: 'Lånevejledning', href: '/guide' },
    { name: 'Sammenlign Lån', href: '/sammenlign' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Om os', href: '/om-os' },
  ],
  juridisk: [
    { name: 'Privatlivspolitik', href: '/privatlivspolitik' },
    { name: 'Vilkår og betingelser', href: '/vilkaar' },
    { name: 'Cookie-politik', href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Lån.dk
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Din pålidelige partner til at finde det bedste lån. 
              Vi sammenligner lån fra forskellige udbydere, så du kan træffe det bedste valg.
            </p>
            <div className="flex space-x-6">
              <div className="text-sm text-gray-300">
                <p className="font-semibold mb-2">Kontakt</p>
                <p>Email: info@fitezfinance.com</p>
                <p>Adresse: Stengårds Alle 45</p>
                <p>DK-2800 Kgs. Lyngby</p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Lånetyper</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.låntyper.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.information.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Juridisk</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.juridisk.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2025 Sammenlign Lån & Find Det Bedste Tilbud – Lån.dk. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}