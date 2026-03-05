'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { TrendingUp, CheckCircle, ChevronDown, ArrowRight, BookOpen, Coins, Shield, AlertTriangle, Calculator, ArrowDownUp, Building2, TrendingDown, RefreshCw, Percent } from 'lucide-react'

export default function OpkonverteringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    {
      question: 'Hvad koster en opkonvertering?',
      answer: 'De typiske omkostninger ved en opkonvertering inkluderer: Kurtage til realkreditinstituttet (typisk 0,1-0,15% af lånets hovedstol), tinglysningsafgift til staten (1.825 kr. fast + 1,45% af det nye låns hovedstol), sagsgebyr til banken (3.000-8.000 kr.), og eventuel kursskæring. De samlede omkostninger ligger typisk mellem 30.000-60.000 kr. afhængigt af lånets størrelse, men skal altid holdes op imod den potentielle gældsreduktion, som kan være hundredtusinder af kroner.'
    },
    {
      question: 'Hvornår kan det betale sig at opkonvertere?',
      answer: 'Som tommelfingerregel kan det betale sig at opkonvertere, når kursen på dine bagvedliggende obligationer er faldet til under 85-90. Jo lavere kursen er, jo større er den potentielle gældsreduktion. Din tidshorisont spiller også ind: Planlægger du at blive i boligen i mange år, har du længere tid til at tjene omlægningsomkostningerne hjem via den lavere restgæld. Har du under 5 år tilbage i boligen, skal kursfalddet være ekstra stort for at det giver mening.'
    },
    {
      question: 'Hvad sker der, hvis renten falder igen efter en opkonvertering?',
      answer: 'Her opstår det, mange kalder "the double win". Hvis renten stiger, og du opkonverterer og reducerer din restgæld — og renten derefter falder igen — kan du foretage en nedkonvertering. Det betyder, at du indfrier dit nye lån til kurs 100 og optager et nyt lån til en lavere rente, hvilket reducerer din månedlige ydelse. Du har altså først fået en lavere restgæld OG får derefter en lavere ydelse. Denne strategi kræver timing og overblik, men det er netop denne fleksibilitet, der gør det danske realkreditsystem unikt.'
    },
    {
      question: 'Kan jeg opkonvertere mit variabelt forrentede lån?',
      answer: 'Opkonvertering giver størst mening med fastforrentede lån, fordi det er disse obligationer, der har den største kursfølsomhed. Variabelt forrentede lån (F-kort, F1, F3, F5) handler typisk tæt på kurs 100, fordi renten tilpasses løbende. Der er derfor sjældent et stort kursfald at udnytte. Dog kan en "skrå konvertering" fra fast til variabel rente stadig give mening som strategi.'
    },
    {
      question: 'Er kursgevinsten ved opkonvertering skattefri?',
      answer: 'Ja. For private boligejere er kursgevinster ved indfrielse af realkreditlån skattefrie ifølge kursgevinstloven. Det betyder, at den gældsreduktion, du opnår ved opkonvertering, ikke beskattes. Dette gælder uanset om du omlægger fra fast til fast, fra fast til variabel, eller i forbindelse med boligsalg.'
    },
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
    { id: 'hvad-er-opkonvertering', label: 'Hvad er opkonvertering?' },
    { id: 'case-1', label: 'Case 1: Fast til fast — spar 600.000 kr.' },
    { id: 'case-2', label: 'Case 2: Skrå konvertering — spar 300.000 kr.' },
    { id: 'fordele-ulemper', label: 'Fordele og ulemper' },
    { id: 'faq', label: 'Ofte stillede spørgsmål' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* FAQ Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-green-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <span>/</span>
            <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link>
            <span>/</span>
            <span className="text-white font-semibold">Opkonvertering</span>
          </div>
          <div className="mb-8 inline-flex items-center gap-3 bg-green-600/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-green-400/20">
            <TrendingUp className="h-5 w-5 text-green-300" />
            <span className="text-white font-bold text-sm">Strategisk gældspleje for boligejere</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">Opkonvertering: Sådan skærer du</span><br/>
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">hundredtusinder af din restgæld</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-green-100 mb-10 font-light">
            Når renten stiger, åbner der sig en unik mulighed for danske boligejere. Lær hvordan opkonvertering virker, og se konkrete eksempler med besparelser op til 600.000 kr.
          </p>
          <a href="#hvad-er-opkonvertering" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all">
            <BookOpen className="h-5 w-5" />Læs guiden
          </a>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <nav className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-green-600" />Indholdsfortegnelse
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {toc.map((item, i) => (
              <li key={i}><a href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group">
                <span className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold group-hover:bg-green-600 group-hover:text-white transition-colors">{i + 1}</span>
                <span className="text-slate-700 font-semibold text-sm sm:text-base group-hover:text-green-700 transition-colors">{item.label}</span>
              </a></li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Section 1: Hvad er opkonvertering */}
          <section className="mb-14" id="hvad-er-opkonvertering">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><TrendingUp className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvad er opkonvertering?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Opkonvertering er en af de mest kraftfulde økonomiske muligheder, det danske realkreditsystem giver boligejere. Kort fortalt handler det om at udnytte stigende renter til at reducere din restgæld — potentielt med hundredtusinder af kroner.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Mekanikken er enkel: Når markedsrenten stiger, falder kursen på de obligationer, der er knyttet til dit realkreditlån. Da dit lån er direkte forbundet med disse obligationer (via balanceprincippet), kan du "købe din gæld tilbage" til en lavere pris end den, du oprindeligt lånte til. Du indfrier det gamle lån billigt og optager et nyt lån til den aktuelle (højere) rente.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200 mb-6">
              <h3 className="text-xl font-black text-green-900 mb-4">Opkonvertering i tre trin</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Renten stiger, kursen falder', desc: 'Markedsrenten stiger, og kursen på dine bagvedliggende obligationer falder — f.eks. fra kurs 100 til kurs 78.' },
                  { step: '2', title: 'Du indfrier dit gamle lån billigt', desc: 'Du køber dine obligationer tilbage til den lave kurs. Et lån på 3.000.000 kr. kan nu indfries for f.eks. 2.340.000 kr.' },
                  { step: '3', title: 'Du optager et nyt lån', desc: 'Det nye lån dækker kun det beløb, du betalte for indfrielsen — altså en markant lavere restgæld. Til gengæld har det nye lån en højere rente.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-lg">{s.step}</div>
                    <div><h4 className="font-bold text-slate-900">{s.title}</h4><p className="text-slate-600 text-sm">{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
              <p className="text-blue-900 font-medium">
                <strong>Vil du forstå baggrunden?</strong> Læs vores <Link href="/boliglaan" className="text-blue-700 underline hover:text-blue-900">komplette guide til boliglån</Link>, hvor vi forklarer realkreditmodellen, obligationer, kurser og det danske balanceprincip i detaljer.
              </p>
            </div>
          </section>

          {/* Case 1: Fast til Fast */}
          <section className="mb-14" id="case-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Building2 className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Case 1: Den store gældssanering (Fast til Fast)</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-6">
              {/* Scenario header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-xl font-black mb-2">Scenarie: Familie med 1% fastforrentet lån</h3>
                <p className="text-blue-100">Familien Hansen optog et 1% fastforrentet realkreditlån på 3.000.000 kr., da renten var historisk lav. Nu er renten steget markant.</p>
              </div>

              <div className="p-6 sm:p-8">
                {/* Key figures */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Oprindeligt lån', value: '3.000.000 kr.', sub: '1% fast rente' },
                    { label: 'Obligationskurs', value: 'Kurs 78', sub: 'Faldet pga. rentestigning' },
                    { label: 'Indfrielsespris', value: '2.340.000 kr.', sub: '3.000.000 × 0,78' },
                    { label: 'Gældsreduktion', value: '~600.000 kr.', sub: 'Minus omkostninger' },
                  ].map((fig, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-500 font-semibold mb-1">{fig.label}</p>
                      <p className="text-lg sm:text-xl font-black text-slate-900">{fig.value}</p>
                      <p className="text-xs text-slate-400">{fig.sub}</p>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold text-slate-900 text-lg mb-3">Hvad sker der?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Familien indfrier deres 1% lån ved at købe de bagvedliggende obligationer til kurs 78. Det koster dem 2.340.000 kr. i stedet for de 3.000.000 kr., de skyldte. De optager et nyt fastforrentet lån til 5% — men kun på 2.340.000 kr. plus omlægningsomkostninger.
                </p>

                <div className="bg-green-50 rounded-2xl p-5 border border-green-200 mb-4">
                  <p className="text-green-900 font-bold text-lg mb-2">Resultat: Ca. 600.000 kr. skåret af restgælden</p>
                  <p className="text-green-800">Gevinsten er skattefri. Familien har nu en markant lavere restgæld, større friværdi, og en stærkere økonomisk position.</p>
                </div>

                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                  <p className="text-amber-900 text-sm"><strong>Vigtig nuance:</strong> Den månedlige ydelse kan stige, fordi det nye lån har en højere rente (5% vs. 1%). Men selve gælden er faldet med ca. 660.000 kr. brutto. Det er denne balance mellem lavere gæld og højere ydelse, der skal vurderes individuelt.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case 2: Skrå konvertering */}
          <section className="mb-14" id="case-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><ArrowDownUp className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Case 2: Den strategiske &quot;skrå konvertering&quot;</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h3 className="text-xl font-black mb-2">Scenarie: Boligejer med 1,5% fastforrentet lån</h3>
                <p className="text-purple-100">En boligejer har et 1,5% fastforrentet realkreditlån på 2.000.000 kr. Renten er steget, og kursen er faldet til 82. Vedkommende vælger en anden strategi: omlægning til variabel rente.</p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Oprindeligt lån', value: '2.000.000 kr.', sub: '1,5% fast rente' },
                    { label: 'Obligationskurs', value: 'Kurs 82', sub: 'Faldet pga. rentestigning' },
                    { label: 'Ny restgæld', value: '~1.700.000 kr.', sub: 'Omlægges til F-kort' },
                    { label: 'Gældsreduktion', value: '~300.000 kr.', sub: 'Skattefri gevinst' },
                  ].map((fig, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-500 font-semibold mb-1">{fig.label}</p>
                      <p className="text-lg sm:text-xl font-black text-slate-900">{fig.value}</p>
                      <p className="text-xs text-slate-400">{fig.sub}</p>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold text-slate-900 text-lg mb-3">Hvad gør denne strategi anderledes?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ved den "skrå konvertering" skifter boligejeren ikke bare kurs — vedkommende skifter også lånetype. Fra et fastforrentet lån til et variabelt forrentet lån (F-kort). Det betyder, at restgælden falder fra 2.000.000 kr. til ca. 1.700.000 kr., mens den variable rente samtidig holder den månedlige ydelse nede.
                </p>

                <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 mb-4">
                  <p className="text-purple-900 font-bold text-lg mb-2">Resultat: Ca. 300.000 kr. i gældsreduktion + lavere ydelse</p>
                  <p className="text-purple-800">Den skrå konvertering kombinerer to fordele: lavere restgæld OG en potentielt lavere månedlig ydelse (pga. den variable rente). Til gengæld påtager boligejeren sig en renterisiko.</p>
                </div>

                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                  <p className="text-amber-900 text-sm"><strong>Risiko at overveje:</strong> Variabel rente kan stige yderligere. Hvis du vælger denne strategi, bør du have luft i budgettet til at håndtere rentestigninger ved de kommende rentetilpasninger. Overvej F3 eller F5 som et kompromis mellem lav rente og risikospredning.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Fordele og ulemper */}
          <section className="mb-14" id="fordele-ulemper">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><ArrowDownUp className="h-6 w-6 text-white" /></div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Fordele og ulemper ved opkonvertering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Fordele */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-black text-green-900 mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />Fordele
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Lavere restgæld', desc: 'Den mest åbenlyse fordel. Du kan reducere din gæld med potentielt hundredtusinder af kroner.' },
                    { title: 'Større friværdi', desc: 'Med lavere restgæld stiger din friværdi, hvilket giver bedre muligheder for fremtidige lån eller salg.' },
                    { title: 'Skattefri gevinst', desc: 'Kursgevinsten ved indfrielse er skattefri for private boligejere.' },
                    { title: '"Double win"-mulighed', desc: 'Hvis renten falder igen, kan du nedkonvertere og få en lavere ydelse oven i den lavere restgæld.' },
                    { title: 'Forbedret gæld-til-værdi ratio', desc: 'En lavere belåningsgrad kan give adgang til bedre lånevilkår og lavere bidragssats.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div><span className="font-bold text-slate-900">{item.title}:</span> <span className="text-slate-600 text-sm">{item.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ulemper */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-black text-red-900 mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />Ulemper
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Højere rentebetaling', desc: 'Det nye lån har en højere rente, hvilket øger de månedlige renteudgifter — selvom restgælden er lavere.' },
                    { title: 'Omlægningsomkostninger', desc: 'Gebyrer til banken, kurtage og tinglysningsafgift til staten kan løbe op i 30.000-60.000 kr.' },
                    { title: 'Renterisiko (ved skrå konvertering)', desc: 'Vælger du variabel rente, risikerer du yderligere rentestigninger ved kommende tilpasninger.' },
                    { title: 'Timing-usikkerhed', desc: 'Det er svært at ramme det perfekte tidspunkt. Kursen kan falde yderligere efter din omlægning.' },
                    { title: 'Potentielt højere ydelse', desc: 'Selvom restgælden er lavere, kan ydelsen stige markant ved omlægning fra 1% til 5% rente.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-red-700 text-xs font-bold">!</span></div>
                      <div><span className="font-bold text-slate-900">{item.title}:</span> <span className="text-slate-600 text-sm">{item.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-200">
              <p className="text-indigo-900 font-medium"><strong>Bundlinje:</strong> Opkonvertering er ikke for alle og ikke på alle tidspunkter. Det kræver, at kursfalddet er stort nok til at dække omkostningerne og give en reel besparelse. Men for de rette boligejere på det rette tidspunkt kan det være den mest effektive gældsreduktion, der findes i Danmark.</p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-14">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white text-center">
              <div className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-5 py-2 rounded-full border border-white/20">
                <Calculator className="h-5 w-5 text-green-200" />
                <span className="font-bold text-sm">Tjek dit eget lån</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Hvor meget kan du spare på din restgæld?</h2>
              <p className="text-green-100 text-lg mb-4 max-w-2xl mx-auto">
                Brug vores låneberegner til at teste, hvad en omlægning ville betyde for netop dit lån. Indtast dit nuværende lånebeløb, rente og se, hvad der sker med din månedlige ydelse.
              </p>
              <p className="text-green-200 text-sm mb-8 max-w-2xl mx-auto">
                Husk, at en omlægning altid bør vurderes individuelt. Vi anbefaler, at du kontakter dit realkreditinstitut eller en uvildig vejleder for en konkret beregning baseret på dit lån.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#calculator" className="inline-flex items-center gap-3 rounded-full bg-white text-green-700 px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all">
                  <Calculator className="h-5 w-5" />Åbn låneberegneren
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/boliglaan" className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-green-200 transition-colors">
                  <BookOpen className="h-5 w-5" />Læs boliglån-guiden
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om opkonvertering</h2>
            <p className="text-lg text-slate-600">Dybdegående svar om omkostninger, timing og strategi</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}><ChevronDown className="h-4 w-4 text-white" /></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
          <p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> De nævnte cases er forenklede eksempler til illustration. Faktiske besparelser afhænger af dit specifikke lån, aktuelle markedskurser, bidragssatser og omlægningsomkostninger. Vi anbefaler altid, at du søger individuel vejledning, før du beslutter dig for en omlægning. Lån.dk modtager kommission fra partnere, men vores indhold er skrevet med fokus på objektivitet.</p>
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
              <Link href="/boliglaan" className="hover:text-white transition-colors">Boliglån</Link>
              <Link href="/forbrugslaan" className="hover:text-white transition-colors">Forbrugslån</Link>
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
