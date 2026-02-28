'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { 
  Zap,
  Clock,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Calculator,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  DollarSign,
  Timer,
  Award,
  BookOpen,
  Phone,
  XCircle,
  Star,
  Banknote,
  Smartphone,
  Activity
} from 'lucide-react'

export default function KviklånStraksUdbetalingPage() {
  const [loanAmount, setLoanAmount] = useState(10000)
  const [interestRate] = useState(20)
  const [termMonths] = useState(12)

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                          (Math.pow(1 + monthlyRate, termMonths) - 1)
    const totalCost = monthlyPayment * termMonths
    const totalInterest = totalCost - loanAmount
    
    return {
      monthlyPayment,
      totalCost,
      totalInterest
    }
  }

  const loan = calculateLoan()

  const howItWorks = [
    {
      step: 1,
      title: 'Udfyld ansøgningen online',
      description: 'Du angiver dine personlige oplysninger, lånebeløb og løbetid',
      icon: Smartphone,
      time: '2 min'
    },
    {
      step: 2,
      title: 'Digital kreditvurdering',
      description: 'Låneudbyderen foretager en hurtig vurdering af din økonomi via automatiserede systemer',
      icon: Activity,
      time: '5 min'
    },
    {
      step: 3,
      title: 'Underskriv med NemID/MitID',
      description: 'Når lånet er godkendt, underskriver du digitalt',
      icon: Shield,
      time: '1 min'
    },
    {
      step: 4,
      title: 'Straks udbetaling',
      description: 'Pengene overføres direkte til din konto, ofte inden for samme dag',
      icon: Zap,
      time: 'Samme dag'
    }
  ]

  const advantages = [
    {
      icon: Zap,
      title: 'Hurtig adgang til penge',
      description: 'Perfekt til nødsituationer, hvor du har brug for kontanter med det samme',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Enkel proces',
      description: 'Ansøgningen tager få minutter og kræver minimal dokumentation',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Ingen sikkerhed',
      description: 'Du behøver ikke stille pant i fx bolig eller bil',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Fleksible lånebeløb',
      description: 'Typisk fra 1.000 kr. til 50.000 kr.',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const disadvantages = [
    {
      icon: TrendingUp,
      title: 'Høje omkostninger',
      description: 'Renter og gebyrer kan være væsentligt højere end ved traditionelle lån'
    },
    {
      icon: AlertTriangle,
      title: 'Risiko for overgældsætning',
      description: 'Hvis du ikke kan betale lånet tilbage, kan det føre til økonomiske problemer'
    },
    {
      icon: Timer,
      title: 'Begrænsninger ved beløb og løbetid',
      description: 'Løbetiden er ofte kort, og beløbene er begrænsede'
    },
    {
      icon: Clock,
      title: 'Ikke altid tilgængelig i weekender',
      description: 'Hvis du ansøger uden for normale åbningstider, kan udbetalingen blive forsinket'
    }
  ]

  const eligibilityRequirements = [
    { requirement: 'Alder', detail: 'Du skal være mindst 18 år (nogle steder kræves 21 eller 25 år)' },
    { requirement: 'Folkeregisteradresse', detail: 'Du skal være bosiddende i Danmark' },
    { requirement: 'Indkomst', detail: 'Nogle udbydere kræver, at du kan dokumentere en fast indkomst' }
  ]

  const whenToUse = [
    'Akutte behov: Fx bilreparationer, medicinske udgifter eller andre uforudsete udgifter',
    'Når tiden er afgørende: Hvis du ikke har tid til at vente på et traditionelt lån',
    'Mindre beløb: Når du kun har brug for et begrænset lånebeløb'
  ]

  const whenToAvoid = [
    'Hvis du har mulighed for at vælge en billigere lånetype',
    'Når du kan vente på et lån med lavere renter',
    'Til langsigtede investeringer eller større køb'
  ]

  const tips = [
    'Sammenlign udbydere: Brug låneportaler til at finde de bedste renter og vilkår',
    'Læs det med småt: Sørg for at forstå alle omkostninger, inklusive renter, gebyrer og ÅOP',
    'Lav et realistisk budget: Sørg for, at du kan betale lånet tilbage uden at belaste din økonomi',
    'Lån kun det nødvendige: Undgå at låne mere, end du absolut har brug for'
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Zap className="h-6 w-6" />
              <span className="font-black text-lg">Kviklån med straks udbetaling</span>
              <Sparkles className="h-6 w-6 animate-spin" style={{animationDuration: '3s'}} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Penge på kontoen
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                samme dag
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-slate-600 mb-12">
              Et kviklån med straks udbetaling giver dig adgang til penge på din konto inden for meget kort tid – ofte samme dag, og i nogle tilfælde inden for få timer.
              <span className="block mt-4 font-bold text-slate-800">
                Perfekt til akutte situationer hvor der ikke er tid til en lang ansøgningsproces.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-12 py-6 text-xl font-black text-white shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Se tilbud nu</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              
              <Link
                href="#calculator"
                className="inline-flex items-center gap-4 text-xl font-bold text-slate-700 hover:text-orange-600 transition-colors duration-300"
              >
                <Calculator className="h-6 w-6" />
                <span>Beregn omkostninger</span>
              </Link>
            </div>

            {/* Speed indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Timer className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">2 minutter</div>
                <div className="text-slate-600">Ansøgning</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">5 minutter</div>
                <div className="text-slate-600">Behandling</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Samme dag</div>
                <div className="text-slate-600">Udbetaling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Sådan fungerer det
            </h2>
            <p className="text-xl text-slate-600">
              Fire simple trin fra ansøgning til udbetaling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const IconComponent = step.icon
              const gradients = [
                'from-blue-500 to-indigo-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ]
              
              return (
                <div key={index} className="relative group">
                  {/* Connection line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-10"></div>
                  )}
                  
                  <div className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden h-full">
                    {/* Background decoration */}
                    <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {step.step}
                      </div>
                      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-200">
                        <span className="text-sm font-bold text-slate-600">{step.time}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            
            <div className="relative grid lg:grid-cols-3 gap-12 text-center">
              <div>
                <div className="h-20 w-20 rounded-full bg-red-500/50 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4">Traditionelle banker</h3>
                <p className="text-3xl font-black text-yellow-300 mb-2">1-5 dage</p>
                <p className="text-orange-100">Omfattende dokumentation</p>
              </div>
              
              <div>
                <div className="h-20 w-20 rounded-full bg-white/20 border-4 border-white flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-black mb-4">Kviklån straks udbetaling</h3>
                <p className="text-3xl font-black text-green-300 mb-2">Samme dag</p>
                <p className="text-orange-100">Minimal dokumentation</p>
              </div>
              
              <div>
                <div className="h-20 w-20 rounded-full bg-orange-500/50 flex items-center justify-center mx-auto mb-6">
                  <Timer className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4">Online banker</h3>
                <p className="text-3xl font-black text-yellow-300 mb-2">2-3 dage</p>
                <p className="text-orange-100">Digital proces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages vs Disadvantages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Fordele og ulemper
            </h2>
            <p className="text-xl text-slate-600">
              Væg fordele og ulemper mod hinanden før du beslutter dig
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Advantages */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl">
                <CheckCircle className="h-6 w-6" />
                <span className="font-black text-lg">Fordele</span>
              </div>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon
                  
                  return (
                    <div key={index} className="bg-green-50 rounded-2xl p-6 hover:bg-green-100 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-black text-slate-900 mb-2">
                            {advantage.title}
                          </h3>
                          <p className="text-slate-600">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Disadvantages */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-2xl">
                <XCircle className="h-6 w-6" />
                <span className="font-black text-lg">Ulemper</span>
              </div>
              
              <div className="space-y-6">
                {disadvantages.map((disadvantage, index) => {
                  const IconComponent = disadvantage.icon
                  
                  return (
                    <div key={index} className="bg-red-50 rounded-2xl p-6 hover:bg-red-100 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-black text-slate-900 mb-2">
                            {disadvantage.title}
                          </h3>
                          <p className="text-slate-600">
                            {disadvantage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Hvem kan få kviklån med straks udbetaling?
            </h2>
            <p className="text-xl text-slate-600">
              For at blive godkendt skal du typisk opfylde disse krav
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eligibilityRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">
                      {req.requirement}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {req.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" id="calculator">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20">
              <Calculator className="h-6 w-6 text-white" />
              <span className="font-black text-white text-lg">Omkostningseksempel</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Hvad koster et kviklån?
            </h2>
            <p className="text-xl text-blue-100">
              Se et konkret eksempel på omkostningerne
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Låneeksempel</h3>
                
                <div className="space-y-8">
                  <div>
                    <label className="flex items-center gap-4 text-lg font-bold text-white mb-4">
                      <Banknote className="h-6 w-6" />
                      Lånebeløb: {formatCurrency(loanAmount)}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-blue-300 mt-2">
                      <span>1.000 kr</span>
                      <span>50.000 kr</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6">
                    <div className="space-y-4 text-white">
                      <div className="flex justify-between">
                        <span>Rente:</span>
                        <span className="font-bold">{interestRate}% årligt</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Løbetid:</span>
                        <span className="font-bold">{termMonths} måneder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Resultat</h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                    <p className="text-lg font-bold mb-2">Månedlig ydelse</p>
                    <p className="text-3xl font-black">{formatCurrency(loan.monthlyPayment)}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 text-white">
                    <p className="text-lg font-bold mb-2">Samlet tilbagebetaling</p>
                    <p className="text-2xl font-black">{formatCurrency(loan.totalCost)}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                    <p className="text-lg font-bold mb-2">Samlede omkostninger</p>
                    <p className="text-2xl font-black">{formatCurrency(loan.totalInterest)}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/sammenlign"
                    className="w-full bg-gradient-to-r from-white to-blue-100 text-slate-900 py-4 px-8 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4"
                  >
                    <span>Sammenlign bedre tilbud</span>
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use/Avoid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* When to Use */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl">
                <CheckCircle className="h-6 w-6" />
                <span className="font-black text-lg">Hvornår det giver mening</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                Perfekt til disse situationer
              </h2>
              
              <div className="space-y-6">
                {whenToUse.map((situation, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300">
                    <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {situation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* When to Avoid */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-2xl">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-black text-lg">Hvornår du bør undgå det</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
                Overvej alternativer hvis
              </h2>
              
              <div className="space-y-6">
                {whenToAvoid.map((situation, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors duration-300">
                    <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {situation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl">
              <BookOpen className="h-6 w-6" />
              <span className="font-black text-lg">Eksperttips</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Sådan undgår du faldgruber
            </h2>
            <p className="text-xl text-slate-600">
              Følg disse råd for at minimere risikoen ved kviklån
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-blue-100">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <Zap className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Få penge samme dag</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Klar til straks udbetaling?
            </h2>
            <p className="text-xl text-orange-100 mb-12 leading-relaxed">
              Sammenlign tilbud fra Danmarks bedste udbydere af kviklån med straks udbetaling. 
              Find det hurtigste og billigste lån til dine behov.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 rounded-full bg-white px-12 py-6 text-xl font-black text-orange-600 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-6 w-6" />
                <span>Sammenlign kviklån nu</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              
              <a
                href="tel:+4531380217"
                className="inline-flex items-center gap-4 text-xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Phone className="h-6 w-6" />
                <span>Ring og få vejledning</span>
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>100% sikker</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Gratis sammenligning</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>4.8/5 stjerner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}