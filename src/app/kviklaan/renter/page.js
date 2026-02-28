'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
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
  Percent,
  BarChart3,
  DollarSign,
  Calendar
} from 'lucide-react'

export default function KvikloanRenterPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Interest rate comparison data
  const interestComparison = [
    {
      provider: 'Danske Bank',
      rate: '15-29%',
      aop: '18-35%',
      maxAmount: '75.000 kr',
      approval: 'Samme dag',
      color: 'from-blue-500 to-blue-600'
    },
    {
      provider: 'Nordea',
      rate: '12-25%',
      aop: '15-32%',
      maxAmount: '50.000 kr',
      approval: '2-4 timer',
      color: 'from-purple-500 to-purple-600'
    },
    {
      provider: 'Jyske Bank',
      rate: '18-32%',
      aop: '22-38%',
      maxAmount: '100.000 kr',
      approval: 'Samme dag',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  // FAQ data specific to kviklån interest rates
  const faqs = [
    {
      question: 'Hvorfor er renten så høj på kviklån?',
      answer: 'Kviklån har højere renter fordi de udbydes uden sikkerhed og med meget hurtig udbetaling. Bankerne tager større risiko, da de ikke har tid til dyb kreditvurdering, hvilket afspejles i renteniveauet på typisk 15-35% årligt.'
    },
    {
      question: 'Hvad er forskellen på rente og ÅOP for kviklån?',
      answer: 'Renten er den årlige omkostning for at låne pengene, mens ÅOP (Årlige Omkostninger i Procent) inkluderer alle omkostninger - renter, gebyrer og andre omkostninger. ÅOP giver det mest retvisende billede af lånets reelle pris.'
    },
    {
      question: 'Kan jeg få lavere rente på mit kviklån?',
      answer: 'Renten afhænger af din kreditværdighed, indkomst og økonomiske situation. Kunder med god økonomi og høj kreditværdighed kan ofte få lavere renter. Det bedste er at sammenligne tilbud fra flere udbydere.'
    },
    {
      question: 'Hvordan beregnes renten på kviklån?',
      answer: 'Renten beregnes typisk som en årlig procentsats, men da kviklån ofte tilbagebetales hurtigt, betaler du kun renter for den periode, du har lånet. Nogle udbydere bruger månedlige renter eller faste gebyrer.'
    },
    {
      question: 'Er der forskel på renter mellem forskellige udbydere?',
      answer: 'Ja, der kan være betydelig forskel på renter mellem udbydere. Derfor er det vigtigt at sammenligne både renter og ÅOP. Nogle banker tilbyder konkurrencedygtige renter til eksisterende kunder.'
    }
  ]

  // Factors affecting interest rates
  const rateFactors = [
    { text: 'Din kreditværdighed', icon: FileText },
    { text: 'Månedlig indkomst', icon: DollarSign },
    { text: 'Lånets størrelse', icon: Coins },
    { text: 'Tilbagebetalingstid', icon: Calendar },
    { text: 'Eksisterende gæld', icon: CreditCard },
    { text: 'Ansættelsesforhold', icon: Shield }
  ]

  // High rate warnings
  const warnings = [
    { text: 'Høje omkostninger ved langvarig gæld', icon: AlertTriangle },
    { text: 'Risiko for gældsspiral', icon: TrendingUp },
    { text: 'Påvirkning af kreditvurdering', icon: BarChart3 },
    { text: 'Begrænsede tilbagebetalingsmuligheder', icon: Clock }
  ]

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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-amber-900"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-red-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <div className="mb-12 inline-flex items-center gap-4 bg-orange-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-orange-400/20">
              <Percent className="h-6 w-6 text-orange-300" />
              <span className="text-white font-bold text-lg">Kviklån Renter - Alt du skal vide</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                Kviklån renter 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
                sammenlignet
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-orange-100 mb-16 font-light">
              Forstå <span className="font-black text-white">kviklån renter</span> og find de
              <span className="font-black text-orange-300"> bedste vilkår</span>
              <br />
              <span className="text-lg text-orange-300 mt-4 block">
                Sammenlign renter fra 12% og få overblik over alle omkostninger
              </span>
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Calculator className="h-7 w-7" />
                <span>Sammenlign kviklån</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="#renteberegner"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-orange-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-orange-600/30 border border-orange-400/20">
                  <Percent className="h-8 w-8" />
                </div>
                <span>Beregn renter</span>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-orange-400/20">
                <div className="text-4xl font-black text-orange-300 mb-2">12-35%</div>
                <div className="text-white font-semibold">Årlig rente</div>
                <div className="text-orange-300 text-sm">Afhængig af udbyder</div>
              </div>
              
              <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-red-400/20">
                <div className="text-4xl font-black text-red-300 mb-2">15-40%</div>
                <div className="text-white font-semibold">Typisk ÅOP</div>
                <div className="text-red-300 text-sm">Inkl. alle omkostninger</div>
              </div>
              
              <div className="bg-amber-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-amber-400/20">
                <div className="text-4xl font-black text-amber-300 mb-2">2-24</div>
                <div className="text-white font-semibold">Timer godkendelse</div>
                <div className="text-amber-300 text-sm">Hurtig proces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding kviklån interest rates */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Forstå kviklån renter
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Kviklån renter er højere end traditionelle lån - her er hvorfor og hvad du skal være opmærksom på
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Kviklån har typisk <strong className="text-orange-600">højere renter end almindelige lån</strong> 
                  på grund af den hurtige godkendelse og manglende sikkerhedsstillelse. Renterne varierer 
                  normalt mellem 12-35% årligt.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Det vigtige er at forstå <strong className="text-red-600">ÅOP (Årlige Omkostninger i Procent)</strong>, 
                  som inkluderer alle omkostninger og giver det mest retvisende billede af lånets pris.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-200">
                <h3 className="font-black text-2xl text-orange-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-orange-600" />
                  Hvorfor højere renter?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Hurtig proces:</strong> Minimal tid til kreditvurdering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Ingen sikkerhed:</strong> Højere risiko for udbyder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Øjeblikkelig udbetaling:</strong> Service har en pris</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Højere misligholdelse:</strong> Risiko afspejles i prisen</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Percent className="h-16 w-16 text-white mb-8" />
                  <h3 className="text-3xl font-black mb-6">Rentefaktorer</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      <span>Din kreditvurdering</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5" />
                      <span>Indkomst og økonomi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" />
                      <span>Lånets varighed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Coins className="h-5 w-5" />
                      <span>Lånebeløb</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>Kundeforhold</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate factors vs Warnings */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Hvad påvirker din rente?
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Forstå faktorer og vær opmærksom på risici
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rate factors */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-blue-900">Rentefaktorer</h3>
              </div>
              <div className="space-y-4">
                {rateFactors.map((factor, index) => {
                  const IconComponent = factor.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{factor.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Warnings */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-red-900">Vær opmærksom på</h3>
              </div>
              <div className="space-y-4">
                {warnings.map((warning, index) => {
                  const IconComponent = warning.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-red-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{warning.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rate Comparison */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Sammenlign renter
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Se aktuelle renter fra forskellige udbydere af kviklån
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {interestComparison.map((provider, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className={`bg-gradient-to-r ${provider.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <Percent className="h-8 w-8" />
                    <h3 className="text-2xl font-black">{provider.provider}</h3>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Rente:</span>
                    <span className="font-black text-slate-900">{provider.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">ÅOP:</span>
                    <span className="font-black text-red-600">{provider.aop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Max beløb:</span>
                    <span className="font-black text-slate-900">{provider.maxAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Godkendelse:</span>
                    <span className="font-black text-slate-900">{provider.approval}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-amber-900 mb-2">Vigtigt at huske:</p>
                  <p className="text-amber-800">
                    Renterne varierer baseret på din individuelle økonomiske situation. 
                    De viste renter er vejledende, og din faktiske rente kan afvige herfra.
                  </p>
                </div>
              </div>
            </div>
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
                Alt om kviklån renter
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-amber-700"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Find de bedste
              <br />
              <span className="bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                kviklån renter
              </span>
            </h2>
            
            <p className="text-2xl text-orange-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Sammenlign renter og vilkår fra Danmarks førende udbydere og find det bedste kviklån til dine behov
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-2xl font-black text-orange-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Sparkles className="h-7 w-7" />
                <span>Sammenlign renter nu</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="/kviklaan"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-200 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <Zap className="h-7 w-7" />
                </div>
                <span>Læs om kviklån</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80 mt-16">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">Sikker sammenligning</span>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">Transparent renteberegning</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-orange-300" />
                <span className="font-semibold">Gratis rådgivning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}