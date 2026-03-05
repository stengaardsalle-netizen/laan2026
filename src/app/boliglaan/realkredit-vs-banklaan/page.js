'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { ArrowDownUp, BookOpen, CheckCircle, ChevronDown, Shield, Coins, Building2, Banknote, AlertTriangle, Calculator, ArrowRight } from 'lucide-react'

export default function RealkreditVsBankloanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Kan jeg undgå banklån helt?', answer: 'Ja, hvis du har mere end 20% i udbetaling (egne midler), behøver du ikke et banklån. De 80% dækkes af realkreditlånet, og resten af din opsparing. Jo mere du selv kan betale, jo billigere bliver den samlede finansiering.' },
    { question: 'Hvad er bidragssats, og hvorfor betaler man den?', answer: 'Bidragssatsen er realkreditinstituttets pris for at administrere dit lån og dække deres risiko. Den beregnes som en procentdel af restgælden (typisk 0,5-1,2%) og betales løbende oven i din ydelse. Bidragssatsen stiger med belåningsgraden — lån over 60% af boligens værdi har højere bidrag.' },
    { question: 'Er banklån altid dyrere end realkreditlån?', answer: 'Ja, i praksis altid. Banklån har typisk 2-5 procentpoint højere rente end realkreditlån, fordi banken påtager sig mere risiko (2. prioritet i boligen). Derudover har banklån kortere løbetid, hvilket giver en højere månedlig ydelse. Derfor bør man minimere banklånets andel.' },
    { question: 'Kan jeg omlægge mit banklån til realkreditlån?', answer: 'Ikke direkte. Realkreditlån kan maksimalt udgøre 80% af boligens værdi. Men hvis din bolig er steget i værdi, og din belåningsgrad er faldet under 80%, kan du optage et nyt realkreditlån, der dækker det eksisterende banklån. Det kræver en ny vurdering af boligen.' },
  ]

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-indigo-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link><span>/</span>
            <span className="text-white font-semibold">Realkreditlån vs. Banklån</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Realkreditlån vs. Banklån:</span><br/>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Hvad er forskellen, og hvad skal du vælge?</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-indigo-100 font-light">De to lånetyper arbejder sammen, men har vidt forskellige vilkår og omkostninger. Her er den komplette sammenligning.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Den fundamentale forskel</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Den afgørende forskel er, hvordan pengene skaffes. Et realkreditlån finansieres via obligationsmarkedet — investorer køber obligationer, og pengene går til dig som boligkøber. Prisen bestemmes af markedet, hvilket historisk har givet de laveste renter. Et banklån finansieres af bankens egne midler, og prisen sættes af banken selv — typisk markant højere. Er du <Link href="/boliglaan/koeb-af-bolig" className="text-blue-600 underline hover:text-blue-800">førstegangskøber</Link>? Læs vores guide til køb af bolig.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4"><div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center"><Building2 className="h-5 w-5 text-white" /></div><h3 className="text-xl font-black text-blue-900">Realkreditlån</h3></div>
                <div className="space-y-3">
                  {['Finansieret via obligationsmarkedet','Op til 80% af boligens værdi','1. prioritets pant','Rente: typisk 1-5% (afhænger af type)','Løbetid: op til 30 år','Fuld konverteringsmulighed','Skattefri kursgevinster','Bidragssats betales løbende'].map((item,i)=>(<div key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0"/><span className="text-slate-700 text-sm">{item}</span></div>))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4"><div className="h-10 w-10 rounded-xl bg-orange-600 flex items-center justify-center"><Banknote className="h-5 w-5 text-white" /></div><h3 className="text-xl font-black text-orange-900">Banklån</h3></div>
                <div className="space-y-3">
                  {['Finansieret af bankens egne midler','Op til 15% af boligens værdi (80-95%)','2. prioritets pant','Rente: typisk 4-8% (variabel)','Løbetid: typisk 10-20 år','Begrænset konvertering','Ingen skattefri kursgevinster','Ingen bidragssats, men højere rente'].map((item,i)=>(<div key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0"/><span className="text-slate-700 text-sm">{item}</span></div>))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Detaljeret sammenligning</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead><tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="text-left p-4 font-bold text-sm">Parameter</th>
                  <th className="text-center p-4 font-bold text-sm">Realkreditlån</th>
                  <th className="text-center p-4 font-bold text-sm">Banklån</th>
                </tr></thead>
                <tbody>
                  {[
                    { p: 'Maks. belåning', rk: 'Op til 80% af boligværdi', b: 'Op til 95% (inkl. realkredit)' },
                    { p: 'Typisk rente', rk: '1-5% (afhænger af type/løbetid)', b: '4-8% (variabel)' },
                    { p: 'Løbetid', rk: 'Op til 30 år', b: 'Typisk 10-20 år' },
                    { p: 'Sikkerhedsprioritet', rk: '1. prioritet (laveste risiko)', b: '2. prioritet (højere risiko)' },
                    { p: 'Afdragsfrihed', rk: 'Muligt (op til 10 år)', b: 'Sjældent muligt' },
                    { p: 'Konvertering', rk: 'Fuld op-/nedkonvertering', b: 'Meget begrænset' },
                    { p: 'Skattefri kursgevinst', rk: 'Ja', b: 'Nej' },
                    { p: 'Ekstra omkostning', rk: 'Bidragssats (0,5-1,2%)', b: 'Evt. oprettelsesgebyr' },
                    { p: 'Prisfastsættelse', rk: 'Markedsdrevet (obligationer)', b: 'Bankens egen margin' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 font-bold text-sm text-slate-900 border-b border-slate-100">{row.p}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.rk}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Hvad koster forskellen i praksis?</h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200 mb-6">
              <h3 className="text-xl font-black text-green-900 mb-4">Eksempel: Bolig til 3.000.000 kr.</h3>
              <p className="text-slate-700 mb-4">Med 5% udbetaling (150.000 kr.) finansieres boligen med:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3"><div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div><p className="text-slate-700"><strong>Realkreditlån: 2.400.000 kr.</strong> (80%) til f.eks. 4% fast rente i 30 år = ca. 11.450 kr./md. + bidrag</p></div>
                <div className="flex items-start gap-3"><div className="h-6 w-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div><p className="text-slate-700"><strong>Banklån: 450.000 kr.</strong> (15%) til f.eks. 6% variabel rente i 15 år = ca. 3.800 kr./md.</p></div>
              </div>
              <div className="mt-4 bg-white rounded-xl p-4 border border-green-200">
                <p className="text-green-900 font-bold">Konklusion: Banklånet på kun 450.000 kr. koster næsten lige så meget pr. måned som et realkreditlån på 5× beløbet. Det understreger, hvorfor du bør minimere banklånets andel.</p>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Strategier til at minimere banklånet</h2>
            <div className="space-y-3">
              {[
                { t: 'Spar mere op', d: 'Jo mere du selv kan betale i udbetaling, jo mindre banklån behøver du.' },
                { t: 'Køb billigere', d: 'En lidt billigere bolig kan betyde, at du slet ikke behøver banklån.' },
                { t: 'Vent på værdistigning', d: 'Hvis boligen stiger i værdi, falder din belåningsgrad, og du kan indfri banklånet med et nyt realkreditlån.' },
                { t: 'Ekstra afdrag på banklånet', d: 'Prioritér altid at afdrage det dyre banklån først. Sparet rente er skattefri.' },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong className="text-slate-900">{tip.t}:</strong> <span className="text-slate-600">{tip.d}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Beregn din boligfinansiering</h2>
              <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">Se hvad de forskellige lånetyper koster dig pr. måned med vores beregner.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-indigo-700 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all"><Calculator className="h-5 w-5" />Åbn låneberegneren<ArrowRight className="h-5 w-5" /></Link>
                <Link href="/boliglaan" className="text-lg font-bold text-white hover:text-indigo-200 transition-colors">← Tilbage til boliglån-guiden</Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}><ChevronDown className="h-4 w-4 text-white" /></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 border-t border-slate-200"><p className="pt-4 text-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100 border-t border-slate-200"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm text-slate-500"><strong className="text-slate-700">Redaktionel note:</strong> Renteniveauer er vejledende og afhænger af markedsforhold. <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">Læs vores redaktionelle politik</Link>.</p></div></section>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
