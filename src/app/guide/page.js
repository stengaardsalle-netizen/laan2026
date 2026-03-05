'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { BookOpen, ArrowRight, Building2, Banknote, Scale, FileText } from 'lucide-react'

export default function GuidePage() {
  const guides = [
    { title: 'Den ultimative guide til lån', desc: 'Alt du skal vide før du låner. ÅOP, renter, kreditvurdering og ansvarlig låntagning.', href: '/', color: 'from-blue-500 to-indigo-600' },
    { title: 'Guide til boliglån', desc: 'Realkreditlån, obligationer, kurser, konvertering og skattefri kursgevinster.', href: '/boliglaan', color: 'from-green-500 to-emerald-600' },
    { title: 'Køb af bolig', desc: 'Finansiering, udbetaling, kreditgodkendelse og trin-for-trin guide.', href: '/boliglaan/koeb-af-bolig', color: 'from-purple-500 to-pink-600' },
    { title: 'Realkreditlån vs. banklån', desc: 'Dybdegående sammenligning af de to lånetyper.', href: '/boliglaan/realkredit-vs-banklaan', color: 'from-indigo-500 to-violet-600' },
    { title: 'Opkonvertering', desc: 'Skær hundredtusinder af din restgæld med strategisk låneomlægning.', href: '/opkonvertering', color: 'from-cyan-500 to-blue-600' },
    { title: 'Tillægslån i friværdien', desc: 'Frigør penge fra din boligs merværdi.', href: '/boliglaan/tillaegslaan', color: 'from-orange-500 to-red-600' },
    { title: 'Forbrugslån: Renter og ÅOP', desc: 'Forstå de reelle omkostninger ved forbrugslån.', href: '/forbrugslaan/renter-og-aop', color: 'from-yellow-500 to-orange-600' },
    { title: 'Låneordbog', desc: 'Over 30 finansielle begreber forklaret i klart sprog.', href: '/viden/laaneordbog', color: 'from-slate-500 to-slate-700' },
    { title: 'Lovgivning og rettigheder', desc: 'Kreditaftaleloven, fortrydelsesret, renteloft og Finanstilsynet.', href: '/viden/lovgivning', color: 'from-emerald-500 to-teal-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Guides og vejledning</span><br/>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">om lån i Danmark</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-blue-100 font-light">Alle vores dybdegående artikler samlet ét sted. Fra boligfinansiering til forbrugslån og lovgivning.</p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Link href={g.href} key={i} className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${g.color} mb-4`}></div>
                <h2 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{g.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{g.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">Læs guide <ArrowRight className="h-4 w-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
