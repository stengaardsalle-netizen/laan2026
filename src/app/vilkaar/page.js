'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { FileText } from 'lucide-react'

export default function VilkaarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <section className="relative pt-20 sm:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <FileText className="h-12 w-12 text-blue-300 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Vilkår og betingelser</h1>
          <p className="text-blue-100 text-lg">Sidst opdateret: Januar 2025</p>
        </div>
      </section>
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Om Lån.dk</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk drives af FitezFinance, Stengårds Alle 45, DK-2800 Kgs. Lyngby. Siden er en vejledningsportal, der giver information om lån og lånemuligheder i Danmark. Vi er ikke en bank, et realkreditinstitut eller en finansiel rådgiver.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Tjenestens karakter</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk tilbyder vejledende information om lån i Danmark, herunder guides, låneberegner og sammenligningsværktøjer. Vores indhold er alene vejledende og udgør ikke finansiel rådgivning. Vi anbefaler altid, at du søger individuel vejledning, før du indgår en låneaftale.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Forretningsmodel</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk er reklamefinansieret. Vi modtager kommission fra banker og låneudbydere, når vi formidler kontakt. Denne kommission påvirker ikke det redaktionelle indhold på siden. Læs mere i vores <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">redaktionelle politik</Link>.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">4. Ansvarsfraskrivelse</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk bestræber sig på at sikre, at alle oplysninger er korrekte og opdaterede, men vi kan ikke garantere fejlfrihed. Beregninger og eksempler er vejledende. Vi påtager os intet ansvar for økonomiske beslutninger truffet på baggrund af vores indhold. Faktiske lånevilkår fastsættes af den enkelte låneudbyder.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">5. Immaterielle rettigheder</h2>
              <p className="text-slate-700 leading-relaxed">Alt indhold på Lån.dk — tekst, grafik, beregningsværktøjer og design — er beskyttet af ophavsretsloven. Gengivelse, distribution eller offentliggørelse af indhold fra Lån.dk kræver forudgående skriftlig tilladelse.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">6. Links til tredjepart</h2>
              <p className="text-slate-700 leading-relaxed">Lån.dk kan indeholde links til eksterne sider, herunder banker og låneudbydere. Vi er ikke ansvarlige for indholdet på disse sider og anbefaler, at du læser deres egne vilkår og privatlivspolitikker.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">7. Ændringer</h2>
              <p className="text-slate-700 leading-relaxed">Vi forbeholder os retten til at ændre disse vilkår uden varsel. Den seneste version er altid tilgængelig på denne side. Ved væsentlige ændringer informerer vi herom på forsiden.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">8. Lovvalg og værneting</h2>
              <p className="text-slate-700 leading-relaxed">Disse vilkår er underlagt dansk ret. Eventuelle tvister afgøres ved de danske domstole.</p>
            </section>
          </div>
        </div>
      </article>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
