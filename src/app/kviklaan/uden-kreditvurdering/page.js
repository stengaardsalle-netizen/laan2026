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
  UserCheck,
  Eye,
  EyeOff,
  Search,
  ThumbsUp,
  ThumbsDown,
  DollarSign,
  Calendar,
  Banknote
} from 'lucide-react'

export default function KvikloanUdenKreditvurderingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Provider comparison without credit checks
  const providersComparison = [
    {
      provider: 'SMS Lån',
      amount: '500-15.000 kr',
      approval: '15 minutter',
      requirements: 'Minimal',
      rate: '25-45%',
      color: 'from-orange-500 to-orange-600'
    },
    {
      provider: 'Hurtige Penge',
      amount: '1.000-25.000 kr',
      approval: '30 minutter',
      requirements: 'Grundlæggende',
      rate: '20-40%',
      color: 'from-red-500 to-red-600'
    },
    {
      provider: 'Express Lån',
      amount: '500-20.000 kr',
      approval: '1 time',
      requirements: 'Minimal',
      rate: '30-50%',
      color: 'from-amber-500 to-amber-600'
    }
  ]

  // FAQ data specific to loans without credit checks
  const faqs = [
    {
      question: 'Kan jeg virkelig få lån uden kreditvurdering?',
      answer: 'Ja, nogle udbydere tilbyder kviklån med minimal kreditvurdering. Men helt uden er sjældent - de fleste laver en grundlæggende kontrol af din identitet og indkomst. "Uden kreditvurdering" betyder ofte bare en meget forenklet proces.'
    },
    {
      question: 'Hvad koster det at låne uden kreditvurdering?',
      answer: 'Lån uden kreditvurdering er typisk dyrere fordi udbyderen tager større risiko. Renterne kan være 25-50% eller mere, og der kan være høje gebyrer. ÅOP kan nemt overstige 40-60% årligt.'
    },
    {
      question: 'Hvilke krav er der til lån uden kreditvurdering?',
      answer: 'Selv uden dyb kreditvurdering skal du typisk være over 18 år, have dansk CPR-nummer, fast adresse og dokumenteret indkomst. Nogle udbydere kræver også en dansk bankkonto.'
    },
    {
      question: 'Er det sikkert at låne uden kreditvurdering?',
      answer: 'Der er højere risiko både for dig og udbyderen. Du risikerer høje omkostninger og kan komme i økonomiske problemer. Vær altid sikker på at du kan betale lånet tilbage før du låner.'
    },
    {
      question: 'Hvad hvis jeg ikke kan betale lånet tilbage?',
      answer: 'Selv uden kreditvurdering kan manglende betaling få alvorlige konsekvenser - inkasso og rykkergebyrer. Det kan påvirke din fremtidige mulighed for at få lån markant.'
    }
  ]

  // Benefits and drawbacks
  const benefits = [
    { text: 'Hurtig godkendelse', icon: Clock },
    { text: 'Minimal dokumentation', icon: FileText },
    { text: 'Ingen lang ventetid', icon: Zap },
    { text: 'Simpel ansøgningsproces', icon: Target },
    { text: 'Udbetaling samme dag', icon: Banknote }
  ]

  const drawbacks = [
    { text: 'Meget høje renter', icon: TrendingUp },
    { text: 'Begrænsede lånebeløb', icon: Coins },
    { text: 'Høje gebyrer og omkostninger', icon: CreditCard },
    { text: 'Risiko for gældsspiral', icon: AlertTriangle },
    { text: 'Kortere tilbagebetalingstid', icon: Calendar },
    { text: 'Færre forbrugerbeskyttelser', icon: Shield }
  ]

  // What they actually check
  const actualChecks = [
    { text: 'Identitetsverifikation', icon: Search, required: true },
    { text: 'CPR-nummer kontrol', icon: UserCheck, required: true },
    { text: 'Grundlæggende indkomst', icon: DollarSign, required: true },
    { text: 'Bankkonto information', icon: Banknote, required: true },
    { text: 'Alder og bopæl', icon: Home, required: true },
    { text: 'Eksisterende gæld (begrænset)', icon: FileText, required: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-amber-900"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <div className="mb-12 inline-flex items-center gap-4 bg-red-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-red-400/20">
              <EyeOff className="h-6 w-6 text-red-300" />
              <span className="text-white font-bold text-lg">Kviklån uden kreditvurdering</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent">
                Lån uden 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                kreditvurdering
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-red-100 mb-16 font-light">
              Få <span className="font-black text-white">hurtige lån</span> med
              <span className="font-black text-red-300"> minimal kontrol</span>
              <br />
              <span className="text-lg text-red-300 mt-4 block">
                Men vær opmærksom på højere omkostninger og risici
              </span>
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Search className="h-7 w-7" />
                <span>Find låneudbydere</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="#risici"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-red-300 transition-colors duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-red-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-red-600/30 border border-red-400/20">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <span>Læs om risici</span>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-red-400/20">
                <div className="text-4xl font-black text-red-300 mb-2">15-60</div>
                <div className="text-white font-semibold">Min godkendelse</div>
                <div className="text-red-300 text-sm">Meget hurtig proces</div>
              </div>
              
              <div className="bg-orange-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-orange-400/20">
                <div className="text-4xl font-black text-orange-300 mb-2">25-50%</div>
                <div className="text-white font-semibold">Højere renter</div>
                <div className="text-orange-300 text-sm">Pga. øget risiko</div>
              </div>
              
              <div className="bg-amber-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-amber-400/20">
                <div className="text-4xl font-black text-amber-300 mb-2">500-25K</div>
                <div className="text-white font-semibold">Lånebeløb kr.</div>
                <div className="text-amber-300 text-sm">Begrænsede summer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What does it really mean */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Hvad betyder "uden kreditvurdering"?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Sandheden er, at helt uden kontrol findes sjældent - men processen er betydeligt forenklet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  <strong className="text-red-600">"Uden kreditvurdering"</strong> betyder typisk en 
                  forenklet proces uden dyb granskning af din økonomiske historie, men 
                  <strong className="text-orange-600"> ikke helt uden kontrol</strong>.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  De fleste udbydere laver stadig grundlæggende tjek af din identitet og 
                  indkomst. Forskellen er hastigheden og dybden af kontrollen.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border border-red-200">
                <h3 className="font-black text-2xl text-red-900 mb-6 flex items-center gap-3">
                  <Eye className="h-7 w-7 text-red-600" />
                  Hvad tjekker de faktisk?
                </h3>
                <div className="space-y-4">
                  {actualChecks.map((check, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-2xl bg-white/50">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${check.required ? 'bg-red-100' : 'bg-gray-100'}`}>
                        <check.icon className={`h-4 w-4 ${check.required ? 'text-red-600' : 'text-gray-600'}`} />
                      </div>
                      <span className="font-semibold text-slate-700">{check.text}</span>
                      <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${check.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                        {check.required ? 'Påkrævet' : 'Mulig'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Zap className="h-16 w-16 text-white mb-8" />
                  <h3 className="text-3xl font-black mb-6">Typisk proces</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">1</span>
                      </div>
                      <span>Udfyld kort ansøgning online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">2</span>
                      </div>
                      <span>Automatisk identitetstjek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">3</span>
                      </div>
                      <span>Hurtig indkomstverifikation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">4</span>
                      </div>
                      <span>Øjeblikkelig beslutning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">5</span>
                      </div>
                      <span>Udbetaling indenfor timer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Risks */}
      <section id="risici" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Fordele vs. risici
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Vej fordele mod risici før du træffer beslutningen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <ThumbsUp className="h-7 w-7 text-white" />
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

            {/* Risks */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                  <ThumbsDown className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-red-900">Risici & ulemper</h3>
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
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-black text-red-900 text-xl mb-3">Vigtig advarsel</h4>
                <p className="text-red-800 leading-relaxed mb-4">
                  Lån uden kreditvurdering har ofte meget høje omkostninger og kan føre til gældsproblemer. 
                  Overvej altid om du virkelig har brug for lånet, og om du kan betale det tilbage til tiden.
                </p>
                <div className="bg-white/60 rounded-2xl p-4">
                  <p className="font-semibold text-red-900">
                    💡 <strong>Bedre alternativ:</strong> Prøv først at søge et almindeligt kviklån med kreditvurdering - 
                    du kan få bedre vilkår og lavere omkostninger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">
                Sammenlign udbydere
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Udbydere der tilbyder lån med minimal kreditvurdering
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {providersComparison.map((provider, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className={`bg-gradient-to-r ${provider.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <EyeOff className="h-8 w-8" />
                    <h3 className="text-2xl font-black">{provider.provider}</h3>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Beløb:</span>
                    <span className="font-black text-slate-900">{provider.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Godkendelse:</span>
                    <span className="font-black text-green-600">{provider.approval}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Krav:</span>
                    <span className="font-black text-slate-900">{provider.requirements}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-600">Rente:</span>
                    <span className="font-black text-red-600">{provider.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-amber-900 mb-2">Husk:</p>
                  <p className="text-amber-800">
                    Disse lån har typisk meget høje omkostninger. Sammenlign altid den samlede ÅOP og 
                    overvej om du kan vente på at få et billigere alternativ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full shadow-2xl">
              <BookOpen className="h-6 w-6" />
              <span className="font-black text-lg">Ofte stillede spørgsmål</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-red-900 bg-clip-text text-transparent">
                Spørgsmål og svar
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
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors duration-300"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-4 leading-tight group-hover:text-red-900 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-red-100/50">
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-amber-700"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Tænk dig om
              <br />
              <span className="bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent">
                før du låner
              </span>
            </h2>
            
            <p className="text-2xl text-red-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Lån uden kreditvurdering kan være dyre. Sammenlign alle muligheder og overvej alternativer først
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign?type=kviklaan"
                className="relative inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-2xl font-black text-red-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Search className="h-7 w-7" />
                <span>Sammenlign alternativer</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="/kviklaan"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-red-200 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <span>Læs mere om kviklån</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80 mt-16">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-red-300" />
                <span className="font-semibold">Ansvarlig lånevejledning</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-red-300" />
                <span className="font-semibold">Fuld transparens</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-red-300" />
                <span className="font-semibold">Gratis sammenligning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}