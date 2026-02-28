'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Coins,
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
  Zap,
  Timer,
  Award,
  BookOpen,
  Phone,
  Heart,
  Star,
  Banknote,
  Smartphone,
  DollarSign,
  Wrench,
  Home,
  Car,
  ShoppingBag,
  Activity
} from 'lucide-react'

export default function SmåLånPage() {
  const [loanAmount, setLoanAmount] = useState(8000)
  const [interestRate] = useState(15)
  const [termMonths, setTermMonths] = useState(6)

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

  const useCases = [
    {
      icon: Wrench,
      title: 'Bilreparation',
      description: 'Uventede reparationer på bilen',
      amount: '3.000-8.000 kr',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Home,
      title: 'Husholdningsudgifter',
      description: 'Defekt vaskemaskine eller køleskab',
      amount: '2.000-6.000 kr',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Tandlæge/læge',
      description: 'Medicinske udgifter der ikke kan vente',
      amount: '1.500-10.000 kr',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: ShoppingBag,
      title: 'Uforudsete udgifter',
      description: 'Regninger eller andre akutte behov',
      amount: '1.000-15.000 kr',
      gradient: 'from-purple-500 to-violet-500'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Udfyld ansøgning',
      description: 'Hurtig online ansøgning på 2-3 minutter',
      icon: Smartphone,
      time: '2 min'
    },
    {
      step: 2,
      title: 'Øjeblikkelig behandling',
      description: 'Automatisk vurdering af din ansøgning',
      icon: Activity,
      time: '5 min'
    },
    {
      step: 3,
      title: 'Digital godkendelse',
      description: 'Svar på din ansøgning med det samme',
      icon: CheckCircle,
      time: '1 min'
    },
    {
      step: 4,
      title: 'Straks udbetaling',
      description: 'Pengene overføres til din konto',
      icon: Zap,
      time: 'Samme dag'
    }
  ]

  const advantages = [
    {
      icon: Clock,
      title: 'Straks udbetaling',
      description: 'Pengene kan være på din konto samme dag, ofte inden for få timer'
    },
    {
      icon: Shield,
      title: 'Ingen sikkerhed',
      description: 'Du behøver ikke stille ejendele som garanti, hvilket gør ansøgningsprocessen hurtigere'
    },
    {
      icon: Target,
      title: 'Fleksible beløb',
      description: 'Du kan låne små beløb, der passer til dine behov – typisk mellem 1.000 og 15.000 kr'
    },
    {
      icon: Timer,
      title: 'Kort løbetid',
      description: 'Lånet kan hurtigt tilbagebetales, så du undgår længerevarende økonomiske forpligtelser'
    },
    {
      icon: Smartphone,
      title: 'Online ansøgning',
      description: 'Ansøgningen sker online og kræver typisk kun få minutters arbejde'
    }
  ]

  const considerations = [
    'Har du virkelig brug for pengene nu, eller kan det vente?',
    'Kan du betale lånet tilbage til tiden uden at belaste din økonomi?',
    'Er der billigere alternativer, som fx at låne af familie eller venner?',
    'Forstår du alle omkostningerne ved lånet, inklusive renter og gebyrer?'
  ]

  const loanTypes = [
    { name: 'Kviklån', range: '1.000-50.000 kr', time: 'Samme dag' },
    { name: 'Minilån', range: '1.000-5.000 kr', time: 'Få timer' },
    { name: 'Mikrolån', range: '500-10.000 kr', time: 'Øjeblikkeligt' }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Coins className="h-6 w-6" />
              <span className="font-black text-lg">Små lån med straks udbetaling</span>
              <Sparkles className="h-6 w-6 animate-spin" style={{animationDuration: '3s'}} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
                Har du brug for penge
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                hurtigt?
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-slate-600 mb-12">
              Små lån med straks udbetaling er en nem og hurtig løsning, når du har akut brug for økonomisk hjælp. 
              <span className="block mt-4 font-bold text-slate-800">
                Lån mellem 1.000-15.000 kr og få pengene på kontoen samme dag.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-12 py-6 text-xl font-black text-white shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Find små lån nu</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              
              <Link
                href="#calculator"
                className="inline-flex items-center gap-4 text-xl font-bold text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              >
                <Calculator className="h-6 w-6" />
                <span>Beregn dit lån</span>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Banknote className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">1.000-15.000 kr</div>
                <div className="text-slate-600">Fleksible beløb</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Få timer</div>
                <div className="text-slate-600">Hurtig udbetaling</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Ingen sikkerhed</div>
                <div className="text-slate-600">Simpel proces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Hvad kan små lån bruges til?
            </h2>
            <p className="text-xl text-slate-600">
              Perfekt til uforudsete udgifter der ikke kan vente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              
              return (
                <div key={index} className="group relative">
                  {/* Floating background effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${useCase.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-500 h-full">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                        <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Pulse effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${useCase.gradient} animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {useCase.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                        <DollarSign className="h-4 w-4 text-emerald-600" />
                        <span className="font-bold text-slate-700 text-sm">{useCase.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Sådan fungerer det
            </h2>
            <p className="text-xl text-slate-600">
              Processen er designet til at være hurtig og enkel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
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
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-200 z-10"></div>
                  )}
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden h-full group">
                    {/* Background decoration */}
                    <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Step number and time */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {step.step}
                      </div>
                      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-emerald-200">
                        <span className="text-sm font-bold text-emerald-600">{step.time}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-900 transition-colors duration-300">
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

      {/* Loan Types Comparison */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <Target className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Typer af små lån</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Forskellige små lån
            </h2>
            <p className="text-xl text-emerald-100">
              Små lån dækker over flere lånetyper med forskellige fordele
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Coins className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4">
                    {type.name}
                  </h3>
                  <p className="text-emerald-200 text-lg mb-2">
                    {type.range}
                  </p>
                  <p className="text-emerald-300 font-semibold">
                    Udbetaling: {type.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Fordele ved små lån
            </h2>
            <p className="text-xl text-slate-600">
              Små lån har flere fordele, der gør dem til en attraktiv løsning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              const gradients = [
                'from-blue-500 to-indigo-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-cyan-500 to-teal-500'
              ]
              
              return (
                <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                      <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20" id="calculator">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-12 lg:p-16">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="mb-8 inline-flex items-center gap-4 bg-emerald-600 text-white px-8 py-4 rounded-full shadow-2xl">
                <Calculator className="h-6 w-6" />
                <span className="font-black text-lg">Lånekalkulator</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Beregn dit små lån
              </h2>
              <p className="text-xl text-slate-600">
                Se hvad dit lån vil koste med forskellige beløb og løbetider
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input */}
              <div className="space-y-8">
                <div>
                  <label className="flex items-center gap-4 text-lg font-bold text-slate-900 mb-4">
                    <Banknote className="h-6 w-6 text-emerald-600" />
                    Lånebeløb: {formatCurrency(loanAmount)}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-4 bg-emerald-200 rounded-full appearance-none cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #059669 ${(loanAmount / 15000) * 100}%, #a7f3d0 ${(loanAmount / 15000) * 100}%, #a7f3d0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-emerald-700 mt-2 font-semibold">
                    <span>1.000 kr</span>
                    <span>15.000 kr</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-4 text-lg font-bold text-slate-900 mb-4">
                    <Timer className="h-6 w-6 text-emerald-600" />
                    Løbetid: {termMonths} måneder
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full h-4 bg-emerald-200 rounded-full appearance-none cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #059669 ${(termMonths / 12) * 100}%, #a7f3d0 ${(termMonths / 12) * 100}%, #a7f3d0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-emerald-700 mt-2 font-semibold">
                    <span>1 måned</span>
                    <span>12 måneder</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
                  <p className="text-lg font-bold text-slate-900 mb-4">Lånedetaljer</p>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex justify-between">
                      <span>Rente:</span>
                      <span className="font-bold">{interestRate}% årligt</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Løbetid:</span>
                      <span className="font-bold">{termMonths} måneder</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Behandling:</span>
                      <span className="font-bold text-emerald-600">Samme dag</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-emerald-100 text-lg font-bold mb-2 flex items-center justify-center gap-2">
                      <Banknote className="h-5 w-5" />
                      Månedlig ydelse
                    </p>
                    <p className="text-4xl lg:text-5xl font-black mb-4">
                      {formatCurrency(loan.monthlyPayment)}
                    </p>
                    <p className="text-emerald-200">pr. måned i {termMonths} måneder</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:scale-105 transition-all duration-300">
                    <p className="text-slate-600 mb-2">Samlet tilbagebetaling</p>
                    <p className="text-2xl font-black text-slate-900">{formatCurrency(loan.totalCost)}</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-2xl p-6 shadow-xl border border-orange-100 hover:scale-105 transition-all duration-300">
                    <p className="text-orange-700 mb-2">Samlede omkostninger</p>
                    <p className="text-2xl font-black text-orange-800">{formatCurrency(loan.totalInterest)}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/sammenlign"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-6 px-8 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4"
                  >
                    <Sparkles className="h-6 w-6" />
                    <span>Find bedre tilbud nu</span>
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-black text-lg">Overvej dette først</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Lån med omtanke
              </h2>
              <p className="text-xl text-slate-600">
                Små lån er en nem løsning, men skal bruges med omtanke. Stil dig selv disse spørgsmål
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {considerations.map((question, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-orange-100">
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                        {question}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  Lån ansvarligt
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ved at tænke over disse ting på forhånd kan du undgå at ende med et lån, der bliver dyrere eller mere belastende end forventet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <Clock className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Få pengene samme dag</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Klar til dit små lån?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Sammenlign tilbud fra Danmarks bedste udbydere og få det hurtigste og billigste små lån. 
              Ansøg online og få pengene på kontoen samme dag.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 rounded-full bg-white px-12 py-6 text-xl font-black text-emerald-600 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-6 w-6" />
                <span>Sammenlign små lån nu</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              
              <a
                href="tel:+4570123456"
                className="inline-flex items-center gap-4 text-xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Phone className="h-6 w-6" />
                <span>Ring og få rådgivning</span>
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