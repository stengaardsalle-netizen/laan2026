'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
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

export default function LaanPengeHurtigtPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  
  // Calculator state
  const [loanAmount, setLoanAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(8)
  const [loanTerm, setLoanTerm] = useState(5)
  const [isInterestOnly, setIsInterestOnly] = useState(false)
  const [interestOnlyPeriod, setInterestOnlyPeriod] = useState(2)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // Loan types for quick loans
  const loanTypes = [
    {
      title: 'Kviklån',
      icon: TrendingUp,
      description: 'Få penge på kontoen inden for få timer. Hurtig godkendelse og udbetaling.',
      rate: '8-25%',
      stability: 'Høj',
      risk: 'Medium',
      color: 'from-orange-500 to-red-600',
      features: ['Øjeblikkelig svar', 'Samme dag udbetaling', 'Ingen sikkerhed']
    },
    {
      title: 'Forbrugslån',
      icon: Lock,
      description: 'Større beløb med længere løbetid. Konkurrencedygtige renter.',
      rate: '4-12%',
      stability: 'Høj',
      risk: 'Lav',
      color: 'from-blue-500 to-indigo-600',
      features: ['Faste ydelser', 'Op til 500K kr', 'Længere løbetid']
    },
    {
      title: 'SMS lån',
      icon: TrendingDown,
      description: 'Små beløb med meget hurtig udbetaling. Perfekt til akutte behov.',
      rate: '15-30%',
      stability: 'Medium',
      risk: 'Høj',
      color: 'from-green-500 to-emerald-600',
      features: ['Udbetaling på minutter', 'Op til 30K kr', 'Minimal dokumentation']
    }
  ]

  // Calculator logic
  useEffect(() => {
    const calculateMortgage = () => {
      const principal = loanAmount
      const monthlyRate = interestRate / 100 / 12
      const totalMonths = loanTerm * 12
      
      if (isInterestOnly) {
        const interestOnlyMonths = interestOnlyPeriod * 12
        const remainingMonths = totalMonths - interestOnlyMonths
        
        const interestOnlyPayment = principal * monthlyRate
        
        if (remainingMonths > 0) {
          const principalAndInterestPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) / 
                                            (Math.pow(1 + monthlyRate, remainingMonths) - 1)
          
          const totalInterestOnlyPayments = interestOnlyPayment * interestOnlyMonths
          const totalPrincipalInterestPayments = principalAndInterestPayment * remainingMonths
          
          setMonthlyPayment(interestOnlyPayment)
          setTotalCost(totalInterestOnlyPayments + totalPrincipalInterestPayments)
          setTotalInterest(totalInterestOnlyPayments + totalPrincipalInterestPayments - principal)
        } else {
          setMonthlyPayment(interestOnlyPayment)
          setTotalCost(interestOnlyPayment * totalMonths)
          setTotalInterest(interestOnlyPayment * totalMonths - principal)
        }
      } else {
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
      type: 'Kviklån',
      icon: TrendingUp,
      rate: '8-25%',
      term: '1-5 år',
      amount: '5K-200K kr',
      approval: 'Samme dag',
      setupCost: 'Lav',
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'Forbrugslån',
      icon: Building2,
      rate: '4-12%',
      term: '2-10 år',
      amount: '10K-500K kr',
      approval: '1-5 dage',
      setupCost: 'Medium',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: 'Hvor hurtigt kan jeg få penge på kontoen?',
      answer: 'Med kviklån kan du få penge på kontoen samme dag - ofte inden for få timer efter godkendelse. SMS lån udbetales typisk på under 30 minutter. Forbrugslån tager normalt 1-3 hverdage.'
    },
    {
      question: 'Hvad kræves der for at få et hurtigt lån?',
      answer: 'Du skal være over 18 år, have fast adresse i Danmark og en indtægt. De fleste udbydere kræver NemID/MitID til ansøgning. Ingen sikkerhed er nødvendig for mindre beløb.'
    },
    {
      question: 'Hvor meget kan jeg låne med hurtige lån?',
      answer: 'SMS lån: 1.000-30.000 kr. Kviklån: 5.000-200.000 kr. Forbrugslån: 10.000-500.000 kr. Beløbet afhænger af din indtægt og kreditvurdering.'
    },
    {
      question: 'Er der gebyrer ved hurtige lån?',
      answer: 'Ja, de fleste hurtige lån har oprettelsesgebyrer og løbende administrationsgebyrer. SMS lån og kviklån har typisk højere gebyrer end traditionelle forbrugslån.'
    },
    {
      question: 'Kan jeg få lån med dårlig kredit?',
      answer: 'Nogle udbydere specialiserer sig i lån til personer med dårlig kredit, men renten vil være højere. Vi sammenligner også udbydere der accepterer RKI-registreringer.'
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
    <>
      <Head>
        <title>Lån Penge Hurtigt - Sammenlign Kviklån & SMS Lån | Lån.dk 2025</title>
        <meta 
          name="description" 
          content="Lån penge hurtigt! Sammenlign kviklån, SMS lån og forbrugslån. Få penge på kontoen samme dag. 100% gratis sammenligning." 
        />
        <meta name="keywords" content="lån penge hurtigt, kviklån, SMS lån, hurtige lån, forbrugslån, lån samme dag, online lån" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://loan-dk.vercel.app/laan-penge-hurtigt" />
        
        <meta property="og:title" content="Lån Penge Hurtigt - Sammenlign Kviklån & SMS Lån | Lån.dk" />
        <meta property="og:description" content="Lån penge hurtigt! Sammenlign kviklån, SMS lån og forbrugslån. Få penge på kontoen samme dag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loan-dk.vercel.app/laan-penge-hurtigt" />
        <meta property="og:locale" content="da_DK" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lån Penge Hurtigt - Sammenlign Kviklån & SMS Lån" />
        <meta name="twitter:description" content="Lån penge hurtigt! Sammenlign kviklån, SMS lån og forbrugslån. Få penge samme dag." />
        
        <meta name="language" content="Danish" />
        <meta name="geo.region" content="DK" />
        <meta name="geo.country" content="Denmark" />
        <meta name="author" content="Lån.dk" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Header />
        
        {/* Hero Section - Mobile Optimized */}
        <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-slate-900"></div>
          
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="mx-auto max-w-6xl text-center">
              <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 sm:gap-4 bg-orange-600/20 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl border border-orange-400/20">
                <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-orange-300" />
                <span className="text-white font-bold text-sm sm:text-lg">Lån Penge Hurtigt</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                  Få penge på kontoen
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  samme dag
                </span>
              </h1>
              
              <p className="mx-auto max-w-4xl text-lg sm:text-2xl lg:text-3xl leading-relaxed text-orange-100 mb-12 sm:mb-16 font-light px-4">
                Fra <span className="font-black text-white">akut behov</span> til 
                <span className="font-black text-orange-300"> øjeblikkelig løsning</span>
                <br />
                <span className="text-base sm:text-lg text-orange-300 mt-2 sm:mt-4 block">
                  Sammenlign kviklån, SMS lån og forbrugslån fra Danmarks hurtigste udbydere
                </span>
              </p>
              
              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
                <a
                  href="#calculator"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 sm:gap-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-2xl font-black text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <TrendingUp className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span>Se hvor hurtigt du kan låne</span>
                  <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
                </a>
                
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-300"
                >
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-orange-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-orange-600/30 border border-orange-400/20">
                    <Calculator className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <span>Beregn dit lån</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
                <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-orange-400/20">
                  <div className="text-2xl sm:text-4xl font-black text-orange-300 mb-2">30 min</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Hurtigste udbetaling</div>
                  <div className="text-orange-300 text-xs sm:text-sm">SMS lån</div>
                </div>
                
                <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-red-400/20">
                  <div className="text-2xl sm:text-4xl font-black text-red-300 mb-2">24/7</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Ansøgning</div>
                  <div className="text-red-300 text-xs sm:text-sm">Hele døgnet</div>
                </div>
                
                <div className="bg-yellow-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-yellow-400/20">
                  <div className="text-2xl sm:text-4xl font-black text-yellow-300 mb-2">200K</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Maksimum</div>
                  <div className="text-yellow-300 text-xs sm:text-sm">Kviklån</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan types - Mobile Optimized */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-50 to-orange-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                  Hurtige lånemuligheder
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 px-4">
                Vælg den løsning der passer til dit behov og tidshorisont
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

        {/* Calculator - Mobile Optimized */}
        <section className="py-16 sm:py-32 relative overflow-hidden" id="calculator">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-slate-900"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-orange-600/20 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-orange-400/20">
                <Calculator className="h-5 w-5 sm:h-7 sm:w-7 text-orange-400" />
                <span className="font-black text-white text-sm sm:text-xl">Hurtig Låneberegner</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 sm:mb-8">
                Beregn dit
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  hurtige lån
                </span>
              </h2>
              <p className="text-lg sm:text-2xl text-orange-100 font-light leading-relaxed px-4">
                Se præcis hvad dit lån vil koste og hvor hurtigt du kan få pengene
              </p>
            </div>
            
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-8 lg:p-16 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
                {/* Input Section - Mobile Optimized */}
                <div className="space-y-8 sm:space-y-12">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Beregn dit lån</h3>
                    <p className="text-orange-200 text-sm sm:text-base">Juster værdierne og se øjeblikkeligt resultatet</p>
                  </div>

                  <div className="relative group">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <Coins className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Lånebeløb: {formatCurrency(loanAmount)}</span>
                    </label>
                    
                    <input
                      type="range"
                      min="5000"
                      max="500000"
                      step="5000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                      style={{
                        background: `linear-gradient(to right, #f97316 0%, #dc2626 ${((loanAmount - 5000) / 495000) * 100}%, rgba(255,255,255,0.2) ${((loanAmount - 5000) / 495000) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-orange-300 mt-2 sm:mt-4 font-semibold">
                      <span>5K</span>
                      <span>500K</span>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <TrendingUp className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Årlig rente: {formatPercentage(interestRate)}</span>
                    </label>
                    
                    <input
                      type="range"
                      min="4"
                      max="30"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                      style={{
                        background: `linear-gradient(to right, #dc2626 0%, #f97316 ${((interestRate - 4) / 26) * 100}%, rgba(255,255,255,0.2) ${((interestRate - 4) / 26) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-red-300 mt-2 sm:mt-4 font-semibold">
                      <span>4%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <Clock className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Løbetid: {loanTerm} år</span>
                    </label>
                    
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm slider"
                      style={{
                        background: `linear-gradient(to right, #eab308 0%, #f97316 ${((loanTerm - 1) / 9) * 100}%, rgba(255,255,255,0.2) ${((loanTerm - 1) / 9) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-yellow-300 mt-2 sm:mt-4 font-semibold">
                      <span>1 år</span>
                      <span>10 år</span>
                    </div>
                  </div>
                </div>

                {/* Results Section - Mobile Optimized */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-orange-400/20">
                      <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-orange-400" />
                      <span className="font-black text-orange-300 text-sm sm:text-xl">Dine resultater</span>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative text-center">
                      <p className="text-orange-100 text-base sm:text-xl font-bold mb-3 sm:mb-4">
                        Månedlig ydelse
                      </p>
                      <p className="text-3xl sm:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                        {formatCurrency(monthlyPayment)}
                      </p>
                      <p className="text-orange-100 text-sm sm:text-xl">
                        pr. måned i {loanTerm} år
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-orange-300" />
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
                          <PieChart className="h-5 w-5 sm:h-6 sm:w-6 text-red-300" />
                          <span className="text-white/80 font-bold text-sm sm:text-xl">Samlede renter</span>
                        </div>
                        <span className="text-xl sm:text-3xl font-black text-red-300">
                          {formatCurrency(totalInterest)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6">
                    <a
                      href="#calculator"
                      className="group relative overflow-hidden w-full bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-6 sm:py-8 px-6 sm:px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-6 text-lg sm:text-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
                      <span className="relative z-10">Ansøg om lån nu</span>
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                    <p className="text-center text-sm sm:text-lg text-orange-200 mt-4 sm:mt-6 font-semibold px-4">
                      Svar på 5 minutter • Udbetaling samme dag • 50+ udbydere
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
                <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                  Sammenlign hurtige lån
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 px-4">
                Se forskellen på kviklån og forbrugslån
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
                        <span className="font-semibold text-slate-600 text-sm sm:text-base">Godkendelse:</span>
                        <span className="font-black text-slate-900 text-lg sm:text-xl">{loan.approval}</span>
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
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-orange-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl">
                <BookOpen className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="font-black text-sm sm:text-lg">Ofte stillede spørgsmål</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 px-4">
                <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                  Alt om hurtige lån
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
                    className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-300"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-lg pr-4 leading-tight group-hover:text-orange-900 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 pb-4 sm:px-8 sm:pb-6 border-t border-orange-100/50">
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700"></div>
          
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 sm:mb-8">
                Klar til at låne
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  penge hurtigt?
                </span>
              </h2>
              
              <p className="text-lg sm:text-2xl text-orange-100 mb-12 sm:mb-16 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Sammenlign hurtige lån fra Danmarks førende udbydere og få penge på kontoen samme dag
              </p>
              
              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
                <a
                  href="#calculator"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 sm:gap-4 rounded-3xl bg-white px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-2xl font-black text-orange-600 shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span>Ansøg om lån nu</span>
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
                
                <a
                  href="/guide"
                  className="inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold text-white hover:text-orange-200 transition-colors duration-300"
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                    <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span>Læs låneguide</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid #f97316;
        }
        
        @media (min-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 24px;
            width: 24px;
          }
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #f97316;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        @media (min-width: 640px) {
          .slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
          }
        }
      `}</style>
    </>
  )
}