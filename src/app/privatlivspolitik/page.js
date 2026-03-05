'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { Shield } from 'lucide-react'

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <section className="relative pt-20 sm:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privatlivspolitik</h1>
          <p className="text-blue-100 text-lg">Sidst opdateret: Januar 2025</p>
        </div>
      </section>
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Dataansvarlig</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk (FitezFinance) er dataansvarlig for behandlingen af de personoplysninger, vi modtager om dig. Du kan kontakte os på:</p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm text-slate-700">
                <p><strong>FitezFinance</strong></p>
                <p>Stengårds Alle 45, DK-2800 Kgs. Lyngby</p>
                <p>Email: info@fitezfinance.com</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Hvilke oplysninger indsamler vi?</h2>
              <p className="text-slate-700 leading-relaxed">Vi indsamler følgende typer oplysninger:</p>
              <p className="text-slate-700 leading-relaxed"><strong>Kontaktoplysninger:</strong> Navn, email og telefonnummer, hvis du kontakter os via kontaktformularen.</p>
              <p className="text-slate-700 leading-relaxed"><strong>Tekniske data:</strong> IP-adresse, browsertype, besøgstidspunkt og sidevisninger via cookies og analyseværktøjer.</p>
              <p className="text-slate-700 leading-relaxed"><strong>Låneforespørgsler:</strong> Hvis du bruger vores sammenligningsværktøjer, kan vi videresende dine oplysninger til relevante låneudbydere med dit samtykke.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Formål med behandlingen</h2>
              <p className="text-slate-700 leading-relaxed">Vi behandler dine oplysninger for at besvare henvendelser, forbedre vores tjeneste, vise relevante lånetilbud og overholde lovkrav. Vi behandler kun data med et klart formål og lovligt grundlag.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">4. Videregivelse</h2>
              <p className="text-slate-700 leading-relaxed">Vi deler kun dine personoplysninger med tredjepart, når det er nødvendigt for at levere vores tjenester (f.eks. låneudbydere du aktivt vælger at kontakte), eller når vi er forpligtet ved lov. Vi sælger aldrig dine data til tredjepart.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">5. Dine rettigheder</h2>
              <p className="text-slate-700 leading-relaxed">Du har ret til indsigt i, rettelse af og sletning af dine personoplysninger. Du har også ret til at gøre indsigelse mod behandlingen og til dataportabilitet. Kontakt os på info@fitezfinance.com for at udøve dine rettigheder.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">6. Opbevaring</h2>
              <p className="text-slate-700 leading-relaxed">Vi opbevarer dine data så længe, det er nødvendigt for det formål, de blev indsamlet til, eller så længe lovgivningen kræver det. Kontaktforespørgsler slettes efter 12 måneder.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">7. Sikkerhed</h2>
              <p className="text-slate-700 leading-relaxed">Vi bruger SSL-kryptering og følger gældende sikkerhedsstandarder for at beskytte dine data. Adgang til personoplysninger er begrænset til de medarbejdere, der har behov for det.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">8. Klageadgang</h2>
              <p className="text-slate-700 leading-relaxed">Du kan klage til Datatilsynet, hvis du mener, at vi behandler dine personoplysninger i strid med lovgivningen. Datatilsynet kan kontaktes via datatilsynet.dk.</p>
            </section>
          </div>
        </div>
      </article>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
