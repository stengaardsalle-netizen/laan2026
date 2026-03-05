'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { Home, BookOpen, CheckCircle, ChevronDown, AlertTriangle, Calculator, ArrowRight, Shield, Coins, FileText, Users } from 'lucide-react'

export default function KoebAfBoligPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Hvor meget skal jeg have i udbetaling?', answer: 'Du skal som minimum have 5% af købsprisen i udbetaling (egne midler). Derudover finansieres typisk 80% via realkreditlån og op til 15% via banklån. De 5% kan komme fra opsparing, arveforskud eller salg af nuværende bolig — men det må ikke være lånte penge.' },
    { question: 'Hvad er en kreditgodkendelse, og hvornår skal jeg have den?', answer: 'En kreditgodkendelse (eller forhåndsgodkendelse) er bankens bekræftelse af, at du kan låne et bestemt beløb. Få den FØR du begynder at kigge på boliger. Den giver dig et realistisk budget og gør dig til en stærkere køber ved forhandlingsbordet.' },
    { question: 'Hvad er forskellen på kontantpris og ejendomsværdi?', answer: 'Kontantprisen er den pris, sælger ønsker for boligen. Ejendomsværdien er den offentlige vurdering, som bruges til at beregne ejendomsværdiskat. Bankens vurdering (handelsværdi) kan afvige fra begge og er den, der bestemmer din belåningsgrad.' },
    { question: 'Hvilke ekstra omkostninger er der ved boligkøb?', answer: 'Ud over boligens pris skal du regne med: tinglysningsafgift (1.825 kr. + 1,45% af lånebeløbet), advokathonorar (5.000-15.000 kr.), ejerskifteforsikring, evt. bygningsgennemgang, og omkostninger til bankens sagsbehandling. Samlet typisk 3-5% af købsprisen.' },
    { question: 'Kan jeg købe bolig alene?', answer: 'Ja. Banken vurderer din individuelle økonomi — indkomst, gæld og rådighedsbeløb. Som enlig køber er dit budget typisk lavere, men mange køber ejerlejligheder eller rækkehuse alene. Banken anbefaler normalt, at din samlede gæld ikke overstiger 4 gange din bruttoindkomst.' },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link><span>/</span>
            <span className="text-white font-semibold">Køb af bolig</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Køb af bolig:</span><br/>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Den komplette guide til finansiering</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-blue-100 font-light">Fra kreditgodkendelse til nøgleoverdragelse. Alt du skal vide om finansieringen, når du køber din første — eller næste — bolig i Danmark.</p>
        </div>
      </section>

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Home className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Finansieringen i overblik</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Når du køber en bolig i Danmark, finansieres den typisk med en kombination af tre elementer: din egen udbetaling, et realkreditlån og eventuelt et <Link href="/boliglaan/realkredit-vs-banklaan" className="text-blue-600 underline hover:text-blue-800">banklån</Link>. Fordelingen følger en fast model, der er reguleret af <Link href="/viden/lovgivning" className="text-blue-600 underline hover:text-blue-800">Finanstilsynet</Link>.</p>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 border border-blue-200 mb-8">
              <h3 className="text-xl font-black text-blue-900 mb-6">De tre lag i boligfinansieringen</h3>
              <div className="space-y-4">
                {[
                  { pct: '80%', title: 'Realkreditlån', desc: 'Den billigste del. Lav rente, op til 30 års løbetid. Sikkerhed i boligen med 1. prioritets pant.', color: 'bg-blue-600' },
                  { pct: '15%', title: 'Banklån', desc: 'Dyrere rente og kortere løbetid (typisk 10-20 år). 2. prioritets pant i boligen. Ikke altid nødvendigt, hvis du har mere end 20% i udbetaling.', color: 'bg-indigo-500' },
                  { pct: '5%', title: 'Udbetaling (egne midler)', desc: 'Lovkrav. Skal komme fra din egen opsparing, ikke fra lån. Jo mere du selv betaler, jo bedre vilkår får du på resten.', color: 'bg-green-500' },
                ].map((layer, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${layer.color} text-white flex items-center justify-center font-black text-lg`}>{layer.pct}</div>
                    <div><h4 className="font-bold text-slate-900 text-lg">{layer.title}</h4><p className="text-slate-600">{layer.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><FileText className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Trin-for-trin: Fra drøm til nøgler</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Kortlæg din økonomi', desc: 'Før du kigger på boliger, skal du kende dit budget. Hvad er din husstandsindkomst? Hvad er dine faste udgifter? Hvor meget har du i opsparing til udbetaling? Og hvad er dit månedlige rådighedsbeløb, når boligudgifterne er betalt?' },
                { step: '2', title: 'Få en kreditgodkendelse', desc: 'Kontakt din bank og få en forhåndsgodkendelse. Den fortæller dig præcist, hvad du kan låne, og på hvilke vilkår. Det gør boligsøgningen realistisk og viser sælger, at du er en seriøs køber.' },
                { step: '3', title: 'Vælg lånetype', desc: 'Fast eller variabel rente? Med eller uden afdragsfrihed? Kort eller lang løbetid? Disse valg har enorm betydning for din økonomi i årtier. Læs vores guide til boliglån for at forstå dine muligheder.' },
                { step: '4', title: 'Find og køb boligen', desc: 'Med budget og godkendelse på plads kan du søge målrettet. Husk at indregne alle handelsomkostninger (tinglysning, advokat, forsikring) i dit samlede budget.' },
                { step: '5', title: 'Underskrift og udbetaling', desc: 'Når handelen er på plads, udarbejder advokaten skøde og købsaftale. Banken udsteder lånedokumenterne, og du betaler udbetaling og omkostninger. Pengene frigives ved overtagelsen.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-2xl p-5 shadow-md border border-slate-200">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-lg">{s.step}</div>
                  <div><h3 className="font-bold text-slate-900 text-lg mb-1">{s.title}</h3><p className="text-slate-600 leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Omkostninger ud over boligens pris</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Mange førstegangskøbere undervurderer de ekstra omkostninger ved boligkøb. Her er et realistisk overblik:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead><tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <th className="text-left p-4 font-bold text-sm">Omkostning</th>
                  <th className="text-right p-4 font-bold text-sm">Typisk beløb</th>
                </tr></thead>
                <tbody>
                  {[
                    { name: 'Tinglysningsafgift (skøde)', amount: '1.825 kr. + 0,6% af købesum' },
                    { name: 'Tinglysningsafgift (pant)', amount: '1.825 kr. + 1,45% af lånebeløb' },
                    { name: 'Advokathonorar', amount: '5.000-15.000 kr.' },
                    { name: 'Ejerskifteforsikring', amount: '10.000-25.000 kr.' },
                    { name: 'Bankens sagsgebyr', amount: '5.000-10.000 kr.' },
                    { name: 'Energimærke (hvis mangler)', amount: '1.000-3.000 kr.' },
                    { name: 'Evt. tilstandsrapport', amount: '5.000-10.000 kr.' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 text-sm text-slate-900 font-medium border-b border-slate-100">{row.name}</td>
                      <td className="p-4 text-right text-sm text-slate-600 border-b border-slate-100">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-900 font-medium"><strong>Tommelfingerregel:</strong> Regn med ekstra omkostninger på ca. 3-5% af købsprisen. Ved en bolig til 3.000.000 kr. bør du afsætte 90.000-150.000 kr. til omkostninger ud over udbetaling og lånebeløb.</p>
            </div>
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><Shield className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Råd til førstegangskøbere</h2>
            </div>
            <div className="space-y-3">
              {[
                'Start med at spare op til mindst 5% i udbetaling — jo mere, jo bedre vilkår',
                'Få en kreditgodkendelse FØR du kigger på boliger, så du kender dit reelle budget',
                'Overvej fast rente, hvis du vil have tryghed om din ydelse de næste mange år',
                'Husk at budgettere med ejerudgifter: ejendomsskat, forsikring, vedligeholdelse og varme',
                'Brug en uafhængig advokat — ikke kun bankens eller mæglerens',
                'Lad være med at strække budgettet til det yderste — hav altid luft til uforudsete udgifter',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{tip}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Klar til at beregne dit boliglån?</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">Brug vores låneberegner til at se, hvad den månedlige ydelse bliver med forskellige renter og løbetider.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-blue-700 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all"><Calculator className="h-5 w-5" />Åbn låneberegneren<ArrowRight className="h-5 w-5" /></Link>
                <Link href="/boliglaan" className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-blue-200 transition-colors"><BookOpen className="h-5 w-5" />Læs boliglån-guiden</Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om boligkøb</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}><ChevronDown className="h-4 w-4 text-white" /></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 border-t border-slate-200"><p className="pt-4 text-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100 border-t border-slate-200"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> Denne guide er vejledende. Boligkøb er en stor økonomisk beslutning, og vi anbefaler altid at søge individuel vejledning fra bank og advokat. <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">Læs vores redaktionelle politik</Link>.</p></div></section>
      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
