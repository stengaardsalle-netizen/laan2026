'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { ArrowRight, Building2, Banknote, Calculator, Shield, CheckCircle, BookOpen } from 'lucide-react'

export default function SammenlignPage() {
  const loanTypes = [
    { title: 'Boliglån', desc: 'Sammenlign realkreditlån fra danske kreditforeninger. Fast eller variabel rente, konverteringsmuligheder og bidragssatser.', href: '/boliglaan', color: 'from-blue-500 to-indigo-600', features: ['Renter fra 2%', 'Op til 30 års løbetid', 'Konverteringsmulighed'] },
    { title: 'Forbrugslån', desc: 'Find det billigste forbrugslån ved at sammenligne ÅOP, renter og gebyrer fra flere udbydere.', href: '/forbrugslaan', color: 'from-green-500 to-emerald-600', features: ['5.000-500.000 kr.', 'Ingen sikkerhed', 'Hurtig udbetaling'] },
    { title: 'Billån', desc: 'Finansier dit bilkøb med de bedste vilkår. Sammenlign renter og løbetider fra banklån og forhandlerlån.', href: '/billaan', color: 'from-orange-500 to-red-600', features: ['Nye og brugte biler', 'Fleksible vilkår', 'Hurtig godkendelse'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Sammenlign lån</span><br/>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">og find de bedste vilkår</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-blue-100 font-light mb-8">Vælg din lånetype herunder, og brug vores guides og beregner til at forstå de reelle omkostninger, inden du vælger udbyder.</p>
          <div className="inline-flex items-center gap-3 bg-green-500/20 px-5 py-2 rounded-full border border-green-400/20">
            <Shield className="h-5 w-5 text-green-300" /><span className="text-green-100 font-bold text-sm">100% gratis og uforpligtende</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loanTypes.map((lt, i) => (
              <Link href={lt.href} key={i} className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className={`bg-gradient-to-r ${lt.color} p-6 text-white`}>
                  <h2 className="text-2xl font-black mb-2">{lt.title}</h2>
                  <p className="text-white/80 text-sm">{lt.desc}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-6">{lt.features.map((f, j) => (<div key={j} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-slate-600 text-sm">{f}</span></div>))}</div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">Læs guide og sammenlign <ArrowRight className="h-4 w-4" /></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center">
            <Calculator className="h-10 w-10 mx-auto mb-4 text-blue-200" />
            <h2 className="text-2xl font-black mb-3">Prøv vores låneberegner</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">Se hvad dit lån reelt koster med forskellige renter og løbetider.</p>
            <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-blue-700 px-8 py-4 font-bold hover:scale-105 transition-all"><Calculator className="h-5 w-5" />Åbn beregneren<ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
