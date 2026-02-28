'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Building2,
  CheckCircle,
  Calculator,
  Coins,
  Clock,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Banknote,
  ChevronDown,
  Target,
  Lightbulb,
  BookOpen,
  PieChart,
  Lock,
  Unlock,
  BarChart3,
  LineChart
} from 'lucide-react'

export default function KreditforeningslaanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  
  // Calculator state
  const [loanAmount, setLoanAmount] = useState(2000000)
  const [interestRate, setInterestRate] = useState(3.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [isInterestOnly, setIsInterestOnly] = useState(false)
  const [interestOnlyPeriod, setInterestOnlyPeriod] = useState(10)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // Loan types
  const loanTypes = [
    {
      title: 'Fastforrentet lån',
      icon: Lock,
      description: 'Renten er fastsat i hele lånets løbetid og giver dig sikkerhed for den månedlige ydelse.',
      rate: '2-5%',
      stability: 'Høj',
      risk: 'Lav',
      color: 'from-blue-500 to-indigo-600',
      features: ['Stabil månedlig ydelse', 'Beskyttet mod rentestigninger', 'Mulighed for konvertering']
    },
    {
      title: 'Variabelt forrentet lån',
      icon: Unlock,
      description: 'Renten følger markedsrenten og justeres typisk hver 6. måned eller årligt.',
      rate: '1-4%',
      stability: 'Lav',
      risk: 'Høj',
      color: 'from-green-500 to-emerald-600',
      features: ['Lavere startrente', 'Kan blive billigere', 'Følger markedsrenten']
    },
    {
      title: 'Afdragsfrit lån',
      icon: TrendingDown,
      description: 'Du betaler kun renter i en periode, typisk de første 10 år af lånet.',
      rate: 'Varierer',
      stability: 'Medium',
      risk: 'Medium',
      color: 'from-orange-500 to-red-600',
      features: ['Lavere månedlige ydelser', 'Økonomisk fleksibilitet', 'Maksimalt 10 år']
    }
  ]

  // Calculator logic
  useEffect(() => {
    const calculateMortgage = () => {
      const principal = loanAmount
      const monthlyRate = interestRate / 100 / 12
      const totalMonths = loanTerm * 12
      
      if (isInterestOnly) {
        // Interest-only period calculation
        const interestOnlyMonths = interestOnlyPeriod * 12
        const remainingMonths = totalMonths - interestOnlyMonths
        
        const interestOnlyPayment = principal * monthlyRate
        
        if (remainingMonths > 0) {
          const principalAndInterestPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) / 
                                            (Math.pow(1 + monthlyRate, remainingMonths) - 1)
          
          const totalInterestOnlyPayments = interestOnlyPayment * interestOnlyMonths
          const totalPrincipalInterestPayments = principalAndInterestPayment * remainingMonths
          
          setMonthlyPayment(interestOnlyPayment) // Show interest-only payment initially
          setTotalCost(totalInterestOnlyPayments + totalPrincipalInterestPayments)
          setTotalInterest(totalInterestOnlyPayments + totalPrincipalInterestPayments - principal)
        } else {
          setMonthlyPayment(interestOnlyPayment)
          setTotalCost(interestOnlyPayment * totalMonths)
          setTotalInterest(interestOnlyPayment * totalMonths - principal)
        }
      } else {
        // Standard calculation
        if (monthlyRate === 0) {
          const payment = principal / totalMonths
          setMonthlyPayment(payment)
          setTotalCost(principal)
          setTotalInterest(0)
        } else {
          const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                         (Math.pow(1 + monthlyRate, totalMonths) - 1)
          const totalPayments = payment * totalMonths
          
          setMonthlyPayment(payment)
          setTotalCost(totalPayments)
          setTotalInterest(totalPayments - principal)
        }
      }
    }

    calculateMortgage()
  }, [loanAmount, interestRate, loanTerm, isInterestOnly, interestOnlyPeriod])

  // Comparison data
  const loanComparison = [
    {
      type: 'Kreditforeningslån',
      icon: Building2,
      rate: '1-4%',
      term: '10-30 år',
      amount: '500K-50M kr',
      loanToValue: 'Op til 80%',
      setupCost: 'Høj',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      type: 'Banklån',
      icon: Banknote,
      rate: '4-8%',
      term: '5-20 år',
      amount: '100K-10M kr',
      loanToValue: 'Op til 85%',
      setupCost: 'Lav',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: 'Hvad er forskellen på kreditforeningslån og banklån til boligkøb?',
      answer: 'Kreditforeningslån har typisk lavere renter (1-4%) men højere oprettelsesomkostninger. Banklån har højere renter (4-8%) men lavere oprettelsesgebyrer. Kreditforeningslån finansieres gennem obligationer, mens banklån kommer direkte fra bankens kapital.'
    },
    {
      question: 'Hvor meget kan jeg låne med et kreditforeningslån?',
      answer: 'Du kan typisk låne op til 80% af boligens værdi med et kreditforeningslån. De resterende 20% skal finansieres gennem egenkapital eller eventuelt et supplerende banklån.'
    },
    {
      question: 'Hvad er fordelen ved afdragsfrihed?',
      answer: 'Afdragsfrihed giver lavere månedlige ydelser i starten, hvilket kan give økonomisk luft. Dog betaler du kun renter, så gælden reduceres ikke. Efter afdragsfri periode bliver de månedlige ydelser højere.'
    },
    {
      question: 'Kan jeg konvertere mit kreditforeningslån?',
      answer: 'Ja, fastforrentede kreditforeningslån kan konverteres til en lavere rente, hvis markedsrenten falder. Dette koster typisk 1-2% af lånebeløbet, men kan spare dig for mange penge over lånets løbetid.'
    },
    {
      question: 'Hvilke omkostninger er der ved at oprette et kreditforeningslån?',
      answer: 'Oprettelsesomkostninger inkluderer tinglysningsafgift (1,7% + 1.750 kr), kurstab (0,5-2%), administrationsbidrag og eventuelle gebyrer. Samlet set regn med 2-4% af lånebeløbet i oprettelsesomkostninger.'
    }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        
        {/* Background elements - smaller on mobile */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge - mobile friendly */}
            <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 sm:gap-4 bg-blue-600/20 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl border border-blue-400/20">
              <Building2 className="h-4 w-4 sm:h-6 sm:w-6 text-blue-300" />
              <span className="text-white font-bold text-sm sm:text-lg">Kreditforeningslån - Boligfinansiering</span>
            </div>
            
            {/* Main headline - responsive text sizes */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                Danmarks billigste 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                boliglån
              </span>
            </h1>
            
            {/* Subtext - mobile friendly */}
            <p className="mx-auto max-w-4xl text-lg sm:text-2xl lg:text-3xl leading-relaxed text-blue-100 mb-12 sm:mb-16 font-light px-4">
              Finansier din <span className="font-black text-white">drømmeBolig</span> med lån fra 
              <span className="font-black text-blue-300"> 1% i rente</span>
              <br />
              <span className="text-sm sm:text-lg text-blue-300 mt-2 sm:mt-4 block">
                Sammenlign kreditforeningslån og find de bedste vilkår til dit boligkøb
              </span>
            </p>
            
            {/* CTA buttons - mobile stack */}
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
              <a
                href="#calculator"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 sm:gap-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-2xl font-black text-white shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Building2 className="h-5 w-5 sm:h-7 sm:w-7" />
                <span>Beregn dit boliglån</span>
                <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
              </a>
              
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
              >
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-blue-600/30 border border-blue-400/20">
                  <Calculator className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <span>Beregn dit boliglån</span>
              </a>
            </div>

            {/* Quick stats - mobile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="bg-blue-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-blue-400/20">
                <div className="text-2xl sm:text-4xl font-black text-blue-300 mb-2">1-4%</div>
                <div className="text-white font-semibold text-sm sm:text-base">Årlig rente</div>
                <div className="text-blue-300 text-xs sm:text-sm">Markedets laveste</div>
              </div>
              
              <div className="bg-indigo-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-indigo-400/20">
                <div className="text-2xl sm:text-4xl font-black text-indigo-300 mb-2">80%</div>
                <div className="text-white font-semibold text-sm sm:text-base">Belåningsgrad</div>
                <div className="text-indigo-300 text-xs sm:text-sm">Af boligens værdi</div>
              </div>
              
              <div className="bg-cyan-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-cyan-400/20">
                <div className="text-2xl sm:text-4xl font-black text-cyan-300 mb-2">30 år</div>
                <div className="text-white font-semibold text-sm sm:text-base">Løbetid</div>
                <div className="text-cyan-300 text-xs sm:text-sm">Op til 30 år</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a mortgage association loan - Mobile Optimized */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Hvad er kreditforeningslån?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed px-4">
              Danmarks mest udbredte finansieringsform til boligkøb med de laveste renter på markedet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 px-4">
              <div className="prose prose-lg sm:prose-xl">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  Et kreditforeningslån er en særlig dansk finansieringsform, hvor du låner penge til at købe 
                  fast ejendom gennem et <strong className="text-blue-600">realkreditinstitut</strong>. 
                  Lånet sikres med pant i din bolig.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Systemet fungerer ved at realkreditinstituttet udsteder <strong className="text-blue-600">obligationer</strong> 
                  som investorer køber. Dette gør kreditforeningslån til verdens billigste boligfinansiering.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-3xl border border-blue-200">
                <h3 className="font-black text-xl sm:text-2xl text-blue-900 mb-4 sm:mb-6 flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 sm:h-7 sm:w-7 text-blue-600" />
                  Sådan fungerer det
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Vurdering:</strong> Boligen vurderes af realkreditinstituttet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Belåning:</strong> Du kan låne op til 80% af boligens værdi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Obligationer:</strong> Lånet finansieres gennem obligationsudstedelse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Sikkerhed:</strong> Boligen er pant for lånet</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative px-4 lg:px-0">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-white mb-6 sm:mb-8" />
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Hvorfor vælge kreditforeningslån?</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center gap-3">
                      <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Laveste renter på markedet</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Op til 30 års løbetid</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <LineChart className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Mulighed for konvertering</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Stabil dansk finansiering</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Fleksible afbetalingsmuligheder</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan types - Mobile Optimized */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Typer af kreditforeningslån
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">
              Vælg den lånetype der passer bedst til din situation og risikovillighed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {loanTypes.map((loanType, index) => {
              const IconComponent = loanType.icon
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                >
                  <div className={`inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${loanType.color} mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">{loanType.title}</h3>
                  <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{loanType.description}</p>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Rente:</span>
                      <span className="font-black text-slate-900">{loanType.rate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Stabilitet:</span>
                      <span className="font-black text-slate-900">{loanType.stability}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Risiko:</span>
                      <span className="font-black text-slate-900">{loanType.risk}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {loanType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator - HEAVILY MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-32 relative overflow-hidden" id="calculator">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-blue-600/20 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-blue-400/20">
              <Calculator className="h-5 w-5 sm:h-7 sm:w-7 text-blue-400" />
              <span className="font-black text-white text-sm sm:text-xl">Boliglån Beregner</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 sm:mb-8">
              Beregn dit
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                perfekte boliglån
              </span>
            </h2>
            <p className="text-lg sm:text-2xl text-blue-100 font-light leading-relaxed px-4">
              Se præcis hvad dit kreditforeningslån vil koste med vores avancerede beregner
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-8 lg:p-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
              {/* Input Section - Mobile Optimized */}
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Beregn dit lån</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Juster værdierne og se øjeblikkeligt resultatet</p>
                </div>

                {/* Loan Amount Slider */}
                <div className="relative group">
                  <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                      <Coins className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <span className="text-center sm:text-left">Lånebeløb: {formatCurrency(loanAmount)}</span>
                  </label>
                  
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${((loanAmount - 100000) / 9900000) * 100}%, rgba(255,255,255,0.2) ${((loanAmount - 100000) / 9900000) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-blue-300 mt-2 sm:mt-4 font-semibold">
                    <span>100K</span>
                    <span>10M</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="relative group">
                  <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                      <TrendingUp className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <span className="text-center sm:text-left">Årlig rente: {formatPercentage(interestRate)}</span>
                  </label>
                  
                  <input
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #059669 ${((interestRate - 0.5) / 7.5) * 100}%, rgba(255,255,255,0.2) ${((interestRate - 0.5) / 7.5) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-green-300 mt-2 sm:mt-4 font-semibold">
                    <span>0.5%</span>
                    <span>8%</span>
                  </div>
                </div>

                {/* Loan Term Slider */}
                <div className="relative group">
                  <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                      <Clock className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <span className="text-center sm:text-left">Løbetid: {loanTerm} år</span>
                  </label>
                  
                  <input
                    type="range"
                    min="10"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                    style={{
                      background: `linear-gradient(to right, #8b5cf6 0%, #ec4899 ${((loanTerm - 10) / 20) * 100}%, rgba(255,255,255,0.2) ${((loanTerm - 10) / 20) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-purple-300 mt-2 sm:mt-4 font-semibold">
                    <span>10 år</span>
                    <span>30 år</span>
                  </div>
                </div>

                {/* Interest-only toggle - Mobile Optimized */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <label className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-white cursor-pointer">
                      <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
                      Afdragsfrihed
                    </label>
                    <button
                      onClick={() => setIsInterestOnly(!isInterestOnly)}
                      className={`relative inline-flex h-6 w-12 sm:h-8 sm:w-14 items-center rounded-full transition-colors duration-300 ${
                        isInterestOnly ? 'bg-blue-600' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 sm:h-6 sm:w-6 transform rounded-full bg-white transition-transform duration-300 ${
                          isInterestOnly ? 'translate-x-7 sm:translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  {isInterestOnly && (
                    <div>
                      <label className="block text-white mb-2 text-sm sm:text-base">Afdragsfri periode: {interestOnlyPeriod} år</label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={interestOnlyPeriod}
                        onChange={(e) => setInterestOnlyPeriod(Number(e.target.value))}
                        className="w-full h-3 sm:h-4 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-orange-300 mt-2">
                        <span>1 år</span>
                        <span>10 år</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Results Section - Mobile Optimized */}
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-blue-400/20">
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
                    <span className="font-black text-blue-300 text-sm sm:text-xl">Dine resultater</span>
                  </div>
                </div>
                
                {/* Main result card - Mobile Optimized */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-6 sm:p-12 shadow-2xl text-white">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative text-center">
                    <p className="text-blue-100 text-base sm:text-xl font-bold mb-3 sm:mb-4">
                      {isInterestOnly ? 'Månedlig ydelse (afdragsfri)' : 'Månedlig ydelse'}
                    </p>
                    <p className="text-3xl sm:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                      {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-blue-100 text-sm sm:text-xl">
                      pr. måned i {isInterestOnly ? `${interestOnlyPeriod} år (derefter højere)` : `${loanTerm} år`}
                    </p>
                  </div>
                </div>

                {/* Breakdown cards - Mobile Optimized */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                        <span className="text-white/80 font-bold text-sm sm:text-xl">Samlet tilbagebetaling</span>
                      </div>
                      <span className="text-xl sm:text-3xl font-black text-white">
                        {formatCurrency(totalCost)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <PieChart className="h-5 w-5 sm:h-6 sm:w-6 text-orange-300" />
                        <span className="text-white/80 font-bold text-sm sm:text-xl">Samlede renter</span>
                      </div>
                      <span className="text-xl sm:text-3xl font-black text-orange-300">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-green-300" />
                        <span className="text-white/80 font-bold text-sm sm:text-xl">Belåningsgrad</span>
                      </div>
                      <span className="text-xl sm:text-3xl font-black text-green-300">
                        {Math.round((loanAmount / (loanAmount / 0.8)) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Mobile Optimized */}
                <div className="pt-4 sm:pt-6">
                  <a
                    href="#calculator"
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6 sm:py-8 px-6 sm:px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-6 text-lg sm:text-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
                    <Calculator className="h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
                    <span className="relative z-10">Beregn dit lån igen</span>
                    <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                  <p className="text-center text-sm sm:text-lg text-blue-200 mt-4 sm:mt-6 font-semibold px-4">
                    Gratis sammenligning • Svar på 2 minutter • 50+ udbydere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Comparison - Mobile Optimized */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 px-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Sammenlign finansieringsmuligheder
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">
              Se forskellen på kreditforeningslån og traditionelle banklån
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {loanComparison.map((loan, index) => {
              const IconComponent = loan.icon
              return (
                <div key={index} className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden">
                  <div className={`bg-gradient-to-r ${loan.color} p-6 sm:p-8 text-white`}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                      <h3 className="text-xl sm:text-2xl font-black">{loan.type}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Rente:</span>
                      <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Løbetid:</span>
                      <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.term}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Lånebeløb:</span>
                      <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Belåning:</span>
                      <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.loanToValue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-600 text-sm sm:text-base">Oprettelse:</span>
                      <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.setupCost}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-blue-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl">
              <BookOpen className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="font-black text-sm sm:text-lg">Ofte stillede spørgsmål</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 px-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Alt om kreditforeningslån
              </span>
            </h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-300"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-lg pr-4 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4 sm:px-8 sm:pb-6 border-t border-blue-100/50">
                    <div className="pt-4 sm:pt-6">
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-lg">
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

      {/* Final CTA - Mobile Optimized */}
      <section className="relative py-16 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 sm:mb-8">
              Klar til at købe
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                din drømmebolig?
              </span>
            </h2>
            
            <p className="text-lg sm:text-2xl text-blue-100 mb-12 sm:mb-16 font-light max-w-3xl mx-auto leading-relaxed px-4">
              Sammenlign kreditforeningslån fra Danmarks førende realkreditinstitutter og find den bedste finansiering til dit boligkøb
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
              <a
                href="#calculator"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 sm:gap-4 rounded-3xl bg-white px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-2xl font-black text-blue-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Calculator className="h-6 w-6 sm:h-7 sm:w-7" />
                <span>Beregn dit boliglån</span>
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              
              <a
                href="/guide"
                className="inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span>Læs boligguide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for sliders */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid #3b82f6;
        }
        
        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
          }
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        @media (max-width: 640px) {
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </div>
  )
}