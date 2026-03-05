'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { Building2, CheckCircle, Calculator, Coins, Clock, TrendingUp, Shield, ArrowRight, BookOpen, ChevronDown, TrendingDown, Banknote, Lock, Unlock, BarChart3, AlertTriangle, Percent, ArrowDownUp, RefreshCw } from 'lucide-react'

export default function BoliglaanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Hvad er kursgevinst ved indfrielse af realkreditlån?', answer: 'Kursgevinst opstår, når du indfrier dit realkreditlån til en kurs, der er lavere end den kurs, du oprindeligt optog lånet til. Hvis du f.eks. optog et lån, da kursen var 98, og renten siden er steget, kan kursen på dine obligationer være faldet til eksempelvis 85. Du kan nu "købe din gæld tilbage" til kurs 85 i stedet for kurs 100, og dermed reducere din restgæld med 15%. I Danmark er denne gevinst skattefri for private boligejere — et unikt træk ved det danske realkreditsystem.' },
    { question: 'Hvornår kan det betale sig at omlægge sit boliglån?', answer: 'Omlægning kan betale sig i to scenarier. Ved opkonvertering (når renten stiger) kan du reducere din restgæld ved at købe dine obligationer billigere tilbage. Ved nedkonvertering (når renten falder) kan du sikre en lavere månedlig ydelse. Som tommelfingerregel bør renteforskellen være mindst 0,5-1 procentpoint for at dække omlægningsomkostningerne, typisk 5.000-15.000 kr. Kontakt altid din bank eller en uafhængig vejleder for en konkret beregning.' },
    { question: 'Hvad er forskellen på fast og variabel rente?', answer: 'Et fastforrentet lån (typisk F30) giver dig en fast rente i hele lånets løbetid. Du kender din præcise ydelse fra dag ét, men betaler en præmie for sikkerheden. Variabelt forrentede lån (F-kort, F1, F3, F5) tilpasser renten ved hvert rentetilpasningsinterval. Du får typisk en lavere startrente, men påtager dig risikoen for, at renten stiger ved næste tilpasning.' },
    { question: 'Hvor meget kan jeg låne til bolig?', answer: 'Du kan som udgangspunkt belåne op til 80% af boligens værdi med realkreditlån. De resterende 20% dækkes typisk af udbetaling og eventuelt banklån. Din personlige lånekapacitet afhænger af husstandens indkomst, eksisterende gæld, og din boligsituation. Finanstilsynet anbefaler, at din samlede gæld ikke overstiger 4 gange din årlige bruttoindkomst.' },
    { question: 'Hvad er afdragsfrihed, og hvornår er det en god idé?', answer: 'Afdragsfrihed betyder, at du i en periode (typisk op til 10 år) kun betaler renter og bidrag, men ikke afdrager på selve lånet. Din restgæld forbliver uændret. Det kan give råderum i perioder med stram økonomi, men det forlænger den samlede tilbagebetalingsperiode og øger de totale renteudgifter. Afdragsfrihed bør ses som et midlertidigt værktøj, ikke en permanent løsning.' },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }

  const toc = [
    { id: 'hvad-er-boliglaan', label: 'Hvad er et boliglån?' },
    { id: 'realkreditlaan', label: 'Realkreditlån: Den danske model' },
    { id: 'obligationer', label: 'Obligationer, kurser og kurstab' },
    { id: 'laanetyper', label: 'Sammenligning: F-kort, F5 og Fastrente' },
    { id: 'konvertering', label: 'Aktiv gældspleje og konvertering' },
    { id: 'kursgevinst', label: 'Skattefri kursgevinster' },
    { id: 'realkreditlaan-vs-banklaan', label: 'Realkreditlån vs. Banklån' },
    { id: 'beregner', label: 'Beregn dit boliglån' },
    { id: 'faq', label: 'Ofte stillede spørgsmål' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* FAQ Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-blue-400/20">
            <Building2 className="h-5 w-5 text-blue-300" />
            <span className="text-white font-bold text-sm">Dybdegående vejledning om boligfinansiering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">Boliglån: Alt du skal vide om</span><br/>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">finansiering af bolig</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-blue-100 mb-10 font-light">
            Forstå realkreditlån, obligationer, kurser, konvertering og skattefri kursgevinster. Din komplette guide til den danske boligfinansieringsmodel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#hvad-er-boliglaan" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all w-full sm:w-auto justify-center">
              <BookOpen className="h-5 w-5" />Læs guiden
            </a>
            <a href="#beregner" className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-blue-300 transition-colors">
              <div className="h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-400/20"><Calculator className="h-6 w-6" /></div>
              Beregn dit boliglån
            </a>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <nav className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-blue-600" />Indholdsfortegnelse
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {toc.map((item, i) => (
              <li key={i}><a href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                <span className="flex-shrink-0 h-7 w-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">{i + 1}</span>
                <span className="text-slate-700 font-semibold text-sm sm:text-base group-hover:text-blue-700 transition-colors">{item.label}</span>
              </a></li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Section 1: Hvad er boliglån */}
          <section className="mb-14" id="hvad-er-boliglaan">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Building2 className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvad er et boliglån?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Et boliglån er ikke bare et lån — det er en strategisk beslutning, der påvirker din økonomi i årtier. I Danmark har vi et af verdens mest sofistikerede boligfinansieringssystemer, bygget op omkring realkreditmodellen. Denne model giver danske boligejere adgang til lån med lave renter, lang løbetid og unikke muligheder for aktiv gældspleje.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Når vi taler om boliglån i Danmark, dækker det typisk over to dele: et realkreditlån (op til 80% af boligens værdi) og eventuelt et supplerende banklån for de resterende procent. Det er realkreditlånet, der udgør fundamentet, og det er her, de store besparelser — og muligheder — ligger.
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
              <h3 className="font-bold text-blue-900 text-lg mb-3">Boliglånets to dele</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2"><Lock className="h-5 w-5 text-blue-600" /><h4 className="font-bold text-slate-900">Realkreditlån (op til 80%)</h4></div>
                  <p className="text-sm text-slate-600">Lav rente, lang løbetid (op til 30 år), finansieret via obligationer. Sikkerhed i boligen.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2"><Banknote className="h-5 w-5 text-indigo-600" /><h4 className="font-bold text-slate-900">Banklån (op til 15%)</h4></div>
                  <p className="text-sm text-slate-600">Højere rente, kortere løbetid, supplerer realkreditlånet. Varierer fra bank til bank.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Realkreditlån */}
          <section className="mb-14" id="realkreditlaan">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><Shield className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Realkreditlån: Den danske model</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Kernen i dansk boligfinansiering er realkreditlånet, som finansieres gennem salg af obligationer. Systemet fungerer som en formidlingsmodel: realkreditinstituttet (f.eks. Nykredit, Realkredit Danmark eller Jyske Realkredit) agerer formidler mellem dig som låntager og investorer på obligationsmarkedet.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Når du optager et realkreditlån, sælger kreditforeningen obligationer på dine vegne. De penge, investorerne betaler for obligationerne, er dem, du modtager som lån. Til gengæld betaler du renter og afdrag, der sendes videre til investorerne. Det er dette direkte link mellem kapitalmarked og boligejer, der gør danske realkreditlån til nogle af de billigste i verden.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200">
              <h3 className="text-xl font-black text-green-900 mb-4">Sådan fungerer realkreditmodellen</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Du ansøger om lån', desc: 'Du kontakter et realkreditinstitut og ansøger om et lån med sikkerhed i din bolig.' },
                  { step: '2', title: 'Obligationer udstedes', desc: 'Realkreditinstituttet sælger obligationer på kapitalmarkedet med præcis samme vilkår som dit lån (balanceprincippet).' },
                  { step: '3', title: 'Du modtager lånebeløbet', desc: 'Provenuet fra obligationssalget udbetales til dig. Beløbet afhænger af den aktuelle kurs.' },
                  { step: '4', title: 'Du betaler ydelse', desc: 'Din månedlige ydelse (rente + afdrag + bidrag) sendes videre til obligationsejerne af kreditforeningen.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-lg">{s.step}</div>
                    <div><h4 className="font-bold text-slate-900">{s.title}</h4><p className="text-slate-600 text-sm">{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Obligationer og kurser */}
          <section className="mb-14" id="obligationer">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><BarChart3 className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Obligationer, kurser og kurstab</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Prisen på de obligationer, der er knyttet til dit lån, kaldes kursen. Kursen svinger i takt med markedsrenten og er afgørende for, hvor meget du reelt får udbetalt, og hvad dine muligheder er for konvertering.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 border border-purple-200 mb-8">
              <h3 className="text-xl font-black text-purple-900 mb-4">Sådan læses en obligationskurs</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-purple-100">
                  <div className="flex items-center gap-3 mb-2"><div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-600" /></div><h4 className="font-bold text-slate-900">Kurs 100 (pari)</h4></div>
                  <p className="text-slate-600">Du får 1 krone udbetalt for hver krone, du låner. Intet kurstab.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-purple-100">
                  <div className="flex items-center gap-3 mb-2"><div className="h-8 w-8 rounded-lg bg-yellow-100 flex items-center justify-center"><TrendingDown className="h-5 w-5 text-yellow-600" /></div><h4 className="font-bold text-slate-900">Kurs 98</h4></div>
                  <p className="text-slate-600">Du får 98 øre udbetalt for hver krone, du skylder. Kurstabet er 2%. Ved et lån på 2.000.000 kr. mister du 40.000 kr. i kurstab.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-purple-100">
                  <div className="flex items-center gap-3 mb-2"><div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center"><TrendingDown className="h-5 w-5 text-red-600" /></div><h4 className="font-bold text-slate-900">Kurs 85</h4></div>
                  <p className="text-slate-600">Du får kun 85 øre per krone. Kurstabet er 15%. Men her opstår en mulighed: Er det dine egne obligationer, kan du købe dem billigt tilbage (opkonvertering).</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-200">
              <p className="text-indigo-900 font-medium"><strong>Husk:</strong> Der er en omvendt sammenhæng mellem markedsrenten og obligationskurser. Når renten stiger, falder kurserne — og omvendt. Denne mekanik er fundamentet for aktiv gældspleje via konvertering.</p>
            </div>
          </section>

          {/* Section 4: Sammenligningstabel */}
          <section className="mb-14" id="laanetyper">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><Percent className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Sammenligning: F-kort, F5 og Fastrente</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Valget af lånetype er en af de vigtigste beslutninger ved boligfinansiering. Herunder sammenligner vi de tre mest almindelige lånetyper på de parametre, der betyder mest for din økonomi og risikoprofil.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="text-left p-4 font-bold text-sm">Parameter</th>
                    <th className="text-center p-4 font-bold text-sm">F-kort (variabel)</th>
                    <th className="text-center p-4 font-bold text-sm">F5 (5-årig tilpasning)</th>
                    <th className="text-center p-4 font-bold text-sm">Fastrente (30 år)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Renterisiko', fkort: 'Høj — tilpasses løbende', f5: 'Middel — tilpasses hvert 5. år', fast: 'Ingen — fast i hele perioden' },
                    { param: 'Startrente (typisk)', fkort: 'Lavest', f5: 'Mellem', fast: 'Højest' },
                    { param: 'Kursfølsomhed', fkort: 'Lav (kurs tæt på 100)', f5: 'Middel', fast: 'Høj (store kursudsving)' },
                    { param: 'Konverteringsmulighed', fkort: 'Begrænset', f5: 'Ved refinansiering', fast: 'Fuld (op- og nedkonvertering)' },
                    { param: 'Afdragsfrihed', fkort: 'Muligt (op til 10 år)', f5: 'Muligt (op til 10 år)', fast: 'Muligt (op til 10 år)' },
                    { param: 'Bedst egnet til', fkort: 'Kort tidshorisont, risikovillig', f5: 'Mellemlang horisont, balanceret', fast: 'Lang horisont, sikkerhed vigtigt' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 font-bold text-sm text-slate-900 border-b border-slate-100">{row.param}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.fkort}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.f5}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.fast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-900 font-medium"><strong>Vigtigt:</strong> Tabellen viser generelle tendenser. Den faktiske rente og de præcise vilkår afhænger af realkreditinstitut, belåningsgrad, boligens placering og din personlige kreditvurdering. Indhent altid konkrete tilbud.</p>
            </div>
          </section>

          {/* Section 5: Konvertering */}
          <section className="mb-14" id="konvertering">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><RefreshCw className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Aktiv gældspleje og konvertering</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Et af de mest kraftfulde værktøjer for danske boligejere er muligheden for at konvertere sit realkreditlån. Konvertering er i praksis en omlægning, hvor du indfrier dit eksisterende lån og optager et nyt — men med strategisk timing kan det spare dig hundredtusinder af kroner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Opkonvertering */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white" /></div>
                  <h3 className="text-xl font-black text-green-900">Opkonvertering</h3>
                </div>
                <p className="text-sm text-slate-700 mb-3"><strong>Scenarie:</strong> Renten stiger</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Når markedsrenten stiger, falder kursen på dine eksisterende obligationer. Du kan nu indfri dit lån ved at købe obligationerne billigere tilbage end den gæld, de repræsenterer. Resultatet er en reduktion af din restgæld.
                </p>
                <div className="bg-white rounded-xl p-4 border border-green-100 mb-3">
                  <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-green-800">Eksempel:</strong> Du har et lån med en restgæld på 2.000.000 kr. Renten stiger, og kursen falder til 85. Du kan nu indfri din gæld for 1.700.000 kr. — en besparelse på 300.000 kr. på restgælden.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                  <p className="text-xs text-amber-900"><strong>Vigtigt at vide:</strong> Ved opkonvertering reducerer du restgælden, men du accepterer til gengæld en højere rente på det nye lån. Det er denne balance, der afgør, om opkonverteringen er fordelagtig.</p>
                </div>
              </div>

              {/* Nedkonvertering */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center"><TrendingDown className="h-5 w-5 text-white" /></div>
                  <h3 className="text-xl font-black text-blue-900">Nedkonvertering</h3>
                </div>
                <p className="text-sm text-slate-700 mb-3"><strong>Scenarie:</strong> Renten falder</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Når markedsrenten falder, indfrier du dit lån til kurs 100 (du skylder stadig det fulde beløb) og optager et nyt lån til en lavere rente. Resultatet er en lavere månedlig ydelse.
                </p>
                <div className="bg-white rounded-xl p-4 border border-blue-100 mb-3">
                  <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-blue-800">Eksempel:</strong> Du har et 4% fastforrentet lån. Renten falder til 2%. Du indfrier det gamle lån til kurs 100 og optager et nyt til 2% — din månedlige ydelse falder markant, typisk tusinder af kroner.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                  <p className="text-xs text-amber-900"><strong>Vigtigt at vide:</strong> Ved nedkonvertering beholder du samme restgæld (eller lidt højere pga. kurstab), men opnår en lavere rente. Omkostningerne til omlægning skal modregnes besparelsen.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Kursgevinster */}
          <section className="mb-14" id="kursgevinst">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Skattefri kursgevinster — unikt for Danmark</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Et af de mest attraktive træk ved det danske realkreditsystem er, at kursgevinster ved indfrielse af realkreditlån er skattefrie for private boligejere. Det betyder, at den gevinst, du opnår ved at købe dine obligationer billigere tilbage (opkonvertering), ikke beskattes.
            </p>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-yellow-200 mb-6">
              <h3 className="text-xl font-black text-orange-900 mb-4">Eksempel på skattefri kursgevinst</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold">1</span>
                  <p className="text-slate-700">Du optager et lån på 2.000.000 kr. til kurs 98 (kurstab: 40.000 kr.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold">2</span>
                  <p className="text-slate-700">Renten stiger markant, og kursen på dine obligationer falder til 80</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold">3</span>
                  <p className="text-slate-700">Du indfrier ved at købe obligationerne til kurs 80: 2.000.000 × 0,80 = 1.600.000 kr.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <p className="text-slate-700"><strong>Kursgevinst: 400.000 kr. — skattefrit.</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
              <p className="text-green-900 font-medium"><strong>Lovgrundlag:</strong> Skattefriheden følger af kursgevinstloven, der fritager private boligejere for beskatning af gevinster ved indfrielse af realkreditlån. Det gælder både ved salg af bolig og ved konvertering.</p>
            </div>
          </section>

          {/* Section 7: Realkredit vs Banklån */}
          <section className="mb-14" id="realkreditlaan-vs-banklaan">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0"><ArrowDownUp className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Realkreditlån vs. Banklån</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Mange boligkøbere bruger begge dele, men det er vigtigt at forstå forskellen, da den har stor betydning for de samlede omkostninger.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                    <th className="text-left p-4 font-bold text-sm">Parameter</th>
                    <th className="text-center p-4 font-bold text-sm">Realkreditlån</th>
                    <th className="text-center p-4 font-bold text-sm">Banklån</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Belåningsgrad', rk: 'Op til 80%', bank: 'Op til 95% (inkl. realkredit)' },
                    { param: 'Typisk rente', rk: 'Lav (obligations-baseret)', bank: 'Højere (bankens egen margin)' },
                    { param: 'Løbetid', rk: 'Op til 30 år', bank: 'Typisk 10-20 år' },
                    { param: 'Sikkerhed', rk: 'Pant i bolig (1. prioritet)', bank: 'Pant i bolig (2. prioritet)' },
                    { param: 'Konverteringsmulighed', rk: 'Ja (op/nedkonvertering)', bank: 'Begrænset' },
                    { param: 'Skattefri kursgevinst', rk: 'Ja', bank: 'Nej' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 font-bold text-sm text-slate-900 border-b border-slate-100">{row.param}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.rk}</td>
                      <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{row.bank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8: Beregner teaser */}
          <section className="mb-14" id="beregner">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <div className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-5 py-2 rounded-full border border-white/20">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <span className="font-bold text-sm">Interaktivt værktøj</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Beregn dit boliglån</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Brug vores låneberegner på forsiden til at teste, hvad dit boliglån vil koste med forskellige renter og løbetider. Se den reelle månedlige ydelse og samlede renteomkostninger.
              </p>
              <p className="text-blue-200 text-sm mb-8">Har du lige læst om ÅOP, kurser og konvertering? Test nu dine nye indsigter med konkrete tal.</p>
              <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-blue-700 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all">
                <Calculator className="h-5 w-5" />Åbn låneberegneren
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om boliglån</h2>
            <p className="text-lg text-slate-600">Dybdegående svar på de vigtigste spørgsmål om dansk boligfinansiering</p>
          </div>
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

      {/* EDITORIAL NOTE */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> Indholdet på denne side er vejledende og udgør ikke finansiel rådgivning. Realkreditmarkedet er komplekst, og vi anbefaler altid, at du søger uvildig økonomisk vejledning, før du træffer beslutninger om boligfinansiering. Vi modtager kommission fra partnere, men vores indhold er skrevet med fokus på objektivitet.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center"><Coins className="h-4 w-4 text-white" /></div>
              <span className="text-lg font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Lån.dk</span>
            </div>
            <nav className="flex gap-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Forside</Link>
              <Link href="/forbrugslaan" className="hover:text-white transition-colors">Forbrugslån</Link>
              <Link href="/opkonvertering" className="hover:text-white transition-colors">Opkonvertering</Link>
              <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
              <Link href="/om-os" className="hover:text-white transition-colors">Om os</Link>
            </nav>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500 text-center">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
