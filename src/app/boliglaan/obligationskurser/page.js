'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import ArticleByline from '../../../components/ArticleByline'
import { BarChart3, BookOpen, CheckCircle, ChevronDown, AlertTriangle, Calculator, ArrowRight, TrendingUp, TrendingDown, Coins, Shield, ArrowDownUp, Percent, RefreshCw } from 'lucide-react'

export default function ObligationskurserPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Hvad betyder kurs 100 på en realkreditobligation?', answer: 'Kurs 100 (også kaldet "pari") betyder, at obligationen handles til sin pålydende værdi. Hvis du optager et lån på 1.000.000 kr. til kurs 100, får du præcis 1.000.000 kr. udbetalt. Der er intet kurstab. I praksis handler realkreditobligationer sjældent præcis til kurs 100 — de svinger i takt med markedsrenten.' },
    { question: 'Hvorfor falder obligationskursen, når renten stiger?', answer: 'Det skyldes en grundlæggende økonomisk mekanik: Når nye obligationer udstedes med en højere rente, bliver ældre obligationer med lavere rente mindre attraktive for investorer. For at kompensere falder kursen på de ældre obligationer, så det samlede afkast (rente + kursgevinst) matcher markedsniveauet. Denne inverse sammenhæng er fundamentet for konverteringsmulighederne i det danske realkreditsystem.' },
    { question: 'Hvad er kurstab, og hvem betaler det?', answer: 'Kurstab opstår, når du optager et lån til en kurs under 100. Forskellen mellem kurs 100 og den faktiske kurs er dit kurstab. Eksempel: Ved kurs 96 på et lån på 2.000.000 kr. får du kun 1.920.000 kr. udbetalt, men du skylder 2.000.000 kr. Kurstabet er 80.000 kr. Det er dig som låntager, der bærer kurstabet — det er prisen for at låne på det aktuelle markedsniveau.' },
    { question: 'Kan jeg tjene penge på obligationskurser?', answer: 'Ja, via opkonvertering. Hvis renten stiger markant efter du har optaget dit lån, falder kursen på dine bagvedliggende obligationer. Du kan da indfri dit lån ved at købe obligationerne billigt tilbage — forskellen er en skattefri kursgevinst. Eksempel: Falder kursen fra 100 til 80 på et lån på 2.000.000 kr., kan du spare 400.000 kr. på restgælden. Læs mere i vores guide til opkonvertering.' },
    { question: 'Hvor kan jeg se aktuelle obligationskurser?', answer: 'Aktuelle kurser på danske realkreditobligationer kan ses hos de enkelte realkreditinstitutter: Nykredit (nykredit.dk), Realkredit Danmark (rd.dk), Jyske Realkredit (jyskerealkredit.dk) og Totalkredit (totalkredit.dk). Du kan også finde kurser på Nasdaq Copenhagen (nasdaqomxnordic.com), som er den børs, obligationerne handles på.' },
    { question: 'Hvad er forskellen på kursen og renten?', answer: 'Renten (kuponrenten) er den faste procentuelle betaling du som låntager betaler årligt — f.eks. 4% på en 4% obligation. Kursen er markedsprisen på selve obligationen, udtrykt i procent af pålydende. En 4% obligation kan handles til kurs 95, 100 eller 105 afhængigt af markedsrenten. Renten er fast, kursen svinger. Det er kursen, der bestemmer, hvor meget du reelt får udbetalt, når du optager lånet.' },
    { question: 'Hvad er kurssikring, og hvornår bør jeg bruge det?', answer: 'Kurssikring låser kursen på dine obligationer i en aftalt periode (typisk 3-6 måneder), så du er beskyttet mod kursfald mellem det tidspunkt du får lånetilbud og den endelige udbetaling. Det koster typisk 0,1-0,3% af lånebeløbet. Kurssikring anbefales især ved boligkøb, hvor der kan gå uger mellem tilbud og overtagelse, og et kursfald på blot 2 point kan koste dig titusindvis af kroner.' },
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
    { id: 'hvad-er-obligationskurser', label: 'Hvad er obligationskurser?' },
    { id: 'rente-og-kurs', label: 'Sammenhængen mellem rente og kurs' },
    { id: 'laes-en-kurs', label: 'Sådan læser du en obligationskurs' },
    { id: 'kurstab-og-kursgevinst', label: 'Kurstab og kursgevinst' },
    { id: 'kurssikring', label: 'Kurssikring ved boligkøb' },
    { id: 'aktuelle-kurser', label: 'Hvor finder du aktuelle kurser?' },
    { id: 'faq', label: 'Ofte stillede spørgsmål' },
  ]

  const renderAnswer = (text) => {
    if (text.includes('opkonvertering')) {
      const parts = text.split('opkonvertering')
      return <>{parts[0]}<Link href="/opkonvertering" className="text-blue-600 underline hover:text-blue-800">opkonvertering</Link>{parts.slice(1).join('opkonvertering')}</>
    }
    return text
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-indigo-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-indigo-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link><span>/</span>
            <span className="text-white font-semibold">Obligationskurser</span>
          </div>
          <div className="mb-8 inline-flex items-center gap-3 bg-indigo-600/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-indigo-400/20">
            <BarChart3 className="h-5 w-5 text-indigo-300" />
            <span className="text-white font-bold text-sm">Dybdegående guide til obligationskurser</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Obligationskurser:</span><br/>
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Forstå kurserne bag dit boliglån</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-indigo-100 font-light">Obligationskurser styrer, hvor meget du reelt får udbetalt, hvad dit kurstab bliver, og hvornår det kan betale sig at konvertere. Her er den komplette forklaring.</p>
        </div>
      </section>

      {/* BYLINE */}
      <ArticleByline
        title="Obligationskurser: Forstå kurserne bag dit boliglån"
        description="Komplet guide til obligationskurser, sammenhængen mellem rente og kurs, kurstab, kursgevinst og konvertering."
        datePublished="2025-10-01"
        dateModified="2026-03-26"
        breadcrumbs={[{ name: 'Boliglån', href: '/boliglaan' }, { name: 'Obligationskurser', href: '/boliglaan/obligationskurser' }]}
      />

      {/* TOC */}
      <nav className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3"><BookOpen className="h-6 w-6 text-indigo-600" />Indholdsfortegnelse</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {toc.map((item, i) => (
              <li key={i}><a href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors group">
                <span className="flex-shrink-0 h-7 w-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">{i + 1}</span>
                <span className="text-slate-700 font-semibold text-sm sm:text-base group-hover:text-indigo-700 transition-colors">{item.label}</span>
              </a></li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="mb-14">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">Når du optager et <Link href="/boliglaan" className="text-blue-600 underline hover:text-blue-800">boliglån</Link> i Danmark, er dit lån direkte knyttet til obligationer, der handles på det åbne marked. Prisen på disse obligationer — kursen — bestemmer, hvor meget du reelt får udbetalt, og hvilke muligheder du har for at spare penge via konvertering.</p>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">At forstå obligationskurser er derfor ikke bare akademisk viden — det er et praktisk værktøj, der kan spare dig for hundredtusinder af kroner over lånets levetid.</p>
          </div>

          {/* 1. Hvad er obligationskurser */}
          <section className="mb-14" id="hvad-er-obligationskurser">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><BarChart3 className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvad er obligationskurser?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">En obligationskurs er markedsprisen på en realkreditobligation, udtrykt i procent af den pålydende værdi. Kursen fortæller dig, hvad investorer er villige til at betale for obligationen — og dermed, hvor mange penge du som låntager får udbetalt.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">I det danske realkreditsystem gælder <Link href="/viden/laaneordbog#balanceprincippet" className="text-blue-600 underline hover:text-blue-800">balanceprincippet</Link>: For hvert lån udstedes obligationer med præcis samme vilkår. Når du optager et realkreditlån, sælger kreditforeningen obligationer på dine vegne, og du modtager provenuet — altså kursværdien af de solgte obligationer.</p>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 sm:p-8 border border-indigo-200 mb-6">
              <h3 className="text-xl font-black text-indigo-900 mb-4">Den simple formel</h3>
              <div className="bg-white rounded-2xl p-5 border border-indigo-100 text-center mb-4">
                <p className="text-2xl font-black text-indigo-900">Udbetalt beløb = Lånebeløb × (Kurs ÷ 100)</p>
              </div>
              <p className="text-slate-700">Eksempel: Et lån på 2.000.000 kr. til kurs 97 giver dig: 2.000.000 × 0,97 = <strong>1.940.000 kr.</strong> udbetalt. De manglende 60.000 kr. er dit kurstab.</p>
            </div>
          </section>

          {/* 2. Sammenhængen mellem rente og kurs */}
          <section className="mb-14" id="rente-og-kurs">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><ArrowDownUp className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Sammenhængen mellem rente og kurs</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Den vigtigste mekanik at forstå er den <strong>inverse sammenhæng</strong> mellem markedsrenten og obligationskurser: Når renten stiger, falder kurserne — og omvendt. Denne mekanik er fundamentet for hele det danske konverteringssystem.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white" /></div>
                  <h3 className="text-lg font-black text-red-900">Renten stiger → Kursen falder</h3>
                </div>
                <p className="text-slate-700 mb-3">Nye obligationer udbydes med højere rente. De ældre obligationer med lavere kuponrente bliver mindre attraktive, og deres kurs falder.</p>
                <div className="bg-white rounded-xl p-4 border border-red-100">
                  <p className="text-sm text-slate-700"><strong>For dig som låntager:</strong> Dit eksisterende lån kan indfries billigere (<Link href="/opkonvertering" className="text-blue-600 underline hover:text-blue-800">opkonvertering</Link>). Men nye lån bliver dyrere i ydelse.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center"><TrendingDown className="h-5 w-5 text-white" /></div>
                  <h3 className="text-lg font-black text-green-900">Renten falder → Kursen stiger</h3>
                </div>
                <p className="text-slate-700 mb-3">Ældre obligationer med højere kuponrente bliver mere attraktive. Deres kurs stiger, ofte over kurs 100.</p>
                <div className="bg-white rounded-xl p-4 border border-green-100">
                  <p className="text-sm text-slate-700"><strong>For dig som låntager:</strong> Du kan nedkonvertere til lavere rente og reducere din månedlige ydelse. Men dit lån indfries til kurs 100 (ingen gældsreduktion).</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-900 font-medium"><strong>Vigtigt at forstå:</strong> Denne mekanik er ikke en svaghed i systemet — det er en styrke. Det er netop denne kursbevægelse, der giver danske boligejere mulighed for <Link href="/opkonvertering" className="text-amber-800 underline">aktiv gældspleje</Link> via op- og nedkonvertering, som er unikt for Danmark.</p>
            </div>
          </section>

          {/* 3. Sådan læser du en kurs */}
          <section className="mb-14" id="laes-en-kurs">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0"><Percent className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Sådan læser du en obligationskurs</h2>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead><tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                  <th className="text-left p-4 font-bold text-sm">Kurs</th>
                  <th className="text-left p-4 font-bold text-sm">Hvad det betyder</th>
                  <th className="text-right p-4 font-bold text-sm">Udbetalt pr. 1.000.000 kr. lån</th>
                  <th className="text-right p-4 font-bold text-sm">Kurstab</th>
                </tr></thead>
                <tbody>
                  {[
                    { kurs: 'Kurs 102', desc: 'Over pari — obligationen er mere værd end pålydende. Sker når markedsrenten er lavere end kuponrenten.', udb: '1.000.000 kr.', tab: '0 kr. (indfries til max kurs 100)' },
                    { kurs: 'Kurs 100', desc: 'Pari — du får præcis det du låner. Ideel situation, ingen kurstab.', udb: '1.000.000 kr.', tab: '0 kr.' },
                    { kurs: 'Kurs 98', desc: 'Let under pari — lille kurstab. Meget normalt i praksis.', udb: '980.000 kr.', tab: '20.000 kr.' },
                    { kurs: 'Kurs 95', desc: 'Moderat kurstab. Kan ses i perioder med stigende renter.', udb: '950.000 kr.', tab: '50.000 kr.' },
                    { kurs: 'Kurs 85', desc: 'Stort kursfald. Giver mulighed for betydelig opkonvertering.', udb: '850.000 kr.', tab: '150.000 kr.' },
                    { kurs: 'Kurs 78', desc: 'Markant kursfald. Opkonvertering kan spare hundredtusinder.', udb: '780.000 kr.', tab: '220.000 kr.' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 font-bold text-sm text-slate-900 border-b border-slate-100">{row.kurs}</td>
                      <td className="p-4 text-sm text-slate-600 border-b border-slate-100">{row.desc}</td>
                      <td className="p-4 text-right text-sm text-slate-900 font-semibold border-b border-slate-100">{row.udb}</td>
                      <td className="p-4 text-right text-sm text-slate-600 border-b border-slate-100">{row.tab}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
              <p className="text-blue-900 font-medium"><strong>Husk:</strong> Kurstabet ved optagelse af lån er en engangsomkostning. Det er prisen for at låne til den aktuelle markedsrente. Men kursbevægelser <em>efter</em> du har optaget lånet kan udnyttes til <Link href="/opkonvertering" className="text-blue-700 underline">opkonvertering</Link> — og den gevinst er <Link href="/viden/lovgivning" className="text-blue-700 underline">skattefri</Link>.</p>
            </div>
          </section>

          {/* 4. Kurstab og kursgevinst */}
          <section className="mb-14" id="kurstab-og-kursgevinst">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kurstab og kursgevinst i praksis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-black text-red-800 mb-4 flex items-center gap-3"><TrendingDown className="h-6 w-6 text-red-600" />Kurstab (ved optagelse)</h3>
                <p className="text-slate-700 mb-4">Når du optager et lån til en kurs under 100, får du mindre udbetalt end du skylder. Forskellen er dit kurstab.</p>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <p className="text-sm font-bold text-red-900 mb-2">Eksempel:</p>
                  <p className="text-sm text-red-800">Lån: 2.000.000 kr. til kurs 96</p>
                  <p className="text-sm text-red-800">Udbetalt: 1.920.000 kr.</p>
                  <p className="text-sm text-red-800 font-bold">Kurstab: 80.000 kr.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-black text-green-800 mb-4 flex items-center gap-3"><TrendingUp className="h-6 w-6 text-green-600" />Kursgevinst (ved indfrielse)</h3>
                <p className="text-slate-700 mb-4">Når du indfrier dit lån til en kurs under den oprindelige, er forskellen din kursgevinst — <strong>skattefrit</strong>.</p>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <p className="text-sm font-bold text-green-900 mb-2">Eksempel:</p>
                  <p className="text-sm text-green-800">Restgæld: 2.000.000 kr.</p>
                  <p className="text-sm text-green-800">Indfrielseskurs: 80</p>
                  <p className="text-sm text-green-800">Indfrielsespris: 1.600.000 kr.</p>
                  <p className="text-sm text-green-800 font-bold">Kursgevinst: 400.000 kr. (skattefri)</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">Læs vores komplette guide til <Link href="/opkonvertering" className="text-blue-600 underline hover:text-blue-800">opkonvertering</Link> for at se, hvordan du i praksis kan udnytte kursfald til at reducere din restgæld med hundredtusinder af kroner.</p>
          </section>

          {/* 5. Kurssikring */}
          <section className="mb-14" id="kurssikring">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><Shield className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kurssikring ved boligkøb</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Når du <Link href="/boliglaan/koeb-af-bolig" className="text-blue-600 underline hover:text-blue-800">køber bolig</Link>, kan der gå flere uger fra du accepterer et lånetilbud til pengene faktisk udbetales. I den periode kan kursen ændre sig markant.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Kurssikring låser kursen i en aftalt periode (typisk 3-6 måneder), så du kender dit præcise lånebeløb og din ydelse fra start. Det koster typisk 0,1-0,3% af lånebeløbet — en billig forsikring mod ubehagelige overraskelser.</p>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 sm:p-8 border border-orange-200">
              <h3 className="text-xl font-black text-orange-900 mb-4">Hvornår bør du kurssikre?</h3>
              <div className="space-y-3">
                {[
                  'Ved boligkøb, hvor der typisk er 4-8 uger mellem tilbud og overtagelse',
                  'I perioder med volatile renter og store kursbevægelser',
                  'Når dit budget er stramt, og du ikke kan absorbere et uventet kursfald',
                  'Ved store lånebeløb, hvor selv små kursbevægelser koster tusinder',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" /><span className="text-slate-700">{item}</span></div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Aktuelle kurser - eksterne links */}
          <section className="mb-14" id="aktuelle-kurser">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"><RefreshCw className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvor finder du aktuelle obligationskurser?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Aktuelle kurser på danske realkreditobligationer kan du finde direkte hos de danske realkreditinstitutter og på Nasdaq Copenhagen:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { name: 'Nykredit', desc: 'Danmarks største realkreditinstitut. Se aktuelle kurser på alle Nykredits obligationsserier.', url: 'https://www.nykredit.dk/dit-liv/bolig/kurser/' },
                { name: 'Realkredit Danmark', desc: 'Del af Danske Bank-koncernen. Kurser og omlægningsmuligheder.', url: 'https://rd.dk/privat/kurser' },
                { name: 'Jyske Realkredit', desc: 'Del af Jyske Bank-koncernen. Se kurser og beregn omlægning.', url: 'https://www.jyskerealkredit.dk/' },
                { name: 'Totalkredit', desc: 'Formidler lån via lokale og regionale pengeinstitutter.', url: 'https://www.totalkredit.dk/' },
                { name: 'DLR Kredit', desc: 'Specialiseret i lån til landbrug og erhverv.', url: 'https://www.dlr.dk/' },
                { name: 'Nasdaq Copenhagen', desc: 'Den børs hvor realkreditobligationerne handles. Se alle kurser.', url: 'https://www.nasdaqomxnordic.com/' },
              ].map((inst, i) => (
                <a key={i} href={inst.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-5 shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{inst.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">{inst.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">Se kurser på {inst.name.toLowerCase().includes('nasdaq') ? 'Nasdaq' : inst.name} <ArrowRight className="h-3 w-3" /></span>
                </a>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
              <p className="text-blue-900 font-medium"><strong>Tip:</strong> Kurser opdateres løbende i børsens åbningstid (hverdage 9-17). Ved omlægning af lån er det den endelige afregningskurs — ikke dagskursen — der bestemmer dit provenu. Kontakt altid dit realkreditinstitut for et præcist tilbud.</p>
            </div>
          </section>

          {/* Sammenhæng med andre emner */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Læs videre</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Opkonvertering', desc: 'Skær hundredtusinder af restgælden ved at udnytte kursfald', href: '/opkonvertering' },
                { title: 'Realkreditlån vs. banklån', desc: 'Forstå forskellen på de to boliglånstyper', href: '/boliglaan/realkredit-vs-banklaan' },
                { title: 'Køb af bolig', desc: 'Trin-for-trin guide til finansiering af boligkøb', href: '/boliglaan/koeb-af-bolig' },
                { title: 'Låneordbog', desc: 'Alle begreber om obligationer, kurser og lån forklaret', href: '/viden/laaneordbog' },
              ].map((link, i) => (
                <Link href={link.href} key={i} className="group bg-white rounded-2xl p-5 shadow-md border border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{link.title}</h3>
                  <p className="text-slate-600 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Kilder */}
          <section className="mb-14">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Kilder og referencer</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <a href="https://www.nationalbanken.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Danmarks Nationalbank</a> — Pengepolitik og rentefastsættelse</li>
                <li>• <a href="https://www.finanstilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Finanstilsynet</a> — Tilsyn med realkreditinstitutter</li>
                <li>• <a href="https://www.retsinformation.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Retsinformation.dk</a> — Kursgevinstloven og realkreditlovgivning</li>
                <li>• <a href="https://www.realkreditraadet.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Realkreditrådet</a> — Brancheorganisation for danske realkreditinstitutter</li>
                <li>• <a href="https://www.nasdaqomxnordic.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Nasdaq Copenhagen</a> — Obligationshandel og kursdata</li>
              </ul>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om obligationskurser</h2><p className="text-lg text-slate-600">Dybdegående svar om kurser, kurstab og konvertering</p></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-indigo-50/50 transition-colors" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}><ChevronDown className="h-4 w-4 text-white" /></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 border-t border-slate-200"><p className="pt-4 text-slate-700 leading-relaxed text-sm sm:text-base">{renderAnswer(faq.answer)}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial note */}
      <section className="py-8 bg-slate-100 border-t border-slate-200"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm text-slate-500"><strong className="text-slate-700">Redaktionel note:</strong> Obligationskurser ændrer sig løbende. Denne artikel forklarer mekanismerne bag kurserne, men angiver ikke aktuelle markedskurser. Kontakt altid dit realkreditinstitut for konkrete tilbud. <Link href="/om-os/redaktionel-politik" className="text-blue-600 underline">Læs vores redaktionelle politik</Link>.</p></div></section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk ApS — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
