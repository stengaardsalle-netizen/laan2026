'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/layout/Header'
import { 
  Calculator, 
  Coins,
  Clock,
  TrendingUp,
  Sparkles,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle,
  Shield,
  Users,
  Award,
  ChevronDown
} from 'lucide-react'

export default function HomePage() {
  const [amount, setAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(8)
  const [termYears, setTermYears] = useState(5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Loan types
  const loanTypes = [
    {
      title: 'Boliglån',
      description: 'Få finansiering til dit drømmehjem med lave renter og fleksible vilkår.',
      icon: 'Building',
      color: 'from-blue-500 to-blue-600',
      features: ['Lave renter', 'Lange løbetider', 'Fleksible vilkår']
    },
    {
      title: 'Forbrugslån',
      description: 'Til større indkøb og investeringer med faste månedlige ydelser.',
      icon: 'ShoppingBag',
      color: 'from-green-500 to-green-600',
      features: ['Hurtig behandling', 'Faste ydelser', 'Ingen sikkerhed']
    },
    {
      title: 'Kviklån',
      description: 'Hurtig adgang til kontanter når du har brug for dem akut.',
      icon: 'Zap',
      color: 'from-orange-500 to-orange-600',
      features: ['Øjeblikkelig svar', 'Fleksibel tilbagebetaling', '24/7 ansøgning']
    },
    {
      title: 'Sammellån',
      description: 'Samle alle dine lån i ét og få bedre overblik over økonomien.',
      icon: 'BarChart3',
      color: 'from-purple-500 to-purple-600',
      features: ['Lavere rente', 'Ét månedligt beløb', 'Bedre overblik']
    }
  ]

  // Benefits
  const benefits = [
    {
      icon: Shield,
      title: 'Sikker sammenligning',
      description: 'Vi arbejder kun sammen med godkendte finansielle udbydere'
    },
    {
      icon: Users,
      title: 'Gratis rådgivning',
      description: 'Vores eksperter hjælper dig med at finde det rigtige lån'
    },
    {
      icon: Award,
      title: 'Bedste tilbud',
      description: 'Vi finder de mest konkurrencedygtige renter på markedet'
    }
  ]

  // FAQ data with much better content
  const faqs = [
    {
      question: 'Hvordan sammenligner I lån fra forskellige banker?',
      answer: 'Vi bruger avancerede algoritmer til at sammenligne ÅOP (Årlige Omkostninger i Procent), renter, gebyrer og vilkår fra over 50 danske banker og finansielle institutioner. Vores system opdateres dagligt for at sikre, at du altid ser de mest aktuelle tilbud.'
    },
    {
      question: 'Er jeres service helt gratis at bruge?',
      answer: 'Ja, vores sammenligningsservice er 100% gratis for dig som forbruger. Vi modtager en kommission fra bankerne når du vælger et lån gennem os, men det påvirker ikke de priser eller vilkår du får - de er identiske med at gå direkte til banken.'
    },
    {
      question: 'Hvor hurtigt kan jeg få svar på min låneansøgning?',
      answer: 'Efter du har udfyldt vores 2-minutters ansøgning, får du øjeblikkeligt et overblik over tilgængelige lån. For det endelige lånetilsagn varierer det mellem bankerne - typisk 1-5 hverdage for forbrugslån og kviklån, mens boliglån kan tage 1-2 uger.'
    },
    {
      question: 'Påvirker det min kreditvurdering at søge lån gennem jer?',
      answer: 'Vores indledende sammenligning påvirker ikke din kreditvurdering. Først når du beslutter dig for et specifikt lån og indsender en formel ansøgning til banken, foretages der en kreditkontrol. Vi informerer altid tydeligt om dette trin.'
    },
    {
      question: 'Hvilke typer lån kan jeg sammenligne hos jer?',
      answer: 'Du kan sammenligne boliglån, forbrugslån, kviklån, sammellån og erhvervslån. Vi dækker alt fra mindre beløb på 5.000 kr til store boliglån på flere millioner kroner, med løbetider fra 6 måneder til 30 år.'
    },
    {
      question: 'Er mine personlige oplysninger sikre hos jer?',
      answer: 'Absolut. Vi bruger bankniveau sikkerhed med 256-bit SSL kryptering og opbevarer kun nødvendige oplysninger. Vi sælger aldrig dine data til tredjeparter og overholder alle GDPR krav. Du kan til enhver tid få indsigt i eller slette dine oplysninger.'
    },
    {
      question: 'Hvad hvis jeg har dårlig kredit - kan I stadig hjælpe?',
      answer: 'Ja, vi samarbejder med banker der specialiserer sig i lån til personer med varierende kreditprofiler. Selvom mulighederne kan være begrænsede, finder vi ofte løsninger der ikke er tilgængelige gennem traditionelle banker.'
    },
    {
      question: 'Kan jeg få rådgivning om hvilket lån der passer bedst til mig?',
      answer: 'Ja, vores certificerede lånerådgivere er tilgængelige på telefon og email for gratis rådgivning. Vi hjælper dig med at forstå forskellen mellem lånetyperne og finder den løsning der passer bedst til din specifikke situation og økonomi.'
    }
  ]

  // Loan calculation effect
  useEffect(() => {
    const calculateLoan = () => {
      const principal = amount
      const monthlyRate = interestRate / 100 / 12
      const numPayments = termYears * 12

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
  }, [amount, interestRate, termYears])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-screen flex items-center">
        {/* Professional blue background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        
        {/* Subtle floating shapes - smaller on mobile */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '50px 50px'}}>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Trustworthy badge - mobile friendly */}
            <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 sm:gap-4 bg-blue-600/20 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl border border-blue-400/20 hover:bg-blue-600/30 transition-all duration-500 group cursor-pointer">
              <div className="relative">
                <div className="h-2 w-2 sm:h-3 sm:w-3 bg-green-400 rounded-full animate-ping absolute"></div>
                <div className="h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white font-bold text-sm sm:text-lg">Danmarks mest pålidelige lånesammenligning</span>
              <div className="h-5 w-5 sm:h-6 sm:w-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </div>
            
            {/* Shorter, more professional headline - responsive */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Find dit perfekte lån 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                på 2 minutter
              </span>
            </h1>
            
            {/* Professional subtext - mobile friendly */}
            <p className="mx-auto max-w-4xl text-lg sm:text-2xl lg:text-3xl leading-relaxed text-blue-100 mb-12 sm:mb-16 font-light px-4">
              Fra <span className="font-black text-white">dyrt kaos</span> til <span className="font-black text-green-400">smart økonomi</span>.
              <br />
              <span className="text-base sm:text-lg text-blue-300 mt-2 sm:mt-4 block">
                Vi sammenligner automatisk renter og vilkår fra 50+ danske banker
              </span>
            </p>
            
            {/* Professional CTA section - mobile stack */}
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
              {/* Primary CTA */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link
                  href="/sammenlign"
                  className="relative inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Sammenlign lån nu</span>
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Secondary CTA */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <Link
                  href="#calculator"
                  className="relative inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center group-hover:bg-blue-600/30 group-hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/20">
                    <Calculator className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <span>Test kalkulatoren</span>
                </Link>
              </div>
            </div>

            {/* Trust-building stats with blue theme - mobile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="bg-blue-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-blue-400/20 hover:bg-blue-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-2xl sm:text-4xl font-black text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    2 min
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base">Hurtigste sammenligning</div>
                  <div className="text-blue-300 text-xs sm:text-sm">Automatisk analyse</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-indigo-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-indigo-400/20 hover:bg-indigo-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-2xl sm:text-4xl font-black text-indigo-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base">Godkendte banker</div>
                  <div className="text-indigo-300 text-xs sm:text-sm">Altid bedste pris</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-green-600/20 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-green-400/20 hover:bg-green-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-2xl sm:text-4xl font-black text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    15K+
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base">Kroner spart i snit</div>
                  <div className="text-green-300 text-xs sm:text-sm">Per kunde sidste måned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </section>

      {/* Loan Types - Mobile Optimized */}
      <section className="py-16 sm:py-32 relative overflow-hidden" id="loanTypes">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-100"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header - mobile friendly */}
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-black text-sm sm:text-lg">Vælg din lånetype</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 px-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Fra drøm til 
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                virkelighed
              </span>
            </h2>
            <p className="text-lg sm:text-2xl text-slate-600 font-light px-4">
              Hvilket lån passer til din situation? Vi guider dig til den perfekte løsning
            </p>
          </div>
          
          {/* Interactive loan type cards - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {loanTypes.map((loanType, index) => {
              const delays = ['0ms', '150ms', '300ms', '450ms']
              const hoverColors = ['hover:from-blue-600', 'hover:from-green-600', 'hover:from-orange-600', 'hover:from-purple-600']
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-white/20 hover:shadow-2xl hover:scale-105 sm:hover:scale-110 hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-700 cursor-pointer`}
                  style={{ animationDelay: delays[index] }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${loanType.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Floating icon with pulse effect */}
                  <div className="relative mb-6 sm:mb-8 flex justify-center">
                    <div className={`relative inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br ${loanType.color} shadow-2xl group-hover:shadow-3xl group-hover:scale-110 sm:group-hover:scale-125 transition-all duration-700`}>
                      <div className="h-8 w-8 sm:h-10 sm:w-10 text-white flex items-center justify-center">
                        {/* Icon placeholder since we can't dynamically import */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded"></div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                      {/* Pulse rings */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${loanType.color} animate-ping opacity-0 group-hover:opacity-75 transition-opacity duration-700`}></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors duration-500">
                      {loanType.title}
                    </h3>
                    <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg group-hover:text-slate-700 transition-colors duration-300">
                      {loanType.description}
                    </p>
                    
                    {/* Interactive features */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {loanType.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-white/50 group-hover:bg-white/80 transition-all duration-300"
                          style={{ animationDelay: `${300 + featureIndex * 100}ms` }}
                        >
                          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
                            <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA button */}
                    <button className={`w-full bg-gradient-to-r ${loanType.color} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-lg group-hover:animate-pulse`}>
                      Se tilbud nu
                    </button>
                  </div>
                  
                  {/* Hover decorations */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA - mobile friendly */}
          <div className="text-center mt-12 sm:mt-20 px-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-4 sm:px-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
              <span className="font-bold text-sm sm:text-lg text-center">Ikke sikker? Vi hjælper dig med at vælge</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Mobile Optimized */}
      <section className="py-16 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-black text-sm sm:text-lg">Hvorfor vi er #1</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 px-4">
              <span className="bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                10.000+ danskere
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                stoler på os
              </span>
            </h2>
            <p className="text-lg sm:text-2xl text-slate-600 font-light px-4">
              Vi har hjulpet tusindvis af familier med at spare millioner på deres lån
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500', 
                'from-purple-500 to-pink-500'
              ]
              const delays = ['0ms', '200ms', '400ms']
              
              return (
                <div 
                  key={index}
                  className="group relative text-center hover:scale-105 sm:hover:scale-110 transition-all duration-500 px-4"
                  style={{ animationDelay: delays[index] }}
                >
                  {/* Floating background effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with advanced effects */}
                  <div className="relative mb-6 sm:mb-8 flex justify-center">
                    <div className={`relative inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index]} shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                      <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Animated rings */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradients[index]} animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${gradients[index]} animate-ping opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 sm:mb-6 group-hover:text-purple-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
              )
            })}
          </div>

          {/* Social proof section - mobile friendly */}
          <div className="mt-16 sm:mt-32 text-center px-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/70 backdrop-blur-xl px-8 py-6 sm:px-12 rounded-full shadow-2xl border border-white/20">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-${i*100} to-purple-${i*100} border-2 sm:border-4 border-white flex items-center justify-center font-bold text-white text-xs sm:text-base`}>
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-black text-slate-900">4.8/5 stjerner</div>
                <div className="text-slate-600 text-sm sm:text-base">Fra 2.847 anmeldelser</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Loan Calculator - HEAVILY MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-32 relative overflow-hidden" id="calculator">
        {/* Dynamic background with moving elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 left-8 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-12 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Engaging header - mobile friendly */}
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer group">
              <Calculator className="h-5 w-5 sm:h-7 sm:w-7 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-white text-sm sm:text-xl">Smart Lånekalkulator</span>
              <div className="animate-pulse text-lg sm:text-xl">⚡</div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 sm:mb-8">
              Se hvor meget du
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                sparer hver måned
              </span>
            </h2>
            <p className="text-lg sm:text-2xl text-blue-100 font-light leading-relaxed px-4">
              Vores AI-drevne kalkulator finder automatisk de billigste renter på markedet
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-8 lg:p-16 max-w-7xl mx-auto">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient bg-[length:400%_400%]"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 to-indigo-900/90 backdrop-blur-2xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
              {/* Interactive Input Section - Mobile Optimized */}
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Juster dine værdier</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Se øjeblikkeligt hvordan det påvirker dit lån</p>
                </div>

                {/* Amount Slider - Mobile Optimized */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-6 sm:p-8">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <Coins className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Lånebeløb: {formatCurrency(amount)}</span>
                    </label>
                    
                    <input
                      type="range"
                      min="1000"
                      max="1000000"
                      step="1000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300 slider"
                      style={{
                        background: `linear-gradient(to right, #06b6d4 0%, #3b82f6 ${(amount / 1000000) * 100}%, rgba(255,255,255,0.2) ${(amount / 1000000) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-blue-300 mt-2 sm:mt-4 font-semibold">
                      <span>1K kr</span>
                      <span>1M kr</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate Slider - Mobile Optimized */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-6 sm:p-8">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <TrendingUp className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Årlig rente: {interestRate}%</span>
                    </label>
                    
                    <input
                      type="range"
                      min="0.1"
                      max="20"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300 slider"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #059669 ${(interestRate / 20) * 100}%, rgba(255,255,255,0.2) ${(interestRate / 20) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-green-300 mt-2 sm:mt-4 font-semibold">
                      <span>0.1%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Term Slider - Mobile Optimized */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 rounded-2xl p-6 sm:p-8">
                    <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl font-black text-white mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl mx-auto sm:mx-0">
                        <Clock className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <span className="text-center sm:text-left">Løbetid: {termYears} år</span>
                    </label>
                    
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={termYears}
                      onChange={(e) => setTermYears(Number(e.target.value))}
                      className="w-full h-4 sm:h-6 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm hover:scale-105 transition-transform duration-300 slider"
                      style={{
                        background: `linear-gradient(to right, #8b5cf6 0%, #ec4899 ${(termYears / 30) * 100}%, rgba(255,255,255,0.2) ${(termYears / 30) * 100}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-purple-300 mt-2 sm:mt-4 font-semibold">
                      <span>1 år</span>
                      <span>30 år</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Results Section - Mobile Optimized */}
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-green-400/20">
                    <div className="animate-pulse text-lg sm:text-2xl">🎯</div>
                    <span className="font-black text-green-300 text-sm sm:text-xl">Dit resultat</span>
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 animate-spin" style={{animationDuration: '3s'}} />
                  </div>
                </div>
                
                {/* Main result with celebration effect - Mobile Optimized */}
                <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 sm:p-12 shadow-2xl text-white transform hover:scale-105 transition-all duration-500 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20"></div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
                  
                  <div className="relative text-center">
                    <p className="text-green-100 text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
                      <span>💰</span> Månedlig ydelse <span>💰</span>
                    </p>
                    <p className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 animate-pulse leading-tight">
                      {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-green-100 text-sm sm:text-xl">pr. måned i {termYears} år</p>
                    
                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xl sm:text-2xl">
                      <span className="animate-bounce" style={{animationDelay: '0s'}}>🎉</span>
                      <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🎊</span>
                      <span className="animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
                    </div>
                  </div>
                </div>

                {/* Breakdown with visual impact - Mobile Optimized */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="animate-pulse text-lg sm:text-xl">📊</div>
                        <span className="text-white/80 font-bold text-sm sm:text-xl">Samlet tilbagebetaling</span>
                      </div>
                      <span className="text-xl sm:text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(totalCost)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-orange-400/20 shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="animate-pulse text-lg sm:text-xl">⚠️</div>
                        <span className="text-orange-100 font-bold text-sm sm:text-xl">Samlede renter</span>
                      </div>
                      <span className="text-xl sm:text-3xl font-black text-orange-300 group-hover:scale-110 transition-transform duration-300">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mega CTA - Mobile Optimized */}
                <div className="pt-6 sm:pt-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <Link
                      href="/sammenlign"
                      className="relative w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-6 sm:py-8 px-8 sm:px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-6 text-lg sm:text-2xl"
                    >
                      <div className="animate-bounce text-lg sm:text-2xl">🚀</div>
                      <span>Find billigere lån nu!</span>
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-3 transition-transform duration-300" />
                    </Link>
                  </div>
                  <p className="text-center text-sm sm:text-lg text-blue-200 mt-4 sm:mt-6 font-semibold px-4">
                    🎁 100% gratis • Ingen forpligtelser • Svar på 2 minutter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-16 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-blue-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-lg sm:text-2xl">❓</span>
              <span className="font-black text-sm sm:text-lg">Svar på dine spørgsmål</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 px-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Alt du skal vide
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                om lånesammenligning
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Vi har samlet svar på de mest stillede spørgsmål om vores service og låneprocessen
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-300 group"
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

          {/* Bottom CTA - Mobile Optimized */}
          <div className="text-center mt-12 sm:mt-20 px-4">
            <div className="inline-flex flex-col items-center gap-4 sm:gap-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-8 py-6 sm:px-12 sm:py-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-4xl">💬</div>
              <div>
                <h3 className="font-black text-lg sm:text-xl mb-2">Har du andre spørgsmål?</h3>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">Vores eksperter er klar til at hjælpe dig</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="tel:+4531380217" className="bg-white/20 hover:bg-white/30 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold transition-colors duration-300 text-sm sm:text-base">
                    📞 Ring til os
                  </a>
                  <a href="mailto:info@fitezfinance.com" className="bg-white/20 hover:bg-white/30 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold transition-colors duration-300 text-sm sm:text-base">
                    ✉️ Send email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl transform translate-x-24 sm:translate-x-48 -translate-y-24 sm:-translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transform -translate-x-24 sm:-translate-x-48 translate-y-24 sm:translate-y-48"></div>
        
        <div className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl px-4 py-2 sm:px-6 sm:py-3 rounded-2xl border border-white/20">
              <div className="h-1 w-1 sm:h-2 sm:w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-bold text-white">Over 10.000 danskere har allerede fundet deres perfekte lån</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 sm:mb-8 px-4">
              Klar til at sammenligne
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                dit drømmelån?
              </span>
            </h2>
            
            <p className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-blue-100 mb-12 sm:mb-16 px-4">
              Find det bedste lånetilbud på under 2 minutter. Sammenlign renter, vilkår og gebyrer fra Danmarks førende finansielle udbydere.
              <span className="block mt-3 sm:mt-4 font-bold text-white text-sm sm:text-base">
                100% gratis • Ingen forpligtelser • Sikker sammenligning
              </span>
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
              <Link
                href="/sammenlign"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 sm:gap-4 rounded-3xl bg-white px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-black text-blue-600 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 relative z-10 text-blue-600" />
                <span className="relative z-10">Start nu - det er gratis</span>
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/guide"
                className="group inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-xl font-bold text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-white/10 transition-all duration-300 border border-white/20">
                  <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span>Læs vores guide først</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust indicators - Mobile Stack */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-400/20">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm sm:text-base">100% sikker</div>
                  <div className="text-xs sm:text-sm text-white/60">SSL krypteret</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/20">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm sm:text-base">10.000+</div>
                  <div className="text-xs sm:text-sm text-white/60">tilfredse kunder</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center border border-yellow-400/20">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm sm:text-base">4.8/5 stjerner</div>
                  <div className="text-xs sm:text-sm text-white/60">på Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="relative bg-slate-900" aria-labelledby="footer-heading">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <Coins className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Lån.dk
                </span>
              </div>
              <p className="text-base sm:text-lg leading-6 sm:leading-8 text-slate-400 max-w-md">
                Din pålidelige partner til at finde det <span className="font-semibold text-white">bedste lån</span>. 
                Vi sammenligner tilbud fra Danmarks førende finansielle udbydere.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                <p className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Kontakt os</p>
                <div className="space-y-2 text-slate-400 text-sm sm:text-base">
                  <p className="flex items-center gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-xs sm:text-base">✉</span>
                    </div>
                    info@fitezfinance.com
                  </p>
                  <p className="flex items-start gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs sm:text-base">📍</span>
                    </div>
                    <span>
                      Stengårds Alle 45<br />
                      DK-2800 Kgs. Lyngby
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Lånetyper</h3>
                  <ul role="list" className="space-y-3 sm:space-y-4">
                    <li>
                      <Link href="/boliglaan" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-blue-400 transition-colors duration-300" />
                        Boliglån
                      </Link>
                    </li>
                    <li>
                      <Link href="/forbrugslaan" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-green-400 transition-colors duration-300" />
                        Forbrugslån
                      </Link>
                    </li>
                    <li>
                      <Link href="/kviklaan" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-orange-400 transition-colors duration-300" />
                        Kviklån
                      </Link>
                    </li>
                    <li>
                      <Link href="/samlelaan" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-purple-400 transition-colors duration-300" />
                        Sammellån
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 sm:mt-10 md:mt-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Information</h3>
                  <ul role="list" className="space-y-3 sm:space-y-4">
                    <li>
                      <Link href="/guide" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-blue-400 transition-colors duration-300" />
                        Lånevejledning
                      </Link>
                    </li>
                    <li>
                      <Link href="/sammenlign" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-green-400 transition-colors duration-300" />
                        Sammenlign Lån
                      </Link>
                    </li>
                    <li>
                      <Link href="/kontakt" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-purple-400 transition-colors duration-300" />
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link href="/om-os" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-yellow-400 transition-colors duration-300" />
                        Om os
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Juridisk</h3>
                  <ul role="list" className="space-y-3 sm:space-y-4">
                    <li>
                      <Link href="/privatlivspolitik" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <Shield className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-green-400 transition-colors duration-300" />
                        Privatlivspolitik
                      </Link>
                    </li>
                    <li>
                      <Link href="/vilkaar" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-blue-400 transition-colors duration-300" />
                        Vilkår og betingelser
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="group flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                        <span className="text-xs">🍪</span>
                        Cookie-politik
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 border-t border-slate-800 pt-6 sm:pt-8 lg:mt-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
                &copy; 2025 Sammenlign Lån & Find Det Bedste Tilbud — Lån.dk. Alle rettigheder forbeholdes.
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500 rounded-full animate-pulse"></div>
                  SSL sikret
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                  4.8/5 på Trustpilot
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for sliders - Mobile Optimized */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid #3b82f6;
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
          border: 2px solid #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        @media (min-width: 640px) {
          .slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
          }
        }
      `}</style>
    </div>
  )
}