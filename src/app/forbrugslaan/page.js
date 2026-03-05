'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  ShoppingBag,
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
  Zap,
  ChevronDown,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react'

export default function ForbrugslaanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Loan comparison data
  const loanComparison = [
    {
      type: 'Forbrugslån',
      icon: ShoppingBag,
      rate: '5-25%',
      term: '1-15 år',
      amount: '5K-500K kr',
      purpose: 'Frit formål',
      security: 'Ingen',
      approval: '1-3 dage',
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'Kviklån',
      icon: Zap,
      rate: '15-35%',
      term: '1-12 mdr',
      amount: '1K-50K kr',
      purpose: 'Akutte behov',
      security: 'Ingen',
      approval: 'Samme dag',
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'Boliglån',
      icon: Home,
      rate: '2-6%',
      term: '10-30 år',
      amount: '100K-10M kr',
      purpose: 'Bolig/renovering',
      security: 'Pant i bolig',
      approval: '1-3 uger',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  // FAQ data specific to consumer loans
  const faqs = [
    {
      question: 'Hvad er forskellen på forbrugslån og kviklån?',
      answer: 'Forbrugslån har typisk lavere renter (5-25%) og længere løbetider (1-15 år) sammenlignet med kviklån. Kviklån har højere renter men hurtigere udbetaling. Forbrugslån er bedre til større beløb og længere tilbagebetalingsperioder.'
    },
    {
      question: 'Hvor hurtigt kan jeg få udbetalt et forbrugslån?',
      answer: 'De fleste forbrugslån bliver godkendt inden for 1-3 hverdage. Nogle digitale udbydere kan udbetale samme dag, hvis din ansøgning er komplet og din økonomi opfylder kravene.'
    },
    {
      question: 'Hvad betyder ÅOP, og hvorfor er det vigtigt?',
      answer: 'ÅOP (Årlige Omkostninger i Procent) er den samlede årlige omkostning af lånet inklusive renter og alle gebyrer. Det er det mest præcise tal at sammenligne lån på, da det viser den reelle pris for lånet.'
    },
    {
      question: 'Kan jeg indfri mit forbrugslån før tid?',
      answer: 'Ja, de fleste forbrugslån kan indfries før tid. Dog kan der være gebyrer forbundet hermed. Tjek altid vilkårene for førtidig indfrielse før du underskriver lånekontrakten.'
    },
    {
      question: 'Hvad sker der, hvis jeg ikke kan betale mit forbrugslån tilbage?',
      answer: 'Ved betalingsproblemer bør du straks kontakte din långiver. De fleste banker tilbyder betalingsordninger. Hvis du ikke betaler, kan det påvirke din kreditvurdering negativt og i værste fald føre til inkasso.'
    }
  ]

  // Benefits and drawbacks
  const benefits = [
    { text: 'Ingen sikkerhed krævet', icon: Shield },
    { text: 'Frit anvendelsesformål', icon: Target },
    { text: 'Hurtig ansøgningsproces', icon: Zap },
    { text: 'Faste månedlige ydelser', icon: Calculator },
    { text: 'Beløb fra 5.000-500.000 kr', icon: Coins },
    { text: 'Fleksible løbetider', icon: Clock }
  ]

  const drawbacks = [
    { text: 'Højere renter end lån med sikkerhed', icon: TrendingUp },
    { text: 'Krav til kreditværdighed', icon: FileText },
    { text: 'Risiko for overforbrug', icon: AlertTriangle },
    { text: 'Diverse gebyrer kan påløbe', icon: CreditCard }
  ]

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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <div className="mb-12 inline-flex items-center gap-4 bg-green-600/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl border border-green-400/20">
              <ShoppingBag className="h-6 w-6 text-green-300" />
              <span className="text-white font-bold text-lg">Forbrugslån - Fleksibel finansiering</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                Forbrugslån til 
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                alle dine behov
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="mx-auto max-w-4xl text-2xl lg:text-3xl leading-relaxed text-green-100 mb-16 font-light">
              Lån op til <span className="font-black text-white">500.000 kr</span> uden sikkerhed til 
              <span className="font-black text-green-300"> frit formål</span>
              <br />
              <span className="text-lg text-green-300 mt-4 block">
                Sammenlign renter fra 5% og find dit perfekte forbrugslån på 2 minutter
              </span>
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <Link
                href="/sammenlign?type=forbrugslaan"
                className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-12 py-6 text-2xl font-black text-white shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Calculator className="h-7 w-7" />
                <span>Sammenlign forbrugslån</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="#calculator"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-green-600/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center hover:bg-green-600/30 border border-green-400/20">
                  <Sparkles className="h-8 w-8" />
                </div>
                <span>Beregn dit lån</span>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-green-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-green-400/20">
                <div className="text-4xl font-black text-green-300 mb-2">5-25%</div>
                <div className="text-white font-semibold">Årlig rente</div>
                <div className="text-green-300 text-sm">Afhængig af din økonomi</div>
              </div>
              
              <div className="bg-emerald-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-emerald-400/20">
                <div className="text-4xl font-black text-emerald-300 mb-2">1-15</div>
                <div className="text-white font-semibold">År løbetid</div>
                <div className="text-emerald-300 text-sm">Vælg selv længden</div>
              </div>
              
              <div className="bg-teal-600/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-teal-400/20">
                <div className="text-4xl font-black text-teal-300 mb-2">500K</div>
                <div className="text-white font-semibold">Max lånebeløb</div>
                <div className="text-teal-300 text-sm">Afhængig af din økonomi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a consumer loan */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-green-900 bg-clip-text text-transparent">
                Hvad er et forbrugslån?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Et forbrugslån er et fleksibelt lån uden sikkerhed, der giver dig frihed til at bruge pengene til næsten alle formål
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Et forbrugslån er en populær låneform, der giver dig mulighed for at låne mellem 
                  <strong className="text-green-600"> 5.000 kr og 500.000 kr</strong> uden at skulle stille sikkerhed 
                  som din bolig eller bil.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Det betyder, at du kan bruge pengene til præcis det, du har brug for - om det er en 
                  boligrenovering, en ny bil, en drømmerejse eller at samle dyr gæld.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200">
                <h3 className="font-black text-2xl text-green-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-green-600" />
                  Sådan fungerer det
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Ansøg:</strong> Udfyld ansøgning online eller i banken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Vurdering:</strong> Banken vurderer din kreditværdighed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Godkendelse:</strong> Få svar indenfor 1-3 dage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Udbetaling:</strong> Pengene overføres til din konto</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <ShoppingBag className="h-16 w-16 text-white mb-8" />
                  <h3 className="text-3xl font-black mb-6">Populære formål</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Home className="h-5 w-5" />
                      <span>Boligrenovering</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>Bryllup & fester</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5" />
                      <span>Drømmerejse</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <span>Samle dyr gæld</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="h-5 w-5" />
                      <span>Uforudsete udgifter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Drawbacks */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-green-900 bg-clip-text text-transparent">
                Fordele & ulemper
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Få det komplette overblik før du træffer beslutningen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-white" />
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

            {/* Drawbacks */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-orange-900">Ulemper</h3>
              </div>
              <div className="space-y-4">
                {drawbacks.map((drawback, index) => {
                  const IconComponent = drawback.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-orange-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{drawback.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Comparison */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Sammenlign lånetyper
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Se hvordan forbrugslån står i forhold til andre lånemuligheder
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {loanComparison.map((loan, index) => {
              const IconComponent = loan.icon
              return (
                <div key={index} className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden">
                  <div className={`bg-gradient-to-r ${loan.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <IconComponent className="h-8 w-8" />
                      <h3 className="text-2xl font-black">{loan.type}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Rente:</span>
                      <span className="font-black text-slate-900">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Løbetid:</span>
                      <span className="font-black text-slate-900">{loan.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Beløb:</span>
                      <span className="font-black text-slate-900">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Formål:</span>
                      <span className="font-black text-slate-900">{loan.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Sikkerhed:</span>
                      <span className="font-black text-slate-900">{loan.security}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">Godkendelse:</span>
                      <span className="font-black text-slate-900">{loan.approval}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-8 inline-flex items-center gap-4 bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl">
              <BookOpen className="h-6 w-6" />
              <span className="font-black text-lg">Ofte stillede spørgsmål</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-green-900 bg-clip-text text-transparent">
                Svar på dine spørgsmål
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
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors duration-300"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-4 leading-tight group-hover:text-green-900 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center transition-all duration-500 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-green-100/50">
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Find dit perfekte
              <br />
              <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                forbrugslån
              </span>
            </h2>
            
            <p className="text-2xl text-green-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Sammenlign tilbud fra Danmarks førende banker og find det lån der passer perfekt til dine behov
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign?type=forbrugslaan"
                className="relative inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-2xl font-black text-green-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Sparkles className="h-7 w-7" />
                <span>Sammenlign lån nu</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="/guide"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-green-200 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span>Læs vores guide</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80 mt-16">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-300" />
                <span className="font-semibold">100% sikker sammenligning</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-green-300" />
                <span className="font-semibold">10.000+ tilfredse kunder</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-green-300" />
                <span className="font-semibold">Gratis vejledning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}