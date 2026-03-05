'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { TrendingUp, BookOpen, CheckCircle, ChevronDown, AlertTriangle, Calculator, ArrowRight, Coins, Home, Shield } from 'lucide-react'

export default function TillaegsloanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Hvad er friværdi, og hvordan beregnes den?', answer: 'Friværdi er forskellen mellem din boligs aktuelle markedsværdi og din samlede gæld i boligen (realkredit + banklån). Eksempel: Er din bolig vurderet til 4.000.000 kr., og du skylder 2.500.000 kr., er din friværdi 1.500.000 kr. Heraf kan du typisk belåne op til 80% af boligværdien via realkredit.' },
    { question: 'Hvad kan jeg bruge et tillægslån til?', answer: 'Du kan bruge et tillægslån til stort set alt: renovering, energiforbedringer, indfrielse af dyrere lån, investering, børnenes uddannelse, eller som ekstra likviditet. De mest fornuftige formål er dem, der enten øger boligens værdi (renovering) eller reducerer dine samlede renteudgifter (indfrielse af banklån eller forbrugslån).' },
    { question: 'Hvad koster et tillægslån?', answer: 'Omkostningerne inkluderer: vurdering af boligen (2.000-5.000 kr.), tinglysningsafgift (1.825 kr. + 1,45% af beløbet), kursskæring/kurtage, og eventuel sagsbehandling. Samlet typisk 15.000-40.000 kr. afhængigt af beløbet. Derefter betaler du den løbende ydelse (rente + afdrag + bidrag) som ethvert andet realkreditlån.' },
    { question: 'Kan jeg få tillægslån med afdragsfrihed?', answer: 'Ja, hvis din samlede belåningsgrad er under 80%. Du kan typisk få afdragsfrihed i op til 10 år. Det holder den månedlige ydelse lav, men husk at restgælden ikke falder i perioden. Afdragsfrihed bør bruges strategisk, ikke som en permanent løsning.' },
    { question: 'Hvornår bør man IKKE tage et tillægslån?', answer: 'Undgå tillægslån, hvis du: allerede har en belåningsgrad tæt på 80%, ikke har et klart formål med pengene, bruger dem til forbrug du ikke kan understøtte med din indkomst, eller hvis du planlægger at sælge boligen inden for kort tid (omlægningsomkostningerne tjener sig ikke ind).' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-cyan-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link><span>/</span>
            <span className="text-white font-semibold">Tillægslån</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Tillægslån i friværdien:</span><br/>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Frigør penge fra din bolig</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-cyan-100 font-light">Din bolig er mere end et hjem — den er også en finansiel ressource. Lær hvordan du kan låne mod din friværdi, og hvornår det giver mening.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><Home className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvad er et tillægslån i friværdien?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Et tillægslån er et ekstra realkreditlån, du optager med sikkerhed i den friværdi, der er i din bolig. Hvis din bolig er steget i værdi, eller du har afdraget på dit eksisterende lån, har du opbygget friværdi — og den kan du belåne.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Da tillægslånet er et realkreditlån, får du de samme fordele: lav rente, lang løbetid, mulighed for konvertering og skattefri kursgevinster. Det gør det til en af de billigste måder at låne penge på.</p>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 sm:p-8 border border-cyan-200 mb-6">
              <h3 className="text-xl font-black text-cyan-900 mb-4">Beregn din tilgængelige friværdi</h3>
              <div className="space-y-4">
                {[
                  { label: 'Boligens markedsværdi', example: '4.000.000 kr.' },
                  { label: 'Maks. realkreditbelåning (80%)', example: '3.200.000 kr.' },
                  { label: 'Eksisterende realkreditgæld', example: '− 2.200.000 kr.' },
                  { label: 'Tilgængelig friværdi til tillægslån', example: '= 1.000.000 kr.' },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center ${i === 3 ? 'pt-3 border-t-2 border-cyan-300' : ''}`}>
                    <span className={`${i === 3 ? 'font-black text-cyan-900' : 'text-slate-700'}`}>{row.label}</span>
                    <span className={`font-bold ${i === 3 ? 'text-cyan-900 text-xl' : 'text-slate-900'}`}>{row.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><CheckCircle className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvornår giver tillægslån mening?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Renovering og energiforbedringer', desc: 'Øger boligens værdi og kan reducere energiudgifter. Ofte den mest fornuftige brug af friværdi.', icon: '🏠' },
                { title: 'Indfrielse af dyr gæld', desc: 'Erstat banklån (4-8% rente) eller forbrugslån (8-25%) med et billigt realkreditlån (2-5%). Læs mere om renter og ÅOP.', icon: '💰', href: '/forbrugslaan/renter-og-aop' },
                { title: 'Større investering', desc: 'Udnyt den lave realkreditrente til at finansiere f.eks. en lejlighed til udlejning eller andre aktiver.', icon: '📈' },
                { title: 'Ekstra likviditet', desc: 'Skab økonomisk buffer i perioder med stram økonomi eller uforudsete udgifter.', icon: '🛡️' },
              ].map((use, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-slate-200">
                  <div className="text-2xl mb-3">{use.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{use.title}</h3>
                  <p className="text-slate-600 text-sm">{use.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Omkostninger ved tillægslån</h2>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead><tr className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                  <th className="text-left p-4 font-bold text-sm">Omkostning</th>
                  <th className="text-right p-4 font-bold text-sm">Typisk beløb</th>
                </tr></thead>
                <tbody>
                  {[
                    { name: 'Vurdering af bolig', amount: '2.000-5.000 kr.' },
                    { name: 'Tinglysningsafgift', amount: '1.825 kr. + 1,45% af beløb' },
                    { name: 'Kurtage/kursskæring', amount: '0,1-0,15% af hovedstol' },
                    { name: 'Sagsgebyr til bank', amount: '3.000-8.000 kr.' },
                    { name: 'Samlet (ved 500.000 kr. lån)', amount: 'Ca. 15.000-25.000 kr.' },
                  ].map((row, i) => (
                    <tr key={i} className={i === 4 ? 'bg-cyan-50 font-bold' : i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 text-sm text-slate-900 border-b border-slate-100">{row.name}</td>
                      <td className="p-4 text-right text-sm text-slate-600 border-b border-slate-100">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0"><AlertTriangle className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Risici og opmærksomhedspunkter</h2>
            </div>
            <div className="bg-red-50 rounded-3xl p-6 border border-red-200">
              <div className="space-y-3">
                {[
                  'Du øger din samlede gæld — sørg for at din økonomi kan bære den ekstra ydelse',
                  'Hvis boligpriserne falder, kan du ende med negativ friværdi (gæld større end boligens værdi)',
                  'Omlægningsomkostningerne skal tjenes hjem — overvej din tidshorisont i boligen',
                  'Tillægslån til forbrug (ferie, bil, elektronik) er sjældent fornuftigt — du betaler renter i op til 30 år',
                  'Din bidragssats kan stige, hvis den samlede belåningsgrad overstiger 60% eller 80%',
                ].map((risk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-red-700 text-xs font-bold">!</span></div>
                    <span className="text-red-900">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-14">
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Beregn din månedlige ydelse</h2>
              <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">Brug vores beregner til at se, hvad et tillægslån koster dig pr. måned med forskellige beløb og renter.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-cyan-700 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all"><Calculator className="h-5 w-5" />Åbn låneberegneren<ArrowRight className="h-5 w-5" /></Link>
                <Link href="/boliglaan" className="text-lg font-bold text-white hover:text-cyan-200 transition-colors">← Boliglån-guiden</Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om tillægslån</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}><ChevronDown className="h-4 w-4 text-white" /></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 border-t border-slate-200"><p className="pt-4 text-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100 border-t border-slate-200"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm text-slate-500"><strong className="text-slate-700">Redaktionel note:</strong> Vejledende indhold. Kontakt dit realkreditinstitut for konkrete tilbud. <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">Redaktionel politik</Link>.</p></div></section>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
