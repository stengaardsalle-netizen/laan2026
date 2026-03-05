'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { ArrowRight, CheckCircle, Shield, Calculator, BookOpen, FileText } from 'lucide-react'

export default function AnsogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Forbered din</span><br/>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">låneansøgning</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-green-100 font-light">En god forberedelse øger dine chancer for godkendelse og bedre vilkår. Her er hvad du skal vide, inden du ansøger.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Inden du ansøger: Tjekliste</h2>
            <div className="space-y-4">
              {[
                { title: 'Kend dit budget', desc: 'Beregn dit rådighedsbeløb: indkomst minus faste udgifter. Jo større rådighedsbeløb, jo bedre vilkår.' },
                { title: 'Ryd op i eksisterende gæld', desc: 'Indfri smålån og afmeld ubrugte kreditkort. Det forbedrer din kreditvurdering markant.' },
                { title: 'Forstå ÅOP', desc: 'Sammenlign altid på ÅOP — ikke bare renten. ÅOP inkluderer alle omkostninger.' },
                { title: 'Indhent flere tilbud', desc: 'Ansøg hos mindst 3 udbydere. Prisforskellen kan være tusinder af kroner over lånets løbetid.' },
                { title: 'Hav dokumentation klar', desc: 'Lønsedler, årsopgørelse, kontooversigt og eventuelt skatteoplysninger.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md border border-slate-200">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900">{item.title}</h3><p className="text-slate-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Vælg den rigtige lånetype</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Boliglån', desc: 'Køb af bolig, omlægning, tillægslån', href: '/boliglaan' },
                { title: 'Forbrugslån', desc: 'Større udgifter, renovering, samlelån', href: '/forbrugslaan' },
                { title: 'Billån', desc: 'Finansiering af ny eller brugt bil', href: '/billaan' },
                { title: 'Lån penge hurtigt', desc: 'Akut behov, hurtig udbetaling', href: '/laan-penge-hurtigt' },
              ].map((lt, i) => (
                <Link href={lt.href} key={i} className="bg-white rounded-2xl p-5 shadow-md border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all group">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700">{lt.title}</h3>
                  <p className="text-slate-600 text-sm">{lt.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl font-black mb-4">Brug vores beregner først</h2>
              <p className="text-green-100 mb-6 max-w-xl mx-auto">Se hvad dit lån koster, inden du ansøger. Det giver dig et stærkere forhandlingsgrundlag.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-green-700 px-8 py-4 font-bold hover:scale-105 transition-all"><Calculator className="h-5 w-5" />Beregn dit lån<ArrowRight className="h-5 w-5" /></Link>
                <Link href="/guide" className="text-white font-bold hover:text-green-200"><BookOpen className="h-5 w-5 inline mr-2" />Læs vores guides</Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
