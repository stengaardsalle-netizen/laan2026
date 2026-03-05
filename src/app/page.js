'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/layout/Header'
import { Calculator, Coins, Clock, TrendingUp, Sparkles, ArrowRight, BookOpen, CheckCircle, Shield, Users, Award, ChevronDown, AlertTriangle, Percent, FileText, Scale } from 'lucide-react'

export default function HomePage() {
  const [amount, setAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(8)
  const [termYears, setTermYears] = useState(5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    { question: 'Hvor meget kan jeg låne penge online?', answer: 'De fleste online udbydere tilbyder lån fra 5.000 kr. op til 500.000 kr. uden sikkerhed. Beløbet afhænger dog 100% af din individuelle kreditvurdering og dit rådighedsbeløb.' },
    { question: 'Hvordan finder jeg det billigste lån?', answer: 'Du finder det billigste lån ved at sammenligne ÅOP på tværs af flere tilbud med præcis samme lånebeløb og løbetid. Hold øje med de samlede tilbagebetalingsbeløb for at se de reelle omkostninger.' },
    { question: 'Hvad sker der, hvis jeg ikke kan betale mit lån tilbage?', answer: 'Hvis du misligholder dit lån, vil du først modtage rykkergebyrer. Fortsætter problemet, kan du blive registreret i gældsregistre, hvilket vil gøre det næsten umuligt at låne penge, tegne abonnementer eller købe på afbetaling i fremtiden. Kontakt altid din bank hurtigst muligt, hvis du får problemer.' },
    { question: 'Er det sikkert at låne penge online?', answer: 'Ja, så længe du vælger en udbyder, der er under tilsyn af Finanstilsynet. I Danmark er der meget strenge krav til gennemsigtighed og markedsføring af lån, herunder renteloft og ÅOP-loft.' },
    { question: 'Kan jeg indfri mit lån før tid?', answer: 'Ja, ifølge dansk lovgivning har du altid ret til at indfri dit lån før tid. Hos de fleste udbydere er dette gratis, og det er en fremragende måde at spare penge på renteudgifter, hvis du får luft i økonomien.' },
    { question: 'Hvad er forskellen på et privatlån og et samlelån?', answer: 'Et privatlån er et nyt lån til her-og-nu forbrug. Et samlelån bruges til at afbetale flere eksisterende lån og kreditter for at samle dem ét sted, typisk til en lavere samlet rente og færre gebyrer.' },
    { question: 'Hvor hurtigt bliver pengene udbetalt?', answer: 'Udbetalingstiden varierer. Nogle udbydere kan udbetale samme dag eller inden for 24 timer efter godkendelse med MitID, mens andre bruger 1-2 bankdage.' },
    { question: 'Påvirker det min kreditscore at ansøge om lån?', answer: 'Selve det at indhente tilbud påvirker ikke din kreditscore negativt i Danmark. Dog foretager hver bank et opslag i kreditregistre, og mange afslag inden for kort tid kan ses som et risikosignal.' },
  ]

  useEffect(() => {
    const r = interestRate / 100 / 12, n = termYears * 12
    if (r === 0) { setMonthlyPayment(amount / n); setTotalCost(amount); setTotalInterest(0) }
    else { const p = (amount * r * Math.pow(1+r,n))/(Math.pow(1+r,n)-1); setMonthlyPayment(p); setTotalCost(p*n); setTotalInterest(p*n - amount) }
  }, [amount, interestRate, termYears])

  const fmt = (v) => new Intl.NumberFormat('da-DK',{style:'currency',currency:'DKK',maximumFractionDigits:0}).format(v)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl animate-bounce" style={{animationDuration:'3s'}}></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-2xl px-5 py-2 sm:px-8 sm:py-3 rounded-full border border-blue-400/20">
              <div className="relative"><div className="h-2 w-2 bg-green-400 rounded-full animate-ping absolute"></div><div className="h-2 w-2 bg-green-500 rounded-full"></div></div>
              <span className="text-white font-bold text-sm sm:text-base">Uafhængig vejledning om lån i Danmark</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">Den ultimative guide til</span><br/>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">lån i Danmark</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-blue-100 mb-10 font-light px-4">Alt du skal vide før du låner. Forstå ÅOP, renter, kreditvurdering og find det billigste lån — med vores uafhængige vejledning og låneberegner.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 px-4">
              <a href="#guide" className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"><BookOpen className="h-5 w-5"/>Læs guiden</a>
              <a href="#calculator" className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-blue-300 transition-colors"><div className="h-12 w-12 rounded-full bg-blue-600/20 backdrop-blur-2xl flex items-center justify-center border border-blue-400/20"><Calculator className="h-6 w-6"/></div>Prøv låneberegneren</a>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="backdrop-blur-2xl rounded-2xl p-3 sm:p-5 border bg-blue-500/15 border-blue-400/20"><div className="text-xl sm:text-3xl font-black mb-1 text-blue-300">Gratis</div><div className="text-white/80 font-medium text-xs sm:text-sm">Uafhængig vejledning</div></div>
              <div className="backdrop-blur-2xl rounded-2xl p-3 sm:p-5 border bg-indigo-500/15 border-indigo-400/20"><div className="text-xl sm:text-3xl font-black mb-1 text-indigo-300">ÅOP</div><div className="text-white/80 font-medium text-xs sm:text-sm">Forstå reelle omkostninger</div></div>
              <div className="backdrop-blur-2xl rounded-2xl p-3 sm:p-5 border bg-green-500/15 border-green-400/20"><div className="text-xl sm:text-3xl font-black mb-1 text-green-300">50+</div><div className="text-white/80 font-medium text-xs sm:text-sm">Danske banker sammenlignet</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <nav className="py-8 sm:py-12 bg-white border-b border-slate-200" id="guide">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3"><BookOpen className="h-6 w-6 text-blue-600"/>Indholdsfortegnelse</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{h:'#hvad-er-laan',l:'Hvad vil det sige at låne penge?'},{h:'#aop-vs-rente',l:'ÅOP vs. Rente — de vigtigste nøgletal'},{h:'#calculator',l:'Låneberegner — prøv selv'},{h:'#kreditvurdering',l:'Kreditvurdering: Sådan ser banken på dig'},{h:'#sammenlign-laan',l:'Fordele ved at sammenligne lån'},{h:'#ansvarlig',l:'Ansvarlig låntagning'},{h:'#faq',l:'Ofte stillede spørgsmål'}].map((item,i)=>(
              <li key={i}><a href={item.h} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"><span className="flex-shrink-0 h-7 w-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">{i+1}</span><span className="text-slate-700 font-semibold text-sm sm:text-base group-hover:text-blue-700 transition-colors">{item.l}</span></a></li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">At navigere på det danske lånemarked kan føles som at træde ind i en labyrint af tal, forkortelser og komplekse vilkår. Uanset om du overvejer at låne penge online til en uforudset udgift, konsolidere gæld eller finansiere en større investering, er forståelse for mekanismerne bag et lån din bedste sikring mod økonomiske udfordringer.</p>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">Denne guide er skabt til at give dig et objektivt overblik over, hvordan du finder det billigste lån, forstår de reelle omkostninger og navigerer sikkert gennem en kreditvurdering.</p>
          </div>

          {/* 1. Hvad er lån */}
          <section className="mb-14" id="hvad-er-laan">
            <div className="flex items-center gap-4 mb-6"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0"><Coins className="h-6 w-6 text-white"/></div><h2 className="text-2xl sm:text-3xl font-black text-slate-900">Hvad vil det sige at låne penge?</h2></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Et lån er grundlæggende en aftale, hvor en långiver — typisk en bank eller et finansieringsselskab — stiller en sum penge til rådighed for dig mod, at du betaler beløbet tilbage over en aftalt periode. Prisen for denne service betales i form af rente og gebyrer.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">Når du vælger at sammenligne lån, vil du opdage, at markedet er opdelt i to hovedkategorier: lån med sikkerhed (som <Link href="/boliglaan" className="text-blue-600 underline hover:text-blue-800">bolig-</Link> og <Link href="/billaan" className="text-blue-600 underline hover:text-blue-800">billån</Link>) og lån uden sikkerhed (<Link href="/forbrugslaan" className="text-blue-600 underline hover:text-blue-800">forbrugslån</Link>, privatlån og kviklån). På lån.dk fokuserer vi primært på at hjælpe dig med at gennemskue lån uden sikkerhed, hvor kravene til dokumentation ofte er enklere, men hvor behovet for økonomisk overblik er tilsvarende større.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{title:'Lån med sikkerhed',items:['Boliglån','Billån','Lavere renter','Kræver pant'],href:'/boliglaan'},{title:'Lån uden sikkerhed',items:['Forbrugslån','Privatlån','Hurtigere behandling','Højere renter'],href:'/forbrugslaan'}].map((t,i)=>(
                <Link href={t.href} key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all group">
                  <h3 className="font-bold text-lg text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{t.title}</h3>
                  <div className="space-y-2">{t.items.map((item,j)=>(<div key={j} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/><span className="text-slate-600 text-sm">{item}</span></div>))}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* 2. ÅOP vs Rente */}
          <section className="mb-14" id="aop-vs-rente">
            <div className="flex items-center gap-4 mb-6"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0"><Percent className="h-6 w-6 text-white"/></div><h2 className="text-2xl sm:text-3xl font-black text-slate-900">De vigtigste nøgletal: ÅOP vs. Rente</h2></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Den mest udbredte fejl blandt låntagere er udelukkende at kigge på den nominelle rente. Selvom en lav rente lyder attraktivt, fortæller den kun en del af historien.</p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 mb-8 border border-blue-200">
              <h3 className="text-xl sm:text-2xl font-black text-blue-900 mb-4">Hvad er ÅOP (Årlige Omkostninger i Procent)?</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">ÅOP er det absolut vigtigste tal, når du skal finde det billigste lån. Det er et lovpligtigt nøgletal, der samler alle omkostninger ved lånet i ét procenttal. Det inkluderer:</p>
              <div className="space-y-3 mb-6">
                {['Den årlige rente','Etableringsgebyrer (stiftelsesomkostninger)','Månedlige terminsgebyrer','Eventuelle tinglysningsafgifter eller forsikringskrav'].map((item,i)=>(<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"/><span className="text-slate-700 font-medium">{item}</span></div>))}
              </div>
              <div className="bg-blue-100 rounded-2xl p-4 sm:p-6"><p className="text-blue-900 font-bold text-base sm:text-lg">Husk: Hvis du sammenligner to lån med samme løbetid og beløb, er det altid lånet med den laveste ÅOP, der er det billigste — uanset hvad renten siger. <Link href="/forbrugslaan/renter-og-aop" className="text-blue-700 underline">Læs mere om ÅOP og renter</Link>.</p></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Rentens betydning for din økonomi</h3>
            <p className="text-lg text-slate-700 leading-relaxed">Renten er prisen på selve det beløb, du skylder. I Danmark er renten på online lån ofte variabel, hvilket betyder, at den kan stige eller falde i takt med markedsrenten. Det er vigtigt at have luft i budgettet til at kunne håndtere en eventuel rentestigning, hvis du vælger et lån med variabel rente over en længere årrække.</p>
          </section>
        </div>

        {/* CALCULATOR (full-width mid-article) */}
        <section className="py-12 sm:py-20 relative overflow-hidden mb-14" id="calculator">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"></div>
          <div className="absolute top-10 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400/30 rounded-full blur-xl"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="mb-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-5 py-2 rounded-full border border-white/20"><Calculator className="h-5 w-5 text-cyan-400"/><span className="font-bold text-white text-sm sm:text-base">Prøv selv: Låneberegner</span></div>
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">Se hvad dit lån reelt koster</h2>
              <p className="text-base sm:text-lg text-blue-200 font-light">Brug tallene fra guiden og test selv med vores beregner</p>
            </div>
            <div className="rounded-3xl shadow-2xl p-4 sm:p-8 lg:p-12 max-w-6xl mx-auto bg-slate-900/85 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-2xl p-5">
                    <label className="flex items-center gap-3 text-base font-bold text-white mb-4"><div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><Coins className="h-5 w-5 text-white"/></div>Lånebeløb: {fmt(amount)}</label>
                    <input type="range" min="5000" max="500000" step="1000" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} className="w-full h-3 rounded-full appearance-none cursor-pointer slider" style={{background:`linear-gradient(to right,#06b6d4 0%,#3b82f6 ${(amount/500000)*100}%,rgba(255,255,255,0.2) ${(amount/500000)*100}%)`}}/>
                    <div className="flex justify-between text-xs text-blue-300 mt-2 font-semibold"><span>5.000 kr</span><span>500.000 kr</span></div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <label className="flex items-center gap-3 text-base font-bold text-white mb-4"><div className="h-9 w-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white"/></div>Årlig rente: {interestRate}%</label>
                    <input type="range" min="0.5" max="25" step="0.1" value={interestRate} onChange={(e)=>setInterestRate(Number(e.target.value))} className="w-full h-3 rounded-full appearance-none cursor-pointer slider" style={{background:`linear-gradient(to right,#10b981 0%,#059669 ${(interestRate/25)*100}%,rgba(255,255,255,0.2) ${(interestRate/25)*100}%)`}}/>
                    <div className="flex justify-between text-xs text-green-300 mt-2 font-semibold"><span>0,5%</span><span>25%</span></div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <label className="flex items-center gap-3 text-base font-bold text-white mb-4"><div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><Clock className="h-5 w-5 text-white"/></div>Løbetid: {termYears} år</label>
                    <input type="range" min="1" max="15" step="1" value={termYears} onChange={(e)=>setTermYears(Number(e.target.value))} className="w-full h-3 rounded-full appearance-none cursor-pointer slider" style={{background:`linear-gradient(to right,#8b5cf6 0%,#ec4899 ${(termYears/15)*100}%,rgba(255,255,255,0.2) ${(termYears/15)*100}%)`}}/>
                    <div className="flex justify-between text-xs text-purple-300 mt-2 font-semibold"><span>1 år</span><span>15 år</span></div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-6 sm:p-8 shadow-2xl text-white text-center">
                    <p className="text-green-100 font-bold mb-2">Månedlig ydelse</p>
                    <p className="text-3xl sm:text-5xl font-black mb-2">{fmt(monthlyPayment)}</p>
                    <p className="text-green-100 text-sm">pr. måned i {termYears} år</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 border border-white/20"><div className="flex justify-between items-center"><span className="text-white/80 font-bold text-sm sm:text-base">Samlet tilbagebetaling</span><span className="text-xl sm:text-2xl font-black text-white">{fmt(totalCost)}</span></div></div>
                  <div className="rounded-2xl p-5 border bg-orange-500/15 border-orange-400/20"><div className="flex justify-between items-center"><span className="text-orange-100 font-bold text-sm sm:text-base">Samlede renteudgifter</span><span className="text-xl sm:text-2xl font-black text-orange-300">{fmt(totalInterest)}</span></div></div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10"><p className="text-blue-200 text-sm leading-relaxed"><strong className="text-white">Bemærk:</strong> Denne beregning er vejledende og inkluderer ikke gebyrer. Den faktiske ÅOP vil altid være højere end den nominelle rente. Brug altid ÅOP til at sammenligne lån.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 3. Kreditvurdering */}
          <section className="mb-14" id="kreditvurdering">
            <div className="flex items-center gap-4 mb-6"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0"><FileText className="h-6 w-6 text-white"/></div><h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kreditvurdering: Sådan ser banken på dig</h2></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Når du ansøger om at låne penge online, foretager långiveren en <Link href="/viden/laaneordbog#kreditvurdering" className="text-blue-600 underline hover:text-blue-800">kreditvurdering</Link>. Dette er et <Link href="/viden/lovgivning" className="text-blue-600 underline hover:text-blue-800">lovkrav i Danmark</Link>, der skal sikre, at du ikke optager et lån, du ikke kan betale tilbage.</p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Faktorer der påvirker din kreditværdighed</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[{t:'Rådighedsbeløb',d:'Hvor meget har du tilbage, når faste udgifter er betalt?'},{t:'Eksisterende gæld',d:'Har du mange små lån i forvejen?'},{t:'Betalingshistorik',d:'Din historik med at betale regninger til tiden.'},{t:'Jobsituation',d:'En stabil indkomst ses som en lavere risiko for banken.'}].map((f,i)=>(
                <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-slate-200"><h4 className="font-bold text-slate-900 mb-2">{f.t}</h4><p className="text-slate-600 text-sm">{f.d}</p></div>
              ))}
            </div>
            <div className="bg-green-50 rounded-2xl p-5 sm:p-6 border border-green-200"><p className="text-green-900 font-medium"><strong>Tip:</strong> For at forbedre dine chancer for at få godkendt et lån med en lav rente, kan det ofte betale sig at rydde op i smågæld og afmelde ubrugte kreditkort, før du ansøger.</p></div>
          </section>

          {/* 4. Sammenlign */}
          <section className="mb-14" id="sammenlign-laan">
            <div className="flex items-center gap-4 mb-6"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0"><Scale className="h-6 w-6 text-white"/></div><h2 className="text-2xl sm:text-3xl font-black text-slate-900">Fordele ved at sammenligne lån</h2></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Prisforskellen på det dyreste og billigste lån på markedet kan være enorm. Ved at sammenligne lån fra flere udbydere sikrer du, at du får de bedste vilkår.</p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Undgå &quot;impulslån&quot;</h3>
            <p className="text-lg text-slate-700 leading-relaxed">Mange begår fejlen at vælge det første og bedste tilbud, de præsenteres for. Ved at indhente mindst tre uforpligtende tilbud får du et realistisk billede af, hvad det koster dig at låne. Husk, at det første lånetilbud sjældent er det bedste, da bankerne differentierer deres priser baseret på den individuelle risiko.</p>
          </section>

          {/* 5. Ansvarlig låntagning */}
          <section className="mb-14" id="ansvarlig">
            <div className="flex items-center gap-4 mb-6"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0"><AlertTriangle className="h-6 w-6 text-white"/></div><h2 className="text-2xl sm:text-3xl font-black text-slate-900">Ansvarlig låntagning</h2></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Det er vigtigt at forstå, at et lån er en forpligtelse over for din fremtidige indkomst. Penge, du låner i dag, er penge, du skal undvære i dit budget i morgen.</p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Risikoen ved for lang løbetid</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">Selvom en lang løbetid gør den månedlige ydelse mindre og mere overskuelig, gør det lånet væsentligt dyrere i de samlede kreditomkostninger. Du betaler rente af restgælden hver måned — jo længere tid du har lånet, jo flere penge ender du med at betale tilbage til banken.</p>
            <div className="bg-red-50 rounded-3xl p-6 sm:p-8 border border-red-200">
              <h3 className="text-xl font-black text-red-900 mb-4 flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-red-600"/>Hvornår bør man IKKE låne?</h3>
              <div className="space-y-3">
                {['Hvis du vil dække eksisterende gæld med nye lån (medmindre det er et samlelån med lavere rente)','Hvis du ikke har et fast overblik over dine månedlige udgifter','Hvis lånet skal bruges på et overforbrug, som din nuværende indkomst ikke kan understøtte'].map((item,i)=>(
                  <div key={i} className="flex items-start gap-3"><div className="h-5 w-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-red-700 text-xs font-bold">✕</span></div><span className="text-red-900">{item}</span></div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Ofte stillede spørgsmål om lån</h2><p className="text-lg text-slate-600">Svar på de mest almindelige spørgsmål fra danske låntagere</p></div>
          <div className="space-y-4">
            {faqs.map((faq,index)=>(
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <button className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors" onClick={()=>setOpenFaqIndex(openFaqIndex===index?null:index)}>
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex===index?'rotate-180':''}`}><ChevronDown className="h-4 w-4 text-white"/></div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex===index?'max-h-96 opacity-100':'max-h-0 opacity-0'}`}>
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
          <p className="text-sm text-slate-500 leading-relaxed"><strong className="text-slate-700">Redaktionel note:</strong> Indholdet på Lån.dk er kun vejledende. Vi anbefaler altid, at du søger uvildig økonomisk vejledning, før du indgår større økonomiske aftaler. Vi modtager kommission fra de viste banker, men vores guides og artikler er skrevet med fokus på objektivitet og brugersikkerhed.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3"><div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"><Coins className="h-5 w-5 text-white"/></div><span className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Lån.dk</span></div>
              <p className="text-base text-slate-400 max-w-md">Din uafhængige kilde til vejledning om lån i Danmark. Vi sammenligner tilbud fra Danmarks førende finansielle udbydere.</p>
              <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50"><p className="font-bold text-white mb-3 text-sm">Kontakt os</p><div className="space-y-2 text-slate-400 text-sm"><p>✉ info@fitezfinance.com</p><p>📍 Stengårds Alle 45, DK-2800 Kgs. Lyngby</p></div></div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div><h3 className="text-base font-bold text-white mb-4">Lånetyper</h3><ul className="space-y-3">{[{n:'Boliglån',h:'/boliglaan'},{n:'Forbrugslån',h:'/forbrugslaan'},{n:'Billån',h:'/billaan'},{n:'Opkonvertering',h:'/opkonvertering'}].map((l,i)=>(<li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>))}</ul></div>
                <div className="mt-8 md:mt-0"><h3 className="text-base font-bold text-white mb-4">Viden</h3><ul className="space-y-3">{[{n:'Låneordbog',h:'/viden/laaneordbog'},{n:'Lovgivning',h:'/viden/lovgivning'},{n:'Kontakt',h:'/kontakt'},{n:'Om Lån.dk',h:'/om-os'}].map((l,i)=>(<li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>))}</ul></div>
              </div>
              <div><h3 className="text-base font-bold text-white mb-4">Juridisk</h3><ul className="space-y-3">{[{n:'Privatlivspolitik',h:'/privatlivspolitik'},{n:'Vilkår og betingelser',h:'/vilkaar'},{n:'Cookie-politik',h:'/cookies'},{n:'Redaktionel politik',h:'/om-os/redaktionel-politik'}].map((l,i)=>(<li key={i}><Link href={l.h} className="text-slate-400 hover:text-white transition-colors text-sm">{l.n}</Link></li>))}</ul></div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-6"><div className="flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-xs text-slate-500 text-center md:text-left">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark. Alle rettigheder forbeholdes.</p><div className="flex items-center gap-2 text-xs text-slate-500"><div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>SSL sikret</div></div></div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb{appearance:none;height:20px;width:20px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.15);border:2px solid #3b82f6;}
        .slider::-moz-range-thumb{height:20px;width:20px;border-radius:50%;background:#fff;cursor:pointer;border:2px solid #3b82f6;}
        @media(min-width:640px){.slider::-webkit-slider-thumb{height:24px;width:24px;}.slider::-moz-range-thumb{height:24px;width:24px;}}
      `}</style>
    </div>
  )
}
