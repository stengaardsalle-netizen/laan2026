'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { 
  Calculator,
  TrendingUp,
  AlertTriangle,
  Eye,
  Target,
  CheckCircle,
  ArrowRight,
  XCircle,
  DollarSign,
  BarChart3,
  Lightbulb,
  ChevronDown,
  BookOpen,
  Star,
  Award,
  Shield,
  Users,
  Zap,
  Crown
} from 'lucide-react'

export default function RenterAOPPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  
  // Calculator state for comparing loans
  const [loanAmount, setLoanAmount] = useState(100000)
  const [loanTerm, setLoanTerm] = useState(5)
  
  // Loan A (appears cheaper)
  const [loanARate, setLoanARate] = useState(4.5)
  const [loanASetupFee, setLoanASetupFee] = useState(5000)
  const [loanAMonthlyFee, setLoanAMonthlyFee] = useState(50)
  
  // Loan B (actually cheaper)
  const [loanBRate, setLoanBRate] = useState(6.2)
  const [loanBSetupFee, setLoanBSetupFee] = useState(1000)
  const [loanBMonthlyFee, setLoanBMonthlyFee] = useState(0)

  // Results
  const [loanAResults, setLoanAResults] = useState({})
  const [loanBResults, setLoanBResults] = useState({})
  const [bestLoan, setBestLoan] = useState('A')

  // Key concepts
  const concepts = [
    {
      icon: TrendingUp,
      title: 'Nominel rente',
      description: 'Den grundlæggende rente på lånet - men ikke hele historien',
      color: 'from-blue-500 to-cyan-500',
      example: '5% rente på 100.000 kr = 5.000 kr/år'
    },
    {
      icon: Calculator,
      title: 'ÅOP (Årlige Omkostninger i Procent)',
      description: 'Inkluderer alle omkostninger - den sande pris på lånet',
      color: 'from-green-500 to-emerald-500',
      example: 'Rente + gebyrer = faktisk pris'
    },
    {
      icon: Eye,
      title: 'Skjulte gebyrer',
      description: 'Oprettelse, månedlige gebyrer og andre omkostninger',
      color: 'from-orange-500 to-red-500',
      example: '2.000 kr oprettelse kan øge ÅOP med 1%'
    },
    {
      icon: Target,
      title: 'Sammenligning',
      description: 'Brug altid ÅOP til at sammenligne forskellige lån',
      color: 'from-purple-500 to-pink-500',
      example: 'Lavere rente ≠ billigere lån'
    }
  ]

  // Real provider examples with different fee structures
  const providerExamples = [
    {
      name: 'Bank A - "Laveste rente"',
      nominalRate: 3.9,
      setupFee: 4500,
      monthlyFee: 75,
      aop: 6.8,
      tactic: 'Lokker med lav rente, høje gebyrer',
      color: 'from-red-500 to-red-600',
      warning: true
    },
    {
      name: 'Bank B - "Ingen månedlige gebyrer"',
      nominalRate: 5.2,
      setupFee: 2500,
      monthlyFee: 0,
      aop: 6.1,
      tactic: 'Moderat rente, rimelige gebyrer',
      color: 'from-yellow-500 to-orange-500',
      warning: false
    },
    {
      name: 'Bank C - "Ærlig ÅOP"',
      nominalRate: 5.8,
      setupFee: 1000,
      monthlyFee: 0,
      aop: 6.2,
      tactic: 'Transparent prissætning',
      color: 'from-green-500 to-green-600',
      warning: false
    }
  ]

  // Common traps
  const commonTraps = [
    {
      icon: AlertTriangle,
      title: 'Rente-fælden',
      description: 'Fokuserer kun på den nominelle rente og ignorerer gebyrer',
      example: '3% rente + 5000 kr gebyr = dyrere end 5% uden gebyrer',
      severity: 'high'
    },
    {
      icon: XCircle,
      title: 'Skjulte månedlige gebyrer',
      description: 'Små månedlige beløb der summerer til store omkostninger',
      example: '50 kr/måned × 60 måneder = 3000 kr ekstra',
      severity: 'medium'
    },
    {
      icon: Eye,
      title: 'Introductory rates',
      description: 'Lave startrenter der stiger efter kort tid',
      example: '2% i 6 måneder, derefter 8%',
      severity: 'high'
    },
    {
      icon: DollarSign,
      title: 'Tidlig indfrielsesgebyr',
      description: 'Ekstra omkostninger hvis du vil betale lånet tilbage',
      example: 'Op til 1% af restgæld ved førtidig indfrielse',
      severity: 'medium'
    }
  ]

  // Calculate loan details
  useEffect(() => {
    const calculateLoan = (rate, setupFee, monthlyFee) => {
      const monthlyRate = rate / 100 / 12
      const numPayments = loanTerm * 12
      
      // Monthly payment calculation
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                            (Math.pow(1 + monthlyRate, numPayments) - 1)
      
      // Total costs
      const totalMonthlyPayments = monthlyPayment * numPayments
      const totalMonthlyFees = monthlyFee * numPayments
      const totalCost = totalMonthlyPayments + setupFee + totalMonthlyFees
      const totalInterest = totalCost - loanAmount

      // ÅOP calculation (simplified)
      const totalCostOverLoanAmount = totalCost / loanAmount
      const aop = (Math.pow(totalCostOverLoanAmount, 1/loanTerm) - 1) * 100

      return {
        monthlyPayment: monthlyPayment + monthlyFee,
        totalCost,
        totalInterest,
        aop,
        setupFee,
        totalMonthlyFees
      }
    }

    const resultsA = calculateLoan(loanARate, loanASetupFee, loanAMonthlyFee)
    const resultsB = calculateLoan(loanBRate, loanBSetupFee, loanBMonthlyFee)
    
    setLoanAResults(resultsA)
    setLoanBResults(resultsB)
    
    // Determine which loan is actually better
    setBestLoan(resultsA.totalCost < resultsB.totalCost ? 'A' : 'B')
  }, [loanAmount, loanTerm, loanARate, loanASetupFee, loanAMonthlyFee, loanBRate, loanBSetupFee, loanBMonthlyFee])

  // FAQ data
  const faqs = [
    {
      question: 'Hvad er forskellen på rente og ÅOP?',
      answer: 'Renten er kun den grundlæggende omkostning for at låne pengene, mens ÅOP (Årlige Omkostninger i Procent) inkluderer alle omkostninger - rente, gebyrer, og alle andre udgifter. ÅOP giver dig det reelle billede af hvad lånet koster.'
    },
    {
      question: 'Hvorfor er ÅOP altid højere end renten?',
      answer: 'Fordi ÅOP inkluderer alle omkostninger ved lånet - ikke bare renten. Oprettelsesgebyrer, månedlige administrationsgebyrer, og andre udgifter medregnes, hvilket gør ÅOP til det sande mål for lånets pris.'
    },
    {
      question: 'Kan jeg stole på at banken viser den rigtige ÅOP?',
      answer: 'Ja, banker er lovpligtige til at vise den korrekte ÅOP. Men pas på at alle omkostninger er medregnet - nogle gange kan der være ekstra gebyrer der ikke er inkluderet i den annoncerede ÅOP.'
    },
    {
      question: 'Hvordan beregnes ÅOP præcist?',
      answer: 'ÅOP beregnes som den interne rente der gør nutidsværdien af alle udbetalinger lig med lånebeløbet. Det er en kompleks beregning der tager højde for timing af alle betalinger gennem lånets løbetid.'
    },
    {
      question: 'Hvad hvis lånet har variabel rente?',
      answer: 'Ved variabel rente vises den aktuelle ÅOP baseret på dagens rente. Men husk at både rente og ÅOP kan ændre sig over tid, så den viste ÅOP er kun vejledende.'
    },
    {
      question: 'Er der gebyrer der ikke er inkluderet i ÅOP?',
      answer: 'De fleste gebyrer er inkluderet, men enkelte kan være undtaget - fx gebyrer for overskridelse af betalingsfrister eller ændring af lånevilkår. Læs altid det fine print.'
    },
    {
      question: 'Kan jeg forhandle ÅOP ned?',
      answer: 'Du kan forsøge at forhandle både rente og gebyrer ned, hvilket vil reducere ÅOP. Kunder med god økonomi og kreditværdighed har ofte bedre forhandlingsposition.'
    },
    {
      question: 'Hvordan sammenligner jeg lån korrekt?',
      answer: 'Brug altid ÅOP som dit primære sammenligningsgrundlag. Sammenlign også løbetid, flexibilitet og vilkår, men ÅOP fortæller dig hvilken lån der er billigst.'
    }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercent = (value) => {
    return `${value.toFixed(2)}%`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Educational themed shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-12 inline-flex items-center gap-4 bg-blue-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-blue-400/20 hover:bg-blue-600/30 transition-all duration-500 group cursor-pointer">
              <Calculator className="h-6 w-6 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-white font-bold text-lg">Forstå renter og ÅOP - spar tusindvis</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Den skjulte
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                sandhed om lånepriser
              </span>
            </h1>
            
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-blue-100 mb-16 font-light">
              Fra <span className="font-black text-white">forvirrende reklamer</span> til 
              <span className="font-black text-green-400"> krystalklare omkostninger</span>.
              <br />
              <span className="text-lg text-blue-300 mt-4 block">
                Lær hvordan ÅOP afslører den sande pris på ethvert lån
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
                  <span>Test sammenligningsberegneren</span>
                  <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="group relative">
                <Link
                  href="#koncepter"
                  className="relative inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 border border-blue-400/20">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <span>Lær koncepterne først</span>
                </Link>
              </div>
            </div>

            {/* Eye-opening stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-red-400/20 hover:bg-red-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-red-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    73%
                  </div>
                  <div className="text-white font-semibold">Kigger kun på renten</div>
                  <div className="text-red-300 text-sm">Ikke på den reelle pris</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-orange-400/20 hover:bg-orange-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-orange-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    2-4%
                  </div>
                  <div className="text-white font-semibold">Højere ÅOP end rente</div>
                  <div className="text-orange-300 text-sm">På grund af gebyrer</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-green-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-green-400/20 hover:bg-green-600/30 hover:scale-105 transition-all duration-500">
                  <div className="text-4xl font-black text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    25K
                  </div>
                  <div className="text-white font-semibold">Kroner ekstra</div>
                  <div className="text-green-300 text-sm">Med dårligt lånvalg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-32 relative overflow-hidden" id="koncepter">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-100"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Lightbulb className="h-6 w-6" />
              <span className="font-black text-lg">Forstå nøglebegreberne</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Rente vs ÅOP
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                forskellen der tæller
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Lær begreberne der kan spare dig for tusinvis af kroner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concepts.map((concept, index) => {
              const IconComponent = concept.icon
              const delays = ['0ms', '150ms', '300ms', '450ms']
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-2xl border border-white/20 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: delays[index] }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${concept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${concept.color} shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-700`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="relative text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-500">
                      {concept.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300 mb-6">
                      {concept.description}
                    </p>
                    <div className="bg-slate-100 rounded-xl p-4 text-sm font-semibold text-slate-700">
                      {concept.example}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Provider Examples */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50 to-red-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Eye className="h-6 w-6" />
              <span className="font-black text-lg">Afsløring af markedstricks</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Hvordan banker
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                skjuler prisen
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Se igennem marketing-tricks med disse eksempler
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {providerExamples.map((provider, index) => {
              const delays = ['0ms', '200ms', '400ms']
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-2xl border ${provider.warning ? 'border-red-200' : 'border-green-200'} hover:shadow-2xl hover:scale-105 transition-all duration-500`}
                  style={{ animationDelay: delays[index] }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${provider.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {provider.warning && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                  )}
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">
                      {provider.name}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                        <span className="font-semibold text-slate-700">Nominel rente:</span>
                        <span className="text-2xl font-black text-blue-600">{provider.nominalRate}%</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
                        <span className="font-semibold text-slate-700">Oprettelse:</span>
                        <span className="text-lg font-bold text-orange-600">{formatCurrency(provider.setupFee)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                        <span className="font-semibold text-slate-700">Månedligt gebyr:</span>
                        <span className="text-lg font-bold text-purple-600">{formatCurrency(provider.monthlyFee)}</span>
                      </div>
                      
                      <div className={`flex justify-between items-center p-4 ${provider.warning ? 'bg-red-100' : 'bg-green-100'} rounded-xl border-2 ${provider.warning ? 'border-red-300' : 'border-green-300'}`}>
                        <span className="font-black text-slate-800">Rigtig ÅOP:</span>
                        <span className={`text-3xl font-black ${provider.warning ? 'text-red-700' : 'text-green-700'}`}>
                          {provider.aop}%
                        </span>
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${provider.warning ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                      <p className={`font-semibold ${provider.warning ? 'text-red-800' : 'text-green-800'} text-center`}>
                        {provider.tactic}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Target className="h-6 w-6" />
              <span className="font-bold text-lg">Brug altid ÅOP til sammenligning!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Traps */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50 to-orange-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <AlertTriangle className="h-6 w-6" />
              <span className="font-black text-lg">Undgå disse fælder</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                De 4 største
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                lånefælder
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Kend fælderne så du ikke går i dem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonTraps.map((trap, index) => {
              const IconComponent = trap.icon
              const colors = trap.severity === 'high' ? 
                'from-red-500 to-red-600' : 'from-orange-500 to-orange-600'
              const bgColors = trap.severity === 'high' ?
                'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'
              const textColors = trap.severity === 'high' ?
                'text-red-800' : 'text-orange-800'
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-2xl border border-red-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  <div className="relative mb-8 flex justify-center">
                    <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${colors} shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-700`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      {trap.severity === 'high' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-black">!</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-red-900 transition-colors duration-500">
                      {trap.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300 mb-6">
                      {trap.description}
                    </p>
                    <div className={`p-4 rounded-xl border ${bgColors}`}>
                      <p className={`font-semibold ${textColors} text-sm`}>
                        <span className="font-black">Eksempel:</span> {trap.example}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Loan Comparison Calculator */}
      <section className="py-32 relative overflow-hidden" id="calculator">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer group">
              <Calculator className="h-7 w-7 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-white text-xl">Sammenlignungsberegner</span>
              <BarChart3 className="h-7 w-7 text-green-400" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-8">
              Test forskellen på
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                rente vs ÅOP
              </span>
            </h2>
            <p className="text-2xl text-purple-100 font-light leading-relaxed">
              Se hvordan skjulte gebyrer påvirker den reelle pris
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-7xl mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient bg-[length:400%_400%]"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 to-indigo-900/90 backdrop-blur-2xl"></div>
            
            <div className="relative">
              {/* Shared Settings */}
              <div className="text-center mb-16">
                <h3 className="text-3xl font-black text-white mb-8">Indstil lånevilkår</h3>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Loan Amount */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-white/10 rounded-2xl p-6">
                      <label className="flex items-center gap-4 text-xl font-black text-white mb-4">
                        <DollarSign className="h-6 w-6 text-blue-400" />
                        Lånebeløb: {formatCurrency(loanAmount)}
                      </label>
                      <input
                        type="range"
                        min="25000"
                        max="500000"
                        step="5000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex justify-between text-sm text-blue-300 mt-2">
                        <span>25.000</span>
                        <span>500.000</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-white/10 rounded-2xl p-6">
                      <label className="flex items-center gap-4 text-xl font-black text-white mb-4">
                        <TrendingUp className="h-6 w-6 text-green-400" />
                        Løbetid: {loanTerm} år
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex justify-between text-sm text-green-300 mt-2">
                        <span>1 år</span>
                        <span>10 år</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loan Comparison */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Loan A - Appears Cheaper */}
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-white mb-2">Lån A: "Laveste rente"</h3>
                    <p className="text-orange-300">Ser billig ud... men er den det?</p>
                  </div>

                  <div className="space-y-6">
                    {/* Interest Rate A */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">📊</span>
                          Rente: {loanARate.toFixed(1)}%
                        </label>
                        <input
                          type="range"
                          min="2"
                          max="12"
                          step="0.1"
                          value={loanARate}
                          onChange={(e) => setLoanARate(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Setup Fee A */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">💸</span>
                          Oprettelse: {formatCurrency(loanASetupFee)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          step="250"
                          value={loanASetupFee}
                          onChange={(e) => setLoanASetupFee(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Monthly Fee A */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">📅</span>
                          Månedligt: {formatCurrency(loanAMonthlyFee)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="150"
                          step="5"
                          value={loanAMonthlyFee}
                          onChange={(e) => setLoanAMonthlyFee(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Results A */}
                    {loanAResults.aop && (
                      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 shadow-2xl text-white">
                        <div className="text-center">
                          <p className="text-lg font-bold mb-2">Rigtig ÅOP</p>
                          <p className="text-4xl font-black mb-4">{formatPercent(loanAResults.aop)}</p>
                          <p className="text-orange-100 mb-4">Månedlig ydelse: {formatCurrency(loanAResults.monthlyPayment)}</p>
                          <div className="bg-white/20 rounded-xl p-4">
                            <p className="text-sm">Samlet pris: {formatCurrency(loanAResults.totalCost)}</p>
                            <p className="text-sm">Heraf renter/gebyrer: {formatCurrency(loanAResults.totalInterest)}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Loan B - Actually Better */}
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-white mb-2">Lån B: "Transparent pris"</h3>
                    <p className="text-green-300">Højere rente, men ærlig markedsføring</p>
                  </div>

                  <div className="space-y-6">
                    {/* Interest Rate B */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">📊</span>
                          Rente: {loanBRate.toFixed(1)}%
                        </label>
                        <input
                          type="range"
                          min="2"
                          max="12"
                          step="0.1"
                          value={loanBRate}
                          onChange={(e) => setLoanBRate(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Setup Fee B */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">💸</span>
                          Oprettelse: {formatCurrency(loanBSetupFee)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          step="250"
                          value={loanBSetupFee}
                          onChange={(e) => setLoanBSetupFee(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Monthly Fee B */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative bg-white/10 rounded-2xl p-6">
                        <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                          <span className="text-2xl">📅</span>
                          Månedligt: {formatCurrency(loanBMonthlyFee)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="150"
                          step="5"
                          value={loanBMonthlyFee}
                          onChange={(e) => setLoanBMonthlyFee(Number(e.target.value))}
                          className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Results B */}
                    {loanBResults.aop && (
                      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 shadow-2xl text-white">
                        <div className="text-center">
                          <p className="text-lg font-bold mb-2">Rigtig ÅOP</p>
                          <p className="text-4xl font-black mb-4">{formatPercent(loanBResults.aop)}</p>
                          <p className="text-green-100 mb-4">Månedlig ydelse: {formatCurrency(loanBResults.monthlyPayment)}</p>
                          <div className="bg-white/20 rounded-xl p-4">
                            <p className="text-sm">Samlet pris: {formatCurrency(loanBResults.totalCost)}</p>
                            <p className="text-sm">Heraf renter/gebyrer: {formatCurrency(loanBResults.totalInterest)}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Comparison Result */}
              {loanAResults.totalCost && loanBResults.totalCost && (
                <div className="mt-16">
                  <div className={`relative overflow-hidden ${bestLoan === 'A' ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gradient-to-br from-green-500 to-emerald-500'} rounded-3xl p-12 shadow-2xl text-white text-center`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    
                    <div className="relative">
                      <h3 className="text-3xl font-black mb-6">
                        {bestLoan === 'A' ? '🎯 Lån A vinder!' : '🎯 Lån B vinder!'}
                      </h3>
                      <p className="text-2xl mb-8">
                        Du sparer {formatCurrency(Math.abs(loanAResults.totalCost - loanBResults.totalCost))} 
                        <br />med det {bestLoan === 'A' ? 'første' : 'andet'} lån
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className={`p-6 rounded-2xl ${bestLoan === 'A' ? 'bg-white/20 border-2 border-white' : 'bg-white/10'}`}>
                          <h4 className="text-xl font-bold mb-4">Lån A</h4>
                          <p className="text-lg">ÅOP: {formatPercent(loanAResults.aop)}</p>
                          <p className="text-lg">Samlet: {formatCurrency(loanAResults.totalCost)}</p>
                        </div>
                        
                        <div className={`p-6 rounded-2xl ${bestLoan === 'B' ? 'bg-white/20 border-2 border-white' : 'bg-white/10'}`}>
                          <h4 className="text-xl font-bold mb-4">Lån B</h4>
                          <p className="text-lg">ÅOP: {formatPercent(loanBResults.aop)}</p>
                          <p className="text-lg">Samlet: {formatCurrency(loanBResults.totalCost)}</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-xl font-bold text-white/90">
                          💡 Dette viser hvorfor du altid skal sammenligne ÅOP, ikke bare renten!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center mt-16">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <Link
                    href="/sammenlign"
                    className="relative w-full max-w-lg mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-8 px-12 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-6 text-2xl"
                  >
                    <span className="text-3xl">🎯</span>
                    <span>Sammenlign rigtige lån nu</span>
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-300" />
                  </Link>
                </div>
                <p className="text-center text-lg text-purple-200 mt-6 font-semibold">
                  🎓 100% gratis • Ingen forpligtelser • Se den rigtige ÅOP
                </p>
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
                Alt om
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                renter og ÅOP
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Få klarhed over de vigtigste begreber i låneverdenen
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
        
        <div className="relative px-6 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-white">Nu ved du hvordan du finder det billigste lån</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Klar til at sammenligne
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                rigtige lånepriser?
              </span>
            </h2>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-blue-100 mb-16">
              Brug din nye viden til at finde det lån med den laveste ÅOP på markedet. 
              <span className="block mt-4 font-bold text-white">
                100% transparent priser • Ingen skjulte gebyrer • Sammenlign ÅOP direkte
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link
                href="/sammenlign"
                className="group relative overflow-hidden inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-xl font-black text-blue-600 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 group-hover:translate-x-full transition-transform duration-700"></div>
                <Calculator className="h-7 w-7 relative z-10 text-blue-600" />
                <span className="relative z-10">Sammenlign ÅOP nu</span>
                <ArrowRight className="h-7 w-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/guide"
                className="group inline-flex items-center gap-4 text-xl font-bold text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span>Læs mere om forbrugslån</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-400/20">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Transparent priser</div>
                  <div className="text-sm text-white/60">Altid ærlig ÅOP</div>
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
                  <div className="font-bold text-white">4.8/5 stjerner</div>
                  <div className="text-sm text-white/60">kundetilfredshed</div>
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
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <Calculator className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Lån.dk
                </span>
              </div>
              <p className="text-lg leading-8 text-slate-400 max-w-md">
                Dit uddannelsescentrum for <span className="font-semibold text-white">smart lånesammenligning</span>. 
                Vi lærer dig at se gennem marketingtricks og finde de reelle priser.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Forbrugslån guides</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <Link href="/forbrugslaan/renter-og-aop" className="text-indigo-400 font-semibold">
                      Renter og ÅOP
                    </Link>
                  </li>
                  <li>
                    <Link href="/forbrugslaan" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Forbrugslån guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Værktøjer</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <Link href="#calculator" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold">
                      ÅOP Beregner
                    </Link>
                  </li>
                  <li>
                    <Link href="/sammenlign" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Sammenlign lån
                    </Link>
                  </li>
                  <li>
                    <Link href="/guide" className="text-slate-400 hover:text-white transition-colors duration-300">
                      Låneguides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500 text-center">
              &copy; 2025 Sammenlign Lån & Find Det Bedste Tilbud – Lån.dk. Uddannelse i smart lånesammenligning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}