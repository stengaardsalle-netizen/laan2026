'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { BookOpen, Scale, FileText, ArrowRight, Coins, Shield } from 'lucide-react'

export default function VidenPage() {
  const sections = [
    { title: 'Låneordbog', description: 'Alle vigtige begreber forklaret i klart sprog. Fra ÅOP og bidragssats til kursværdi og restgæld.', href: '/viden/laaneordbog', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { title: 'Lovgivning og rettigheder', description: 'Din forbrugerbeskyttelse ved lån i Danmark. Kreditaftaleloven, fortrydelsesret, renteloft og Finanstilsynets rolle.', href: '/viden/lovgivning', icon: Scale, color: 'from-green-500 to-emerald-600' },
    { title: 'Guide til boliglån', description: 'Alt om realkreditlån, obligationer, kurser, konvertering og skattefri kursgevinster.', href: '/boliglaan', icon: FileText, color: 'from-purple-500 to-pink-600' },
    { title: 'Forbrugslån: Renter og ÅOP', description: 'Forstå de reelle omkostninger ved forbrugslån. Hvad ÅOP dækker, og hvordan du sammenligner korrekt.', href: '/forbrugslaan/renter-og-aop', icon: Coins, color: 'from-orange-500 to-red-600' },
    { title: 'Opkonvertering', description: 'Hvordan du kan skære hundredtusinder af din restgæld ved at udnytte stigende renter.', href: '/opkonvertering', icon: ArrowRight, color: 'from-cyan-500 to-blue-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-5 py-2 rounded-full border border-white/20">
            <BookOpen className="h-5 w-5 text-blue-300" />
            <span className="text-white font-bold text-sm">Videncenter</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Viden om lån</span><br/>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">i Danmark</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-blue-100 font-light">
            Vi tror på, at velinformerede beslutninger er de bedste beslutninger. Her finder du vores samling af guides, forklaringer og lovgivningsoverblik, der hjælper dig med at navigere sikkert i låneverdenen.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <Link href={s.href} key={i} className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}><s.icon className="h-6 w-6 text-white" /></div>
                  <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">{s.title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">Læs mere <ArrowRight className="h-4 w-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> Alt indhold på Lån.dk er vejledende og erstatter ikke professionel økonomisk vejledning. Læs mere om vores <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">redaktionelle politik</Link>.</p>
        </div>
      </section>

      <footer className="bg-slate-900 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p>
        </div>
      </footer>
    </div>
  )
}
