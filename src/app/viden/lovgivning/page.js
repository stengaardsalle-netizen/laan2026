'use client'

import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { Scale, Shield, BookOpen, FileText, CheckCircle, AlertTriangle, Coins } from 'lucide-react'

export default function LovgivningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-green-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/viden" className="hover:text-white transition-colors">Viden</Link><span>/</span>
            <span className="text-white font-semibold">Lovgivning</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Lovgivning og dine rettigheder</span><br/>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">som låntager i Danmark</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-green-100 font-light">Danmark har en af Europas stærkeste forbrugerbeskyttelser inden for finansielle produkter. Her er et overblik over de love og regler, der beskytter dig.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Scale className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kreditaftaleloven</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Kreditaftaleloven er den centrale lov, der regulerer forbrugslån og kreditaftaler i Danmark. Loven gennemfører EU&apos;s forbrugerkreditdirektiv og stiller strenge krav til långiverne:</p>
            <div className="space-y-3 mb-6">
              {['Långiver skal oplyse ÅOP, samlet kreditbeløb og samlede omkostninger klart og tydeligt','Kreditvurdering er et lovkrav — långiver må ikke udstede lån uden vurdering af din betalingsevne','Du har ret til et standardiseret informationsblad (ESIS) ved boliglån, der gør sammenligning mulig','Alle gebyrer og vilkår skal fremgå tydeligt af aftalen, inden du underskriver'].map((item,i)=>(
                <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0"/><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><Shield className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Fortrydelsesret</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Ifølge kreditaftaleloven har du 14 dages fortrydelsesret på de fleste forbrugslån. Det betyder, at du inden for 14 dage kan fortryde aftalen uden at angive en grund. Du skal dog tilbagebetale lånebeløbet og eventuelt påløbne renter for perioden.</p>
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-900 font-medium"><strong>Bemærk:</strong> Fortrydelsesretten gælder ikke på samme måde for realkreditlån. Her gælder den primært for selve rådgivningen, ikke lånets vilkår, da obligationerne allerede er solgt på markedet.</p>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><AlertTriangle className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Renteloft og ÅOP-loft</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Danmark har indført et renteloft og et ÅOP-loft for at beskytte forbrugere mod urimeligt dyre lån. Reglerne gælder primært for forbrugslån og kviklån:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Renteloft</h3>
                <p className="text-slate-600 text-sm">Den årlige rente på forbrugslån må ikke overstige 35% over Nationalbankens udlånsrente. Det sætter en øvre grænse for, hvor dyrt et lån kan blive.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">ÅOP-loft</h3>
                <p className="text-slate-600 text-sm">De samlede årlige omkostninger (ÅOP) må ikke overstige 35% over Nationalbankens udlånsrente + 15 procentpoint. Det inkluderer alle gebyrer og omkostninger.</p>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><FileText className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Finanstilsynets rolle</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Finanstilsynet er den danske myndighed, der overvåger alle finansielle virksomheder — fra banker og realkreditinstitutter til onlinelåneudbydere. Tilsynet sikrer, at virksomhederne overholder lovgivningen og behandler kunderne fair.</p>
            <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
              <p className="text-green-900 font-medium"><strong>Tip:</strong> Du kan altid tjekke, om en låneudbyder har tilladelse fra Finanstilsynet på <strong>finanstilsynet.dk</strong>. Lån aldrig penge fra udbydere uden tilladelse.</p>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Ret til førtidig indfrielse</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Ifølge dansk lovgivning har du altid ret til at indfri dit lån før tid. For forbrugslån er det typisk gratis. For realkreditlån kan du indfri til kurs 100 (eller til markedskurs, hvis det er lavere), men der kan være administrative gebyrer.</p>
            <p className="text-lg text-slate-700 leading-relaxed">Denne rettighed er særlig værdifuld i kombination med mulighederne for op- og nedkonvertering af realkreditlån — <Link href="/opkonvertering" className="text-blue-600 underline hover:text-blue-800">læs mere om opkonvertering her</Link>.</p>
          </section>
        </div>
      </article>

      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> Denne oversigt er vejledende og erstatter ikke juridisk rådgivning. Lovgivning kan ændres. Senest opdateret 2025. For aktuel lovtekst henvises til retsinformation.dk.</p>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
