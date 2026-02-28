'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calculator,
  Coins,
  Clock,
  TrendingUp,
  Shield,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  FileText,
  CreditCard,
  Home,
  ShoppingBag,
  ChevronDown,
  Target,
  Lightbulb,
  BookOpen,
  DollarSign,
  Timer,
  Building2
} from 'lucide-react'

export default function KviklaanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [loanAmount, setLoanAmount] = useState(15000)
  const [interestRate, setInterestRate] = useState(20)
  const [loanTerm, setLoanTerm] = useState(12)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: 'Ansøg online',
      description: 'Udfyld en simpel ansøgning online med NemID/MitID',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: 2,
      title: 'Øjeblikkelig vurdering',
      description: 'Få svar på din ansøgning inden for få minutter',
      icon: Timer,
      color: 'from-red-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Godkendelse',
      description: 'Ved godkendelse underskrives kontrakten digitalt',
      icon: CheckCircle,
      color: 'from-pink-500 to-purple-500'
    },
    {
      step: 4,
      title: 'Udbetaling',
      description: 'Pengene overføres til din konto samme dag',
      icon: DollarSign,
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  // Loan comparison data
  const loanComparison = [
    {
      type: 'Kviklån',
      icon: Zap,
      rate: '15-35%',
      term: '1-24 mdr',
      amount: '500-50K kr',
      approval: 'Samme dag',
      security: 'Ingen',
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'Forbrugslån',
      icon: ShoppingBag,
      rate: '5-25%',
      term: '1-15 år',
      amount: '5K-500K kr',
      approval: '1-3 dage',
      security: 'Ingen',
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'Boliglån',
      icon: Building2,
      rate: '2-6%',
      term: '10-30 år',
      amount: '100K-10M kr',
      approval: '1-3 uger',
      security: 'Pant i bolig',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  // Benefits and drawbacks
  const benefits = [
    { text: 'Hurtig ansøgning online', icon: Zap },
    { text: 'Pengene på få timer', icon: Timer },
    { text: 'Ingen sikkerhed krævet', icon: Shield },
    { text: 'Lav kreditværdighed OK', icon: Users },
    { text: 'Små beløb muligt', icon: Coins },
    { text: 'Fleksibel anvendelse', icon: Target }
  ]

  const drawbacks = [
    { text: 'Meget høje renter', icon: TrendingUp },
    { text: 'Kort tilbagebetalingstid', icon: Clock },
    { text: 'Risiko for gældsspiral', icon: AlertTriangle },
    { text: 'Skjulte gebyrer', icon: CreditCard }
  ]

  // When to use quick loans
  const useCases = [
    { title: 'Akutte bilreparationer', icon: '🚗', urgent: true },
    { title: 'Uventede regninger', icon: '📄', urgent: true },
    { title: 'Medicinske udgifter', icon: '🏥', urgent: true },
    { title: 'Kortsigtet cash flow', icon: '💰', urgent: false },
    { title: 'Sidste udvej finansiering', icon: '🆘', urgent: true }
  ]

  // FAQ data specific to quick loans
  const faqs = [
    {
      question: 'Hvor hurtigt kan jeg få pengene udbetalt?',
      answer: 'De fleste kviklånsudbydere kan udbetale pengene samme dag, ofte inden for 1-4 timer efter godkendelse. Nogle tilbyder endda udbetaling inden for 15-30 minutter.'
    },
    {
      question: 'Kan jeg få kviklån med dårlig økonomi?',
      answer: 'Ja, kviklån er ofte tilgængelige selv med lav kreditværdighed. Dog betyder dårligere økonomi typisk højere renter og lavere lånebeløb.'
    },
    {
      question: 'Hvad er ÅOP, og hvorfor er det vigtigt?',
      answer: 'ÅOP (Årlige Omkostninger i Procent) viser den reelle årlige omkostning inklusive alle gebyrer. For kviklån kan ÅOP være 200-400% eller mere, så det er afgørende at sammenligne.'
    },
    {
      question: 'Hvad sker der, hvis jeg ikke kan betale tilbage?',
      answer: 'Manglende betaling kan føre til rykkergebyrer, inkasso og negativ påvirkning af din kreditvurdering. Kontakt altid långiver med det samme, hvis du får problemer.'
    },
    {
      question: 'Kan jeg forlænge mit kviklån?',
      answer: 'Mange udbydere tilbyder forlængelse, men dette er meget dyrt. Det er bedre at betale lånet tilbage som aftalt eller finde alternative løsninger.'
    }
  ]

  // Calculator logic
  useEffect(() => {
    const calculateLoan = () => {
      const principal = loanAmount
      const monthlyRate = interestRate / 100 / 12
      const numPayments = loanTerm

      if (monthlyRate === 0) {
        const payment = principal / numPayments
        setMonthlyPayment(payment)
        setTotalCost(principal)
        setTotalInterest(0)
      } else {
        const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                        (Math.pow(1 + monthlyRate, numPayments) - 1)
        const totalPayments = payment * numPayments
        
        setMonthlyPayment(payment)
        setTotalCost(totalPayments)
        setTotalInterest(totalPayments - principal)
      }
    }

    calculateLoan()
  }, [loanAmount, interestRate, loanTerm])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <div className="mb-12 inline-flex items-center gap-4 bg-orange-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-orange-400/20">
              <Zap className="h-6 w-6 text-orange-300" />
              <span className="text-white font-bold text-lg">Kviklån - Hurtig finansiering</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                Penge på kontoen 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                på få timer
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-orange-100 mb-16 font-light">
              Lån op til <span className="font-black text-white">50.000 kr</span> uden sikkerhed og få 
              <span className="font-black text-orange-300"> øjeblikkeligt svar</span>
              <br />
              <span className="text-lg text-orange-300 mt-4 block">
                Sammenlign kviklån og find den hurtigste løsning til dine akutte behov
              </span>
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Zap className="h-7 w-7" />
                <span>Sammenlign kviklån</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="#calculator"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-orange-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-orange-600/30 border border-orange-400/20">
                  <Calculator className="h-8 w-8" />
                </div>
                <span>Beregn dit kviklån</span>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-orange-400/20">
                <div className="text-4xl font-black text-orange-300 mb-2">15 min</div>
                <div className="text-white font-semibold">Hurtigste udbetaling</div>
                <div className="text-orange-300 text-sm">Ved digital ansøgning</div>
              </div>
              
              <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-red-400/20">
                <div className="text-4xl font-black text-red-300 mb-2">50K</div>
                <div className="text-white font-semibold">Max lånebeløb</div>
                <div className="text-red-300 text-sm">Afhængig af din økonomi</div>
              </div>
              
              <div className="bg-pink-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-pink-400/20">
                <div className="text-4xl font-black text-pink-300 mb-2">24/7</div>
                <div className="text-white font-semibold">Ansøgning åben</div>
                <div className="text-pink-300 text-sm">Altid online adgang</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a quick loan */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Hvad er et kviklån?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Et kviklån er en type lån, der giver dig mulighed for hurtigt at låne penge – ofte uden krav om sikkerhed
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Et kviklån er designet til at være <strong className="text-orange-600">nem og hurtig</strong> at ansøge om, 
                  hvilket gør den attraktiv for personer, der har akut behov for finansiering. Beløbene spænder typisk 
                  fra <strong className="text-orange-600">500 kr. til 50.000 kr.</strong>
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Pengene kan ofte være på din konto samme dag eller inden for få timer efter godkendelse. 
                  Ansøgningsprocessen er digital og kræver som regel kun, at du kan identificere dig med NemID/MitID.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-200">
                <h3 className="font-black text-2xl text-orange-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-orange-600" />
                  Perfekt til akutte situationer
                </h3>
                <ul className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-100 transition-colors duration-300">
                      <span className="text-2xl">{useCase.icon}</span>
                      <span className="text-slate-700 font-semibold">{useCase.title}</span>
                      {useCase.urgent && (
                        <span className="px-2 py-1 text-xs font-bold text-red-600 bg-red-100 rounded-full">AKUT</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Zap className="h-16 w-16 text-white mb-8" />
                  <h3 className="text-3xl font-black mb-6">Sådan fungerer det</h3>
                  <div className="space-y-4">
                    {howItWorksSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{step.title}</div>
                          <div className="text-orange-100 text-sm">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Drawbacks */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Fordele & ulemper
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Det er vigtigt at forstå både fordele og risici ved kviklån
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-green-900">Fordele</h3>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Drawbacks */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-red-900">Ulemper</h3>
              </div>
              <div className="space-y-4">
                {drawbacks.map((drawback, index) => {
                  const IconComponent = drawback.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-red-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{drawback.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Warning box */}
          <div className="mt-16 bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black text-red-900 mb-4">Vigtigt at huske</h3>
                <p className="text-lg text-red-800 leading-relaxed">
                  Kviklån er forbundet med høje renter og kort løbetid, hvilket kan gøre dem dyre i det lange løb. 
                  Brug kun kviklån til akutte situationer, og sørg altid for at have en klar plan for tilbagebetaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Loan Calculator */}
      <section className="py-32 relative overflow-hidden" id="calculator">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-orange-600/20 backdrop-blur-2xl px-8 py-4 rounded-full border border-orange-400/20">
              <Calculator className="h-7 w-7 text-orange-400" />
              <span className="font-black text-white text-xl">Kviklån Beregner</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Se hvad dit
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                kviklån koster
              </span>
            </h2>
            <p className="text-2xl text-orange-100 font-light leading-relaxed">
              Beregn de reelle omkostninger ved dit kviklån før du ansøger
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Input Section */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-black text-white mb-4">Beregn dit kviklån</h3>
                  <p className="text-orange-200">Juster værdierne og se de reelle omkostninger</p>
                </div>

                <div className="relative group">
                  <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl">
                      <Coins className="h-7 w-7 text-white" />
                    </div>
                    Lånebeløb: {formatCurrency(loanAmount)}
                  </label>
                  
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #dc2626 ${((loanAmount - 500) / 49500) * 100}%, rgba(255,255,255,0.2) ${((loanAmount - 500) / 49500) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-orange-300 mt-4 font-semibold">
                    <span>500 kr</span>
                    <span>50.000 kr</span>
                  </div>
                </div>

                <div className="relative group">
                  <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-2xl">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    Årlig rente: {interestRate}%
                  </label>
                  
                  <input
                    type="range"
                    min="15"
                    max="35"
                    step="1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(to right, #dc2626 0%, #be185d ${((interestRate - 15) / 20) * 100}%, rgba(255,255,255,0.2) ${((interestRate - 15) / 20) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-red-300 mt-4 font-semibold">
                    <span>15%</span>
                    <span>35%</span>
                  </div>
                </div>

                <div className="relative group">
                  <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    Løbetid: {loanTerm} måneder
                  </label>
                  
                  <input
                    type="range"
                    min="1"
                    max="24"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(to right, #be185d 0%, #7c3aed ${((loanTerm - 1) / 23) * 100}%, rgba(255,255,255,0.2) ${((loanTerm - 1) / 23) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-pink-300 mt-4 font-semibold">
                    <span>1 måned</span>
                    <span>24 måneder</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl px-8 py-4 rounded-full border border-orange-400/20">
                    <Sparkles className="h-6 w-6 text-orange-400" />
                    <span className="font-black text-orange-300 text-xl">Dit resultat</span>
                  </div>
                </div>
                
                {/* Main result card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl p-12 shadow-2xl text-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative text-center">
                    <p className="text-orange-100 text-xl font-bold mb-4">Månedlig ydelse</p>
                    <p className="text-6xl lg:text-7xl font-black mb-6">
                      {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-orange-100 text-xl">pr. måned i {loanTerm} måneder</p>
                  </div>
                </div>

                {/* Breakdown cards */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="animate-pulse">💰</div>
                        <span className="text-white/80 font-bold text-xl">Samlet tilbagebetaling</span>
                      </div>
                      <span className="text-3xl font-black text-white">
                        {formatCurrency(totalCost)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-2xl rounded-2xl p-8 border border-red-400/20 shadow-2xl">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="animate-pulse">⚠️</div>
                        <span className="text-red-100 font-bold text-xl">Låneomkostninger</span>
                      </div>
                      <span className="text-3xl font-black text-red-300">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href="/sammenlign?type=kviklaan"
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-8 px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-6 text-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
                    <Zap className="h-8 w-8 relative z-10" />
                    <span className="relative z-10">Find billigere kviklån</span>
                    <ArrowRight className="h-8 w-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                  <p className="text-center text-lg text-orange-200 mt-6 font-semibold">
                    💡 Sammenlign før du låner • Find laveste ÅOP • 100% gratis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Comparison */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Sammenlign lånetyper
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Se hvordan kviklån står i forhold til andre lånemuligheder
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {loanComparison.map((loan, index) => {
              const IconComponent = loan.icon
              return (
                <div key={index} className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden">
                  <div className={`bg-gradient-to-r ${loan.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <IconComponent className="h-8 w-8" />
                      <h3 className="text-2xl font-black">{loan.type}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Rente:</span>
                      <span className="font-black text-slate-900">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Løbetid:</span>
                      <span className="font-black text-slate-900">{loan.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Beløb:</span>
                      <span className="font-black text-slate-900">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Godkendelse:</span>
                      <span className="font-black text-slate-900">{loan.approval}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Sikkerhed:</span>
                      <span className="font-black text-slate-900">{loan.security}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-orange-600 text-white px-8 py-4 rounded-full shadow-2xl">
              <BookOpen className="h-6 w-6" />
              <span className="font-black text-lg">Ofte stillede spørgsmål</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Alt om kviklån
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-300"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-4 leading-tight group-hover:text-orange-900 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-orange-100/50">
                    <div className="pt-6">
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Har du brug for
              <br />
              <span className="bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                penge nu?
              </span>
            </h2>
            
            <p className="text-2xl text-orange-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Sammenlign kviklån fra Danmarks hurtigste udbydere og få pengene på kontoen i dag
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-2xl font-black text-orange-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Zap className="h-7 w-7" />
                <span>Find kviklån nu</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="/guide"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-200 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span>Læs kviklån guide</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80 mt-16">
              <div className="flex items-center gap-3">
                <Timer className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">15 minutters udbetaling</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">Sikker sammenligning</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">Gratis service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}