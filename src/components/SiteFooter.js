'use client'

import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Lån.dk</span>
            </div>
            <p className="text-base text-slate-400 max-w-md">Din uafhængige kilde til vejledning om lån i Danmark. Vi sammenligner tilbud fra Danmarks førende finansielle udbydere.</p>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
              <p className="font-bold text-white mb-3 text-sm">Kontakt os</p>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>✉ info@fitezfinance.com</p>
                <p>📍 Stengårds Alle 45, DK-2800 Kgs. Lyngby</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-bold text-white mb-4">Lånetyper</h3>
                <ul className="space-y-3">
                  {[
                    { n: 'Boliglån', h: '/boliglaan' },
                    { n: 'Forbrugslån', h: '/forbrugslaan' },
                    { n: 'Billån', h: '/billaan' },
                    { n: 'Opkonvertering', h: '/opkonvertering' },
                  ].map((l, i) => (
                    <li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-base font-bold text-white mb-4">Viden</h3>
                <ul className="space-y-3">
                  {[
                    { n: 'Låneordbog', h: '/viden/laaneordbog' },
                    { n: 'Lovgivning', h: '/viden/lovgivning' },
                    { n: 'Kontakt', h: '/kontakt' },
                    { n: 'Om Lån.dk', h: '/om-os' },
                  ].map((l, i) => (
                    <li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-4">Juridisk</h3>
              <ul className="space-y-3">
                {[
                  { n: 'Privatlivspolitik', h: '/privatlivspolitik' },
                  { n: 'Vilkår og betingelser', h: '/vilkaar' },
                  { n: 'Cookie-politik', h: '/cookies' },
                  { n: 'Redaktionel politik', h: '/om-os/redaktionel-politik' },
                ].map((l, i) => (
                  <li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left">&copy; 2025 Lån.dk ApS — Uafhængig vejledning om lån i Danmark. Alle rettigheder forbeholdes. <Link href="/sitemap" className="text-slate-600 hover:text-slate-400 underline">Sitemap</Link></p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
              SSL sikret
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
