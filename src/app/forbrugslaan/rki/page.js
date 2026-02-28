'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { 
  AlertTriangle,
  Calculator,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  XCircle,
  TrendingUp,
  DollarSign,
  CreditCard,
  Heart,
  ChevronDown,
  BookOpen,
  Phone,
  Star,
  Target,
  Lightbulb,
  HelpCircle,
  Award
} from 'lucide-react'

export default function RKIForbrugsloanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  
  // Calculator state
  const [loanAmount, setLoanAmount] = useState(50000)
  const [loanTerm, setLoanTerm] = useState(3)
  const [hasCollateral, setHasCollateral] = useState(false)
  const [monthlyIncome, setMonthlyIncome] = useState(25000)
  const [interestRate, setInterestRate] = useState(18.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [recommendedProvider, setRecommendedProvider] = useState(null)
  const [affordabilityCheck, setAffordabilityCheck] = useState('good')

  // RKI-friendly providers with realistic terms
  const rkiProviders = [
    {
      name: 'Santander Consumer Bank',
      type: 'rki-friendly',
      minRate: 12.5,
      maxRate: 22.5,
      maxAmount: 100000,
      features: ['Accepterer RKI', 'Hurtig behandling', 'Individuel vurdering'],
      rating: 3.8,
      setupFee: 2500,
      logo: '🏦',
      color: 'from-red-600 to-red-700',
      requirement: 'Stabil indkomst krævet'
    },
    {
      name: 'CapitalOne Denmark',
      type: 'rki-specialist',
      minRate: 15.2,
      maxRate: 24.9,
      maxAmount: 75000,
      features: ['Specialiseret i RKI', 'Fleksible vilkår', 'Personlig rådgivning'],
      rating: 3.6,
      setupFee: 1995,
      logo: '💳',
      color: 'from-orange-600 to-orange-700',
      requirement: 'Min. 20.000 kr/måned'
    },
    {
      name: 'Alternative Finance',
      type: 'secured-only',
      minRate: 10.5,
      maxRate: 18.0,
      maxAmount: 200000,
      features: ['Kræver sikkerhed', 'Lavere renter', 'Op til 7 år'],
      rating: 3.9,
      setupFee: 3500,
      logo: '🔒',
      color: 'from-blue-600 to-blue-700',
      requirement: 'Sikkerhed i bolig/bil'
    },
    {
      name: 'Family Credit Union',
      type: 'medansøger',
      minRate: 8.5,
      maxRate: 15.5,
      maxAmount: 150000,
      features: ['Med kautionist', 'Bedre vilkår', 'Lavere renter'],
      rating: 4.2,
      setupFee: 1500,
      logo: '👥',
      color: 'from-green-600 to-green-700',
      requirement: 'Kræver medansøger'
    }
  ]

  // Warning indicators
  const riskFactors = [
    {
      icon: AlertTriangle,
      title: 'Høje omkostninger',
      description: 'RKI-lån har typisk meget højere renter end almindelige lån',
      severity: 'high'
    },
    {
      icon: CreditCard,
      title: 'Begrænsede beløb',
      description: 'Du kan kun låne mindre beløb end ved normal kredit',
      severity: 'medium'
    },
    {
      icon: Clock,
      title: 'Kortere løbetid',
      description: 'Lånene skal ofte betales tilbage hurtigere',
      severity: 'medium'
    },
    {
      icon: XCircle,
      title: 'Risiko for gældsspiral',
      description: 'Kan forværre din økonomiske situation hvis ikke planlagt',
      severity: 'high'
    }
  ]

  // Better alternatives
  const alternatives = [
    {
      icon: Users,
      title: 'Gældsrådgivning',
      description: 'Få gratis professionel hjælp til at planlægge din økonomi',
      color: 'from-green-500 to-emerald-500',
      cta: 'Find rådgivning'
    },
    {
      icon: Heart,
      title: 'Familie og venner',
      description: 'Lån fra nære uden renter kan være en bedre løsning',
      color: 'from-blue-500 to-cyan-500',
      cta: 'Overvej dette'
    },
    {
      icon: Target,
      title: 'Afdragsaftale',
      description: 'Forhandl med kreditorer om lavere betalinger',
      color: 'from-purple-500 to-pink-500',
      cta: 'Kontakt kreditor'
    },
    {
      icon: DollarSign,
      title: 'Opsparing',
      description: 'Spar op i stedet for at låne - undgå renter helt',
      color: 'from-orange-500 to-red-500',
      cta: 'Lav budget'
    }
  ]

  // Calculate loan with RKI-specific terms
  useEffect(() => {
    const calculateLoan = () => {
      // Find appropriate provider based on user input
      let appropriateProviders = rkiProviders

      if (hasCollateral) {
        appropriateProviders = rkiProviders.filter(p => p.type === 'secured-only' || p.type === 'rki-friendly')
      }

      if (loanAmount > 100000) {
        appropriateProviders = rkiProviders.filter(p => p.maxAmount >= loanAmount)
      }

      // Find best available option
      if (appropriateProviders.length > 0) {
        const bestProvider = appropriateProviders.reduce((best, current) => {
          return current.minRate < best.minRate ? current : best
        })
        setRecommendedProvider(bestProvider)
        
        // Calculate rate based on amount and provider
        let rate = bestProvider.minRate
        if (loanAmount > bestProvider.maxAmount * 0.7) {
          rate = bestProvider.minRate + 2 // Higher rate for higher amounts
        }
        if (!hasCollateral && bestProvider.type === 'secured-only') {
          rate = bestProvider.maxRate
        }
        
        setInterestRate(rate)
      }

      // Standard loan calculation
      const monthlyRate = interestRate / 100 / 12
      const numPayments = loanTerm * 12

      if (monthlyRate === 0) {
        const payment = loanAmount / numPayments
        setMonthlyPayment(payment)
        setTotalCost(loanAmount)
        setTotalInterest(0)
      } else {
        const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                        (Math.pow(1 + monthlyRate, numPayments) - 1)
        const totalPayments = payment * numPayments
        
        setMonthlyPayment(payment)
        setTotalCost(totalPayments)
        setTotalInterest(totalPayments - loanAmount)
      }

      // Affordability check
      const paymentToIncomeRatio = (monthlyPayment / monthlyIncome) * 100
      if (paymentToIncomeRatio > 40) {
        setAffordabilityCheck('poor')
      } else if (paymentToIncomeRatio > 25) {
        setAffordabilityCheck('warning')
      } else {
        setAffordabilityCheck('good')
      }
    }

    calculateLoan()
  }, [loanAmount, loanTerm, hasCollateral, monthlyIncome, interestRate])

  // FAQ data
  const faqs = [
    {
      question: 'Kan jeg virkelig få et lån selvom jeg står i RKI?',
      answer: 'Ja, der findes specialiserede udbydere der låner til personer i RKI, men med betydeligt dårligere vilkår. Renterne er højere, beløbene mindre, og kravene strengere.'
    },
    {
      question: 'Hvor høje er renterne på RKI-lån?',
      answer: 'Renterne ligger typisk mellem 12-25% årligt, hvilket er betydeligt højere end normale forbrugslån på 4-8%. Dette gør lånene meget dyre.'
    },
    {
      question: 'Hvor meget kan jeg låne med RKI?',
      answer: 'De fleste RKI-venlige udbydere låner maksimalt 50.000-100.000 kr, hvilket er mindre end ved normal kredit hvor man kan låne op til 500.000 kr eller mere.'
    },
    {
      question: 'Skal jeg stille sikkerhed for at få lånet?',
      answer: 'Mange RKI-lån kræver sikkerhed i bil, bolig eller andre værdier. Dette giver bedre renter, men du risikerer at miste aktivet hvis du ikke kan betale.'
    },
    {
      question: 'Hvad er alternativerne til et RKI-lån?',
      answer: 'Gældsrådgivning, lån fra familie, afdragsaftaler med kreditorer, eller at spare op er ofte bedre alternativer der ikke forværrer din situation.'
    },
    {
      question: 'Hvordan kommer jeg ud af RKI igen?',
      answer: 'Du kommer ud af RKI ved at betale din gæld og vente 5 år efter sidste negative registrering. Gældsrådgivning kan hjælpe med en plan.'
    },
    {
      question: 'Er der risiko for svindel med RKI-lån?',
      answer: 'Ja, mange useriøse aktører udnytter personer i RKI. Vær særligt forsigtig med lån der kræver forudbetaling eller har urealistisk lave renter.'
    },
    {
      question: 'Kan en medansøger hjælpe med at få bedre vilkår?',
      answer: 'Ja, en medansøger med god økonomi kan give dig adgang til almindelige lån med meget bedre renter og vilkår end specialiserede RKI-lån.'
    }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getAffordabilityColor = () => {
    switch (affordabilityCheck) {
      case 'good': return 'text-green-400'
      case 'warning': return 'text-yellow-400'
      case 'poor': return 'text-red-400'
      default: return 'text-white'
    }
  }

  const getAffordabilityMessage = () => {
    const ratio = Math.round((monthlyPayment / monthlyIncome) * 100)
    switch (affordabilityCheck) {
      case 'good': return `${ratio}% af din indkomst - dette ser fornuftigt ud`
      case 'warning': return `${ratio}% af din indkomst - vær forsigtig, dette er højt`
      case 'poor': return `${ratio}% af din indkomst - dette er for dyrt og risikabelt`
      default: return ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900"></div>
        
        {/* Warning-themed shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-12 inline-flex items-center gap-4 bg-orange-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-orange-400/20 hover:bg-orange-600/30 transition-all duration-500 group cursor-pointer">
              <AlertTriangle className="h-6 w-6 text-orange-400 group-hover:animate-pulse" />
              <span className="text-white font-bold text-lg">Forbrugslån trods RKI - Få ansvarlig vejledning</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-orange-100 to-yellow-100 bg-clip-text text-transparent">
                Lån trods
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                RKI registrering
              </span>
            </h1>
            
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-orange-100 mb-16 font-light">
              Vi hjælper dig med at <span className="font-black text-white">forstå mulighederne</span> og 
              <span className="font-black text-yellow-400"> vurdere alternativerne</span> ansvarligt.
              <br />
              <span className="text-lg text-orange-300 mt-4 block">
                Realistisk rådgivning om lån med negativ kredithistorik
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link
                  href="#calculator"
                  className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  <Calculator className="h-7 w-7" />
                  <span>Beregn realistisk lån</span>
                  <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="group relative">
                <Link
                  href="#alternativer"
                  className="relative inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-300"
                >
                  <div className="h-16 w-16 rounded-full bg-orange-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center group-hover:bg-orange-600/30 transition-all duration-300 border border-orange-400/20">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <span>Se alternativer først</span>
                </Link>
              </div>
            </div>

            {/* Reality check stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-red-400/20 hover:bg-red-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-red-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    12-25%
                  </div>
                  <div className="text-white font-semibold">Typisk rente</div>
                  <div className="text-red-300 text-sm">Meget højere end normalt</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-orange-400/20 hover:bg-orange-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-orange-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    50K
                  </div>
                  <div className="text-white font-semibold">Max lånebeløb</div>
                  <div className="text-orange-300 text-sm">Begrænsede muligheder</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-yellow-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-yellow-400/20 hover:bg-yellow-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    85%
                  </div>
                  <div className="text-white font-semibold">Afslår ansøgninger</div>
                  <div className="text-yellow-300 text-sm">Få bliver godkendt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-red-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <AlertTriangle className="h-6 w-6" />
              <span className="font-black text-lg">Vigtige advarsler</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Hvad du skal
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                være opmærksom på
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              RKI-lån er risikable og dyre - forstå konsekvenserne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskFactors.map((risk, index) => {
              const IconComponent = risk.icon
              const delays = ['0ms', '150ms', '300ms', '450ms']
              const colors = risk.severity === 'high' ? 
                'from-red-500 to-red-600' : 'from-orange-500 to-orange-600'
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-2xl border border-red-200/50 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: delays[index] }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${colors} shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-700`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      {risk.severity === 'high' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-black">!</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-red-900 transition-colors duration-500">
                      {risk.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                      {risk.description}
                    </p>
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Better Alternatives Section */}
      <section className="py-32 relative overflow-hidden" id="alternativer">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50 to-blue-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Lightbulb className="h-6 w-6" />
              <span className="font-black text-lg">Bedre alternativer</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-green-900 bg-clip-text text-transparent">
                Overvej disse
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                løsninger først
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Ofte er der bedre og billigere alternativer til RKI-lån
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alternatives.map((alternative, index) => {
              const IconComponent = alternative.icon
              const delays = ['0ms', '200ms', '400ms', '600ms']
              
              return (
                <div 
                  key={index}
                  className="group relative text-center hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: delays[index] }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${alternative.color} shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                      <IconComponent className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${alternative.color} animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-green-900 transition-colors duration-300">
                      {alternative.title}
                    </h3>
                    <p className="text-xl text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-6">
                      {alternative.description}
                    </p>
                    <button className={`bg-gradient-to-r ${alternative.color} text-white py-3 px-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                      {alternative.cta}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Phone className="h-6 w-6" />
              <span className="font-bold text-lg">Ring til gældsrådgivning: 70 10 81 81 (gratis)</span>
            </div>
          </div>
        </div>
      </section>

      {/* RKI Loan Calculator */}
      <section className="py-32 relative overflow-hidden" id="calculator">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-red-400/40 to-pink-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer group">
              <Calculator className="h-7 w-7 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-white text-xl">RKI Låneberegner</span>
              <AlertTriangle className="h-7 w-7 text-red-400 group-hover:animate-pulse" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-8">
              Se de reelle
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                omkostninger
              </span>
            </h2>
            <p className="text-2xl text-orange-100 font-light leading-relaxed">
              Få et realistisk billede af hvad RKI-lån virkelig koster
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-7xl mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 animate-gradient bg-[length:400%_400%]"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 to-red-900/90 backdrop-blur-2xl"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-16">
              {/* Calculator Inputs */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-black text-white mb-4">Indtast dine oplysninger</h3>
                  <p className="text-orange-200">Vær ærlig for at få realistiske resultater</p>
                </div>

                {/* Loan Amount */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl">
                        <DollarSign className="h-7 w-7 text-white" />
                      </div>
                      Ønsket lånebeløb: {formatCurrency(loanAmount)}
                    </label>
                    
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="5000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(to right, #f97316 0%, #ef4444 ${(loanAmount / 100000) * 100}%, rgba(255,255,255,0.2) ${(loanAmount / 100000) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-orange-300 mt-4 font-semibold">
                      <span>5.000 kr</span>
                      <span>100.000 kr (max for RKI)</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Income */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      Månedlig indkomst: {formatCurrency(monthlyIncome)}
                    </label>
                    
                    <input
                      type="range"
                      min="15000"
                      max="60000"
                      step="1000"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex justify-between text-sm text-blue-300 mt-4 font-semibold">
                      <span>15.000 kr</span>
                      <span>60.000+ kr</span>
                    </div>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-2xl">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      Løbetid: {loanTerm} år
                    </label>
                    
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex justify-between text-sm text-green-300 mt-4 font-semibold">
                      <span>1 år</span>
                      <span>5 år (max for RKI)</span>
                    </div>
                  </div>
                </div>

                {/* Collateral Option */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      Kan du stille sikkerhed?
                    </label>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${hasCollateral ? 'bg-white/20 border-2 border-green-400' : 'bg-white/10 hover:bg-white/15'}`} 
                           onClick={() => setHasCollateral(true)}>
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${hasCollateral ? 'bg-green-400 border-green-400' : 'border-white/40'}`}></div>
                          <span className="text-white font-semibold">Ja, jeg har sikkerhed (bolig/bil)</span>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${!hasCollateral ? 'bg-white/20 border-2 border-red-400' : 'bg-white/10 hover:bg-white/15'}`} 
                           onClick={() => setHasCollateral(false)}>
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${!hasCollateral ? 'bg-red-400 border-red-400' : 'border-white/40'}`}></div>
                          <span className="text-white font-semibold">Nej, ingen sikkerhed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-8">
                {/* Affordability Warning */}
                <div className="text-center">
                  <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${
                    affordabilityCheck === 'poor' ? 'from-red-500/20 to-red-600/20 border-red-400/20' :
                    affordabilityCheck === 'warning' ? 'from-yellow-500/20 to-orange-500/20 border-yellow-400/20' :
                    'from-green-500/20 to-emerald-500/20 border-green-400/20'
                  } backdrop-blur-xl px-8 py-4 rounded-full border`}>
                    {affordabilityCheck === 'poor' ? <XCircle className="h-6 w-6 text-red-400" /> :
                     affordabilityCheck === 'warning' ? <AlertTriangle className="h-6 w-6 text-yellow-400" /> :
                     <CheckCircle className="h-6 w-6 text-green-400" />}
                    <span className={`font-black text-xl ${getAffordabilityColor()}`}>
                      {getAffordabilityMessage()}
                    </span>
                  </div>
                </div>

                {/* Provider Recommendation */}
                {recommendedProvider && (
                  <div className={`relative overflow-hidden bg-gradient-to-br ${recommendedProvider.color} rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-500 group cursor-pointer`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20"></div>
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{recommendedProvider.logo}</span>
                          <div>
                            <h3 className="text-2xl font-black">{recommendedProvider.name}</h3>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < Math.floor(recommendedProvider.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-semibold">{recommendedProvider.rating}/5</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-white/80">Rente fra</div>
                          <div className="text-3xl font-black">{interestRate.toFixed(1)}%</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {recommendedProvider.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-300" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-white/20 rounded-2xl p-4">
                        <div className="text-center mb-2">
                          <div className="text-white/80 text-sm">{recommendedProvider.requirement}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-white/80 text-sm">Etableringsgebyr</div>
                            <div className="font-black">{formatCurrency(recommendedProvider.setupFee)}</div>
                          </div>
                          <div>
                            <div className="text-white/80 text-sm">Max beløb</div>
                            <div className="font-black">{formatCurrency(recommendedProvider.maxAmount)}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Monthly Payment Result */}
                <div className={`relative overflow-hidden ${
                  affordabilityCheck === 'poor' ? 'bg-gradient-to-br from-red-500 via-red-600 to-red-700' :
                  affordabilityCheck === 'warning' ? 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500' :
                  'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500'
                } rounded-3xl p-12 shadow-2xl text-white transform hover:scale-105 transition-all duration-500 group cursor-pointer`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20"></div>
                  
                  <div className="relative text-center">
                    <p className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                      {affordabilityCheck === 'poor' ? <span>⚠️</span> : <span>💰</span>}
                      Månedlig ydelse
                      {affordabilityCheck === 'poor' && <span>⚠️</span>}
                    </p>
                    <p className="text-6xl lg:text-7xl font-black mb-6 animate-pulse">
                      {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-xl">pr. måned i {loanTerm} år</p>
                    
                    {affordabilityCheck === 'poor' && (
                      <div className="mt-8 bg-red-600/50 rounded-2xl p-6">
                        <p className="font-bold text-xl mb-2">⚠️ ADVARSEL</p>
                        <p className="text-red-100">Dette lån er for dyrt i forhold til din indkomst og vil sandsynligvis ikke blive godkendt</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Loan Breakdown */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">📊</span>
                        <span className="text-white/80 font-bold text-xl">Lånebeløb</span>
                      </div>
                      <span className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">💳</span>
                        <span className="text-white/80 font-bold text-xl">Samlet tilbagebetaling</span>
                      </div>
                      <span className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(totalCost)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-2xl rounded-2xl p-8 border border-red-400/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">💸</span>
                        <span className="text-red-100 font-bold text-xl">Samlede renter (DYRT!)</span>
                      </div>
                      <span className="text-3xl font-black text-red-300 group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-red-200 text-sm">
                        Du betaler {Math.round((totalInterest / loanAmount) * 100)}% ekstra i renter!
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  {affordabilityCheck === 'poor' ? (
                    <div className="text-center space-y-6">
                      <div className="bg-red-600/20 rounded-3xl p-8 border border-red-400/20">
                        <h3 className="text-2xl font-black text-red-300 mb-4">Dette lån anbefales ikke</h3>
                        <p className="text-red-100 mb-6">Baseret på din indkomst er dette lån for risikabelt. Overvej alternativerne ovenfor.</p>
                        <Link
                          href="#alternativer"
                          className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <Lightbulb className="h-6 w-6" />
                          <span>Se bedre alternativer</span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                      <Link
                        href="/ansog-rki"
                        className="relative w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-8 px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-6 text-2xl"
                      >
                        <span className="text-3xl">⚠️</span>
                        <span>Undersøg denne mulighed</span>
                        <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-300" />
                      </Link>
                    </div>
                  )}
                  <p className="text-center text-lg text-orange-200 mt-6 font-semibold">
                    ⚠️ Høj risiko • Dyre renter • Overvej alternativer først
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50"></div>
        
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-orange-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <HelpCircle className="h-6 w-6" />
              <span className="font-black text-lg">Ofte stillede spørgsmål</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Alt om
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                RKI-lån
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Få ærlige svar på de vigtigste spørgsmål om lån med negativ kredithistorik
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-300 group"
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

          {/* Help CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-green-600 to-blue-700 text-white px-12 py-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl">📞</div>
              <div>
                <h3 className="font-black text-xl mb-2">Har du brug for hjælp?</h3>
                <p className="text-green-100 mb-6">Professionel gældsrådgivning er gratis og fortroligt</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:70108181" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-2xl font-bold transition-colors duration-300">
                    📞 70 10 81 81 (gratis)
                  </a>
                  <a href="https://www.gaeldsradgivning.dk" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-2xl font-bold transition-colors duration-300">
                    🌐 gaeldsradgivning.dk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="relative px-6 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <AlertTriangle className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold text-white">Tænk dig om før du låner - der er ofte bedre alternativer</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Overvej alle
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                muligheder først
              </span>
            </h2>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-orange-100 mb-16">
              RKI-lån er dyre og risikable. Få professionel rådgivning og overvej alternativer.
              <span className="block mt-4 font-bold text-white">
                Gældsrådgivning er gratis • Fortroligt • Kan redde din økonomi
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <a
                href="tel:70108181"
                className="group relative overflow-hidden inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-xl font-black text-orange-600 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-50/0 via-green-50/50 to-green-50/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <Phone className="h-7 w-7 relative z-10 text-green-600" />
                <span className="relative z-10">Ring til gældsrådgivning</span>
                <span className="relative z-10 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">GRATIS</span>
              </a>
              
              <Link
                href="#alternativer"
                className="group inline-flex items-center gap-4 text-xl font-bold text-white hover:text-orange-300 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <span>Se bedre alternativer</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-400/20">
                  <Heart className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Ansvarlig rådgivning</div>
                  <div className="text-sm text-white/60">Din økonomi først</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/20">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Fortrolig hjælp</div>
                  <div className="text-sm text-white/60">Gratis gældsrådgivning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900" aria-labelledby="footer-heading">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/20">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Lån.dk RKI
                </span>
              </div>
              <p className="text-lg leading-8 text-slate-400 max-w-md">
                Ansvarlig rådgivning om lån til personer med <span className="font-semibold text-white">negativ kredithistorik</span>. 
                Vi prioriterer din økonomiske sikkerhed.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <p className="font-bold text-white mb-4">Gratis gældsrådgivning</p>
                <div className="space-y-2 text-slate-400">
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-400" />
                    70 10 81 81 (gratis)
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400">🌐</span>
                    gaeldsradgivning.dk
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Lånetyper</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <Link href="/forbrugslaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Forbrugslån
                    </Link>
                  </li>
                  <li>
                    <Link href="/forbrugslaan/rki" className="text-orange-400 font-semibold">
                      RKI Forbrugslån
                    </Link>
                  </li>
                  <li>
                    <Link href="/kviklaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Kviklån
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Hjælp</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a href="tel:70108181" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold">
                      Gældsrådgivning (gratis)
                    </a>
                  </li>
                  <li>
                    <Link href="/guide/rki" className="text-slate-400 hover:text-white transition-colors duration-300">
                      RKI Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Kontakt os
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500 text-center">
              &copy; 2025 Sammenlign Lån & Find Det Bedste Tilbud – Lån.dk. Ansvarlig lånerådgivning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}