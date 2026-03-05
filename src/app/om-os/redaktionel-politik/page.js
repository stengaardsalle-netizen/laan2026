'use client'

import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { Shield, CheckCircle, FileText, Users, Eye, AlertTriangle } from 'lucide-react'

export default function RedaktionelPolitikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/om-os" className="hover:text-white transition-colors">Om Lån.dk</Link><span>/</span>
            <span className="text-white font-semibold">Redaktionel politik</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Redaktionel politik</span>
          </h1>
          <p className="text-blue-100 text-lg font-light max-w-2xl mx-auto">Gennemsigtighed er en af vores kerneværdier. Her forklarer vi, hvordan vi arbejder, hvordan vi tjener penge, og hvad det betyder for den vejledning, du får.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Eye className="h-5 w-5 text-white" /></div>
              <h2 className="text-2xl font-black text-slate-900">Vores mission</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">Lån.dk eksisterer for at gøre det danske lånemarked mere gennemsigtigt og forståeligt. Vi tror på, at velinformerede forbrugere træffer bedre økonomiske beslutninger. Derfor producerer vi uafhængig vejledning, der forklarer komplekse finansielle produkter i et klart og tilgængeligt sprog.</p>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div>
              <h2 className="text-2xl font-black text-slate-900">Sådan tjener vi penge</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Vi ønsker fuld åbenhed om vores forretningsmodel:</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Lån.dk er en reklamefinansieret vejledningsportal. Vi modtager kommission fra banker og låneudbydere, når vi formidler kontakt mellem dig og dem. Det betyder, at vores service er gratis for dig som bruger.</p>
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
              <p className="text-blue-900 font-medium"><strong>Vigtigt:</strong> Kommission fra partnere påvirker aldrig det indhold, vi producerer. Vores guides, artikler og låneordbog er skrevet uafhængigt af kommercielle hensyn. Vi nævner aldrig specifikke produkter eller udbydere i vores vejledende indhold uden at gøre det klart, at der er tale om en annoncør.</p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><Shield className="h-5 w-5 text-white" /></div>
              <h2 className="text-2xl font-black text-slate-900">Redaktionelle principper</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Alt indhold på Lån.dk følger disse principper:</p>
            <div className="space-y-3">
              {[
                { title: 'Objektivitet', desc: 'Vi præsenterer fakta og forklarer mekanismer. Vi anbefaler ikke specifikke produkter eller udbydere i vores vejledende indhold.' },
                { title: 'Nøjagtighed', desc: 'Finansielle tal, lovhenvisninger og beregninger faktatjekkes. Vi opdaterer indhold løbende, når lovgivning eller markedsforhold ændres.' },
                { title: 'Adskillelse af reklame og redaktion', desc: 'Kommercielt indhold er altid tydeligt markeret. Vores vejledende artikler, guides og låneordbog er uafhængige af annoncører.' },
                { title: 'Brugerens interesse først', desc: 'Vores indhold er designet til at informere og beskytte dig som forbruger — også med advarsler om risici og situationer, hvor det ikke bør tage et lån.' },
                { title: 'Gennemsigtighed', desc: 'Vi er åbne om, hvordan vi tjener penge, og hvem der står bag siden. Se vores Om os-side for information om teamet.' },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong className="text-slate-900">{p.title}:</strong> <span className="text-slate-600">{p.desc}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><AlertTriangle className="h-5 w-5 text-white" /></div>
              <h2 className="text-2xl font-black text-slate-900">Hvad vi ikke er</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">For at undgå misforståelser vil vi gerne understrege:</p>
            <div className="space-y-3">
              {[
                'Vi er ikke en bank, et realkreditinstitut eller en låneudbyder. Vi udsteder ikke selv lån.',
                'Vi er ikke finansielle rådgivere. Vores indhold er vejledende og erstatter ikke professionel, individuel rådgivning.',
                'Vi garanterer ikke lånegodkendelse. Din mulighed for at få et lån afhænger af den enkelte udbyders kreditvurdering.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-red-700 text-xs font-bold">!</span></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><Users className="h-5 w-5 text-white" /></div>
              <h2 className="text-2xl font-black text-slate-900">Kontakt og korrektioner</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Hvis du finder fejl i vores indhold, eller har spørgsmål til vores redaktionelle praksis, hører vi gerne fra dig:</p>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <p className="text-slate-700"><strong>Email:</strong> info@fitezfinance.com</p>
              <p className="text-slate-700 mt-1"><strong>Adresse:</strong> Stengårds Alle 45, DK-2800 Kgs. Lyngby</p>
            </div>
          </section>
        </div>
      </article>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
