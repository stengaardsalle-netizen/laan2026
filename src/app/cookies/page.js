'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { Shield } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <section className="relative pt-20 sm:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="text-5xl mb-4">🍪</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Cookie-politik</h1>
          <p className="text-blue-100 text-lg">Sidst opdateret: Januar 2025</p>
        </div>
      </section>
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hvad er cookies?</h2>
              <p className="text-slate-700 leading-relaxed">Cookies er små tekstfiler, der gemmes på din computer eller mobilenhed, når du besøger en hjemmeside. De bruges til at huske dine præferencer, analysere trafik og forbedre brugeroplevelsen.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hvilke cookies bruger vi?</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                  <thead><tr className="bg-slate-800 text-white">
                    <th className="text-left p-4 font-bold text-sm">Type</th>
                    <th className="text-left p-4 font-bold text-sm">Formål</th>
                    <th className="text-left p-4 font-bold text-sm">Varighed</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { type: 'Nødvendige', purpose: 'Sikrer at hjemmesiden fungerer korrekt. Kan ikke fravælges.', duration: 'Session' },
                      { type: 'Analytiske', purpose: 'Hjælper os med at forstå, hvordan besøgende bruger siden (Google Analytics).', duration: '2 år' },
                      { type: 'Funktionelle', purpose: 'Husker dine indstillinger og præferencer.', duration: '1 år' },
                      { type: 'Marketing', purpose: 'Bruges til at vise relevante annoncer og måle kampagneeffektivitet.', duration: '90 dage' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="p-4 text-sm font-bold text-slate-900 border-b border-slate-100">{row.type}</td>
                        <td className="p-4 text-sm text-slate-600 border-b border-slate-100">{row.purpose}</td>
                        <td className="p-4 text-sm text-slate-600 border-b border-slate-100">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tredjepartscookies</h2>
              <p className="text-slate-700 leading-relaxed">Vi bruger tjenester fra tredjeparter, som kan sætte deres egne cookies. Det inkluderer Google Analytics (trafikanalyse) og eventuelle annoncenetværk. Disse cookies er underlagt de respektive tredjeparters privatlivspolitikker.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Sådan administrerer du cookies</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Du kan til enhver tid slette eller blokere cookies via din browsers indstillinger. Bemærk, at blokering af cookies kan påvirke din oplevelse på Lån.dk.</p>
              <p className="text-slate-700 leading-relaxed">De fleste browsere giver dig mulighed for at se, hvilke cookies der er gemt, slette individuelle cookies, blokere cookies fra bestemte sider, og blokere alle cookies.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Samtykke</h2>
              <p className="text-slate-700 leading-relaxed">Ved dit første besøg på Lån.dk beder vi om dit samtykke til brug af cookies (undtagen nødvendige cookies). Du kan til enhver tid trække dit samtykke tilbage.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Kontakt</h2>
              <p className="text-slate-700 leading-relaxed">Har du spørgsmål om vores brug af cookies, er du velkommen til at kontakte os på info@fitezfinance.com. Læs også vores <Link href="/privatlivspolitik" className="text-blue-600 underline">privatlivspolitik</Link>.</p>
            </section>
          </div>
        </div>
      </article>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
