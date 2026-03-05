'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Car, 
  Calculator,
  TrendingDown,
  Shield,
  Leaf,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Users,
  Award,
  ChevronDown,
  DollarSign,
  CreditCard,
  Zap,
  Target,
  BookOpen,
  Star,
  Sparkles
} from 'lucide-react'

export default function BilloanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  
  // Calculator state
  const [carPrice, setCarPrice] = useState(200000)
  const [downPayment, setDownPayment] = useState(40000)
  const [loanTerm, setLoanTerm] = useState(8)
  const [loanType, setLoanType] = useState('with-collateral') // with-collateral, without-collateral, green
  const [interestRate, setInterestRate] = useState(5.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [recommendedProvider, setRecommendedProvider] = useState(null)

  // Provider database with realistic data
  const providers = [
    {
      name: 'Danske Bank',
      type: 'with-collateral',
      minRate: 4.2,
      maxRate: 8.5,
      greenDiscount: 0.5,
      features: ['Markedets laveste renter', 'Gratis kreditvurdering', '24/7 kundeservice'],
      rating: 4.6,
      setupFee: 2500,
      logo: '🏦',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Nordea',
      type: 'with-collateral',
      minRate: 4.5,
      maxRate: 9.2,
      greenDiscount: 0.7,
      features: ['Hurtig sagsbehandling', 'Personlig vejledning', 'Fleksible afdrag'],
      rating: 4.4,
      setupFee: 1995,
      logo: '🏛️',
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      name: 'Jyske Bank',
      type: 'with-collateral',
      minRate: 4.8,
      maxRate: 8.8,
      greenDiscount: 0.8,
      features: ['Konkurrencedygtige renter', 'Digital låneproces', 'Ingen bindingsperiode'],
      rating: 4.3,
      setupFee: 2200,
      logo: '🏢',
      color: 'from-purple-600 to-purple-700'
    },
    {
      name: 'Santander Consumer Bank',
      type: 'without-collateral',
      minRate: 8.2,
      maxRate: 15.5,
      greenDiscount: 0,
      features: ['Ingen krav om pant', 'Hurtig godkendelse', 'Fleksibel tilbagebetaling'],
      rating: 4.1,
      setupFee: 1500,
      logo: '🚗',
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'Tesla Financial',
      type: 'green',
      minRate: 3.9,
      maxRate: 6.5,
      greenDiscount: 1.2,
      features: ['Specialiseret i elbiler', 'Op til 0% udbetaling', 'Miljøvenlig finansiering'],
      rating: 4.7,
      setupFee: 0,
      logo: '⚡',
      color: 'from-green-600 to-green-700'
    }
  ]

  // Car loan features
  const carLoanFeatures = [
    {
      icon: TrendingDown,
      title: 'Lave renter',
      description: 'Få de bedste renter på markedet med pant i bilen',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Tryg finansiering',
      description: 'Sikker låneproces gennem godkendte banker',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Til alle biltyper',
      description: 'Nye, brugte, elbiler og hybridbiler',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Leaf,
      title: 'Grønne fordele',
      description: 'Særlige vilkår til miljøvenlige biler',
      color: 'from-lime-500 to-green-500'
    }
  ]

  // Process steps
  const processSteps = [
    {
      step: '1',
      title: 'Vælg din bil',
      description: 'Find den bil du ønsker at købe',
      icon: '🚗'
    },
    {
      step: '2',
      title: 'Beregn dit lån',
      description: 'Brug vores smarte beregner nedenfor',
      icon: '🧮'
    },
    {
      step: '3',
      title: 'Sammenlign tilbud',
      description: 'Se anbefalinger fra forskellige banker',
      icon: '📊'
    },
    {
      step: '4',
      title: 'Ansøg og få bilen',
      description: 'Hurtig godkendelse og udbetaling',
      icon: '✨'
    }
  ]

  // Calculate loan details
  useEffect(() => {
    const calculateLoan = () => {
      const loanAmount = carPrice - downPayment
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
        setTotalCost(totalPayments + downPayment)
        setTotalInterest(totalPayments - loanAmount)
      }

      // Find best provider based on loan type and amount
      const relevantProviders = providers.filter(provider => {
        if (loanType === 'green') return provider.type === 'green' || provider.greenDiscount > 0
        return provider.type === loanType
      })

      if (relevantProviders.length > 0) {
        const bestProvider = relevantProviders.reduce((best, current) => {
          let currentRate = current.minRate
          if (loanType === 'green' && current.greenDiscount > 0) {
            currentRate -= current.greenDiscount
          }
          
          let bestRate = best.minRate
          if (loanType === 'green' && best.greenDiscount > 0) {
            bestRate -= best.greenDiscount
          }
          
          return currentRate < bestRate ? current : best
        })
        setRecommendedProvider(bestProvider)
        
        let providerRate = bestProvider.minRate
        if (loanType === 'green' && bestProvider.greenDiscount > 0) {
          providerRate -= bestProvider.greenDiscount
        }
        setInterestRate(providerRate)
      }
    }

    calculateLoan()
  }, [carPrice, downPayment, loanTerm, loanType])

  // FAQ data
  const faqs = [
    {
      question: 'Hvad er forskellen mellem billån med og uden pant?',
      answer: 'Billån med pant betyder at banken har sikkerhed i bilen, hvilket giver lavere renter. Uden pant har du mere frihed, men højere renter da banken løber større risiko.'
    },
    {
      question: 'Hvor stor udbetaling skal jeg betale?',
      answer: 'De fleste banker kræver 10-20% udbetaling. En større udbetaling giver ofte bedre vilkår og lavere renter.'
    },
    {
      question: 'Kan jeg få billån til en brugt bil?',
      answer: 'Ja, du kan få billån til både nye og brugte biler. Vilkårene kan variere afhængigt af bilens alder og værdi.'
    },
    {
      question: 'Hvad er et grønt billån?',
      answer: 'Grønne billån tilbydes til miljøvenlige biler som elbiler og hybridbiler, ofte med bedre renter og lavere udbetalingskrav.'
    },
    {
      question: 'Hvor hurtigt kan jeg få svar på min ansøgning?',
      answer: 'De fleste banker giver svar inden for 1-3 hverdage. Nogle tilbyder hurtigere behandling ved online ansøgning.'
    },
    {
      question: 'Kan jeg indfri mit billån før tid?',
      answer: 'Ja, du kan normalt indfri dit billån før tid. Der kan være et gebyr forbundet hermed, så tjek vilkårene.'
    }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const downPaymentPercentage = Math.round((downPayment / carPrice) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Floating car-themed shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '60px 60px'}}>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-12 inline-flex items-center gap-4 bg-green-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-green-400/20 hover:bg-green-600/30 transition-all duration-500 group cursor-pointer">
              <div className="relative">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-ping absolute"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white font-bold text-lg">Danmarks smarteste billån-sammenligning</span>
              <Car className="h-6 w-6 text-green-400 group-hover:animate-bounce" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Din drømmebil
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                til den bedste pris
              </span>
            </h1>
            
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-blue-100 mb-16 font-light">
              Fra <span className="font-black text-white">dyre bilrenter</span> til <span className="font-black text-green-400">smart finansiering</span>.
              <br />
              <span className="text-lg text-blue-300 mt-4 block">
                Sammenlign billån fra Danmarks førende banker og få den laveste rente
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link
                  href="#calculator"
                  className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  <Calculator className="h-7 w-7" />
                  <span>Beregn dit billån</span>
                  <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="group relative">
                <Link
                  href="/guide"
                  className="relative inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 border border-blue-400/20">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <span>Læs billån-guiden</span>
                </Link>
              </div>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="bg-blue-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-blue-400/20 hover:bg-blue-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    3.2%
                  </div>
                  <div className="text-white font-semibold">Laveste bilrente</div>
                  <div className="text-blue-300 text-sm">På markedet i dag</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-green-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-green-400/20 hover:bg-green-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    25+
                  </div>
                  <div className="text-white font-semibold">Danske banker</div>
                  <div className="text-green-300 text-sm">Sammenligner vi</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-purple-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-purple-400/20 hover:bg-purple-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    35K
                  </div>
                  <div className="text-white font-semibold">Kroner sparet</div>
                  <div className="text-purple-300 text-sm">I gennemsnit per lån</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Loan Features */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-100"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Car className="h-6 w-6" />
              <span className="font-black text-lg">Hvorfor vælge billån?</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Fra drømmen til
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                køkkengulvet
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Få din drømmebil med Danmarks bedste billånsbetingelser
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carLoanFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              const delays = ['0ms', '150ms', '300ms', '450ms']
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-2xl border border-white/20 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: delays[index] }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-700`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} animate-ping opacity-0 group-hover:opacity-75 transition-opacity duration-700`}></div>
                    </div>
                  </div>
                  
                  <div className="relative text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Target className="h-6 w-6" />
              <span className="font-black text-lg">Så nemt er det</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                4 enkle skridt til
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                din nye bil
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Fra søgning til køb på rekordtid
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const delays = ['0ms', '200ms', '400ms', '600ms']
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ]
              
              return (
                <div 
                  key={index}
                  className="group relative text-center hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: delays[index] }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${colors[index]} shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                      <span className="text-4xl">{step.icon}</span>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center font-black text-slate-900">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-purple-900 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xl text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Loan Calculator */}
      <section className="py-32 relative overflow-hidden" id="calculator">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer group">
              <Calculator className="h-7 w-7 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-white text-xl">Smart Billån-beregner</span>
              <Car className="h-7 w-7 text-green-400 group-hover:animate-bounce" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-8">
              Beregn dit perfekte
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                billån på 30 sekunder
              </span>
            </h2>
            <p className="text-2xl text-blue-100 font-light leading-relaxed">
              Vores AI finder automatisk den bedste bank til dine behov
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-7xl mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient bg-[length:400%_400%]"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 to-indigo-900/90 backdrop-blur-2xl"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-16">
              {/* Calculator Inputs */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-black text-white mb-4">Indtast dine oplysninger</h3>
                  <p className="text-blue-200">Se øjeblikkeligt den bedste løsning</p>
                </div>

                {/* Car Price */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                        <Car className="h-7 w-7 text-white" />
                      </div>
                      Bilens pris: {formatCurrency(carPrice)}
                    </label>
                    
                    <input
                      type="range"
                      min="50000"
                      max="1500000"
                      step="5000"
                      value={carPrice}
                      onChange={(e) => setCarPrice(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(to right, #06b6d4 0%, #3b82f6 ${(carPrice / 1500000) * 100}%, rgba(255,255,255,0.2) ${(carPrice / 1500000) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-blue-300 mt-4 font-semibold">
                      <span>50.000 kr</span>
                      <span>1.500.000 kr</span>
                    </div>
                  </div>
                </div>

                {/* Down Payment */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl">
                        <DollarSign className="h-7 w-7 text-white" />
                      </div>
                      Udbetaling: {formatCurrency(downPayment)} ({downPaymentPercentage}%)
                    </label>
                    
                    <input
                      type="range"
                      min="0"
                      max={carPrice * 0.5}
                      step="1000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #059669 ${(downPayment / (carPrice * 0.5)) * 100}%, rgba(255,255,255,0.2) ${(downPayment / (carPrice * 0.5)) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-green-300 mt-4 font-semibold">
                      <span>0 kr (0%)</span>
                      <span>{formatCurrency(carPrice * 0.5)} (50%)</span>
                    </div>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      Løbetid: {loanTerm} år
                    </label>
                    
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(to right, #8b5cf6 0%, #ec4899 ${(loanTerm / 12) * 100}%, rgba(255,255,255,0.2) ${(loanTerm / 12) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-purple-300 mt-4 font-semibold">
                      <span>1 år</span>
                      <span>12 år</span>
                    </div>
                  </div>
                </div>

                {/* Loan Type Selection */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-8">
                    <label className="flex items-center gap-4 text-xl font-black text-white mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      Lånetype
                    </label>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${loanType === 'with-collateral' ? 'bg-white/20 border-2 border-blue-400' : 'bg-white/10 hover:bg-white/15'}`} 
                           onClick={() => setLoanType('with-collateral')}>
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${loanType === 'with-collateral' ? 'bg-blue-400 border-blue-400' : 'border-white/40'}`}></div>
                          <span className="text-white font-semibold">Med pant i bilen (laveste renter)</span>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${loanType === 'without-collateral' ? 'bg-white/20 border-2 border-purple-400' : 'bg-white/10 hover:bg-white/15'}`} 
                           onClick={() => setLoanType('without-collateral')}>
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${loanType === 'without-collateral' ? 'bg-purple-400 border-purple-400' : 'border-white/40'}`}></div>
                          <span className="text-white font-semibold">Uden pant (mere frihed)</span>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${loanType === 'green' ? 'bg-white/20 border-2 border-green-400' : 'bg-white/10 hover:bg-white/15'}`} 
                           onClick={() => setLoanType('green')}>
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${loanType === 'green' ? 'bg-green-400 border-green-400' : 'border-white/40'}`}></div>
                          <span className="text-white font-semibold">Grønt lån (elbil/hybrid)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-8">
                {/* Recommended Provider */}
                {recommendedProvider && (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl px-8 py-4 rounded-full border border-green-400/20">
                      <Star className="h-6 w-6 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
                      <span className="font-black text-green-300 text-xl">Bedste match til dig</span>
                      <Sparkles className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                )}

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
                          <div className="text-sm text-white/80">Fra</div>
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
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-white/80 text-sm">Etableringsgebyr</div>
                            <div className="font-black">{formatCurrency(recommendedProvider.setupFee)}</div>
                          </div>
                          <div>
                            <div className="text-white/80 text-sm">Samlet ÅOP</div>
                            <div className="font-black">{(interestRate + 0.5).toFixed(1)}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Monthly Payment Result */}
                <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-12 shadow-2xl text-white transform hover:scale-105 transition-all duration-500 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20"></div>
                  <div className="absolute -top-2 -right-2 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
                  
                  <div className="relative text-center">
                    <p className="text-green-100 text-xl font-bold mb-4 flex items-center justify-center gap-2">
                      <span>🚗</span> Månedlig ydelse <span>💰</span>
                    </p>
                    <p className="text-6xl lg:text-7xl font-black mb-6 animate-pulse">
                      {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-green-100 text-xl">pr. måned i {loanTerm} år</p>
                    
                    <div className="mt-8 flex items-center justify-center gap-2 text-2xl">
                      <span className="animate-bounce" style={{animationDelay: '0s'}}>🎉</span>
                      <span className="animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
                      <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🚙</span>
                    </div>
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
                        {formatCurrency(carPrice - downPayment)}
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
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-2xl rounded-2xl p-8 border border-orange-400/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">⚠️</span>
                        <span className="text-orange-100 font-bold text-xl">Samlede renter</span>
                      </div>
                      <span className="text-3xl font-black text-orange-300 group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <Link
                      href="/ansog"
                      className="relative w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-8 px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-6 text-2xl"
                    >
                      <span className="text-3xl">🚗</span>
                      <span>Ansøg om dette lån nu!</span>
                      <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-300" />
                    </Link>
                  </div>
                  <p className="text-center text-lg text-blue-200 mt-6 font-semibold">
                    🎯 100% gratis • Ingen forpligtelser • Svar på 24 timer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-2xl">❓</span>
              <span className="font-black text-lg">Svar på dine spørgsmål</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Alt du skal vide
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                om billån
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Vi har samlet svar på de mest stillede spørgsmål om billån og finansiering
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-300 group"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-4 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-blue-100/50">
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

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
        
        <div className="relative px-6 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-white">Over 5.000 danskere har fundet deres drømmebil gennem os</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Klar til at finde
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                dit perfekte billån?
              </span>
            </h2>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-blue-100 mb-16">
              Sammenlign billån fra Danmarks førende banker på under 2 minutter. 
              <span className="block mt-4 font-bold text-white">
                100% gratis • Ingen forpligtelser • Hurtig godkendelse
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link
                href="#calculator"
                className="group relative overflow-hidden inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-xl font-black text-blue-600 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <Calculator className="h-7 w-7 relative z-10 text-blue-600" />
                <span className="relative z-10">Beregn dit lån nu</span>
                <ArrowRight className="h-7 w-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/guide"
                className="group inline-flex items-center gap-4 text-xl font-bold text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span>Læs billån-guiden</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-400/20">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">100% sikker</div>
                  <div className="text-sm text-white/60">SSL krypteret</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/20">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">25+ banker</div>
                  <div className="text-sm text-white/60">sammenligner vi</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center border border-yellow-400/20">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">4.7/5 stjerner</div>
                  <div className="text-sm text-white/60">kundetilfredshed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="relative bg-slate-900" aria-labelledby="footer-heading">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <Car className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Lån.dk
                </span>
              </div>
              <p className="text-lg leading-8 text-slate-400 max-w-md">
                Din pålidelige partner til at finde det <span className="font-semibold text-white">bedste billån</span>. 
                Vi sammenligner tilbud fra Danmarks førende finansielle udbydere.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Lånetyper</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <Link href="/billaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Billån
                    </Link>
                  </li>
                  <li>
                    <Link href="/boliglaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Boliglån
                    </Link>
                  </li>
                  <li>
                    <Link href="/forbrugslaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Forbrugslån
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Information</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <Link href="/guide" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Billån-guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/sammenlign" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Sammenlign lån
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500 text-center">
              &copy; 2025 Sammenlign Lån & Find Det Bedste Tilbud – Lån.dk. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}