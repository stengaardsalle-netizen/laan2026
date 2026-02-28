'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Shield,
  Users,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Heart,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function OmOsPage() {
  const values = [
    {
      icon: Shield,
      title: 'Gennemsigtighed',
      description: 'Vi tror på åbenhed og klarhed i alle vores processer og anbefalinger'
    },
    {
      icon: Heart,
      title: 'Kundens bedste',
      description: 'Din økonomiske succes er vores succeskriterium'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Vi bruger teknologi til at gøre lån nemmere og mere forståeligt'
    }
  ]

  const team = [
    {
      name: 'Jesper Jensen',
      role: 'Grundlægger og CEO', 
      description: 'Specialist i bolig- og forbrugslån'
    }
  ]

  const stats = [
    { number: '10.000+', label: 'Tilfredse kunder' },
    { number: '50+', label: 'Partnere' },
    { number: '4.8/5', label: 'Kundevurdering' },
    { number: '15K+', label: 'Kr spart i snit' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-black text-sm sm:text-lg">Om Lån.dk</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Skaber tryghed gennem
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                gennemsigtighed
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-600 mb-8 sm:mb-12 px-4">
              Vi arbejder for at gøre det komplekse enkelt. Gennem intuitive låneberegnere, sammenligninger og dybdegående guides hjælper vi dig med at navigere sikkert i lånujunglen.
            </p>
            
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-base sm:text-lg font-bold text-slate-700 px-4">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <span className="text-center">Vores mission er at gøre markedet mere forståeligt — én låner ad gangen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ]
              
              return (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index]} shadow-xl mb-3 sm:mb-4 group-hover:shadow-2xl transition-all duration-300 mx-auto`}>
                    <span className="text-lg sm:text-2xl font-black text-white">{stat.number.charAt(0)}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-lg text-slate-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Section - Mobile Optimized */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-bold text-sm sm:text-base">Tillid fra tusinder</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                Fra førstegangslåntagere til erfarne boligejere
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Hos Lån.dk stoler både privatpersoner og virksomheder på vores ekspertise, når det gælder lån. Vi hjælper alt fra førstegangslåntagere, der ønsker overblik over deres muligheder, til erfarne boligejere, der leder efter bedre vilkår.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Med vores platform sikrer vi, at alle — uanset økonomisk baggrund — får adgang til gennemsigtige og forståelige låneløsninger. Vi er her for at guide dig, fra start til slut, så du kan træffe de bedste økonomiske beslutninger.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/sammenlign"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
                >
                  <span>Sammenlign lån nu</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                
                <Link
                  href="/guide"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-slate-300 text-slate-700 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Læs vores guides</span>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: CheckCircle, title: 'Pålidelig', desc: 'Godkendt af finanstilsynet' },
                { icon: Shield, title: 'Sikker', desc: '256-bit SSL kryptering' },
                { icon: Award, title: 'Anerkendt', desc: '4.8/5 stjerner på Trustpilot' },
                { icon: TrendingUp, title: 'Effektiv', desc: 'Svar på 2 minutter' }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Vores værdier
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              Principperne der guider alt hvad vi gør
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon
              
              return (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300 px-4">
                  <div className="mb-6 sm:mb-8 flex justify-center">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
              Mød vores eksperter
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">
              Erfarne finansielle rådgivere med passionen for at hjælpe dig
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:gap-12 max-w-md mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-6 sm:p-8 text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300 group mx-4 sm:mx-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                  Har du spørgsmål?
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  Vi er her for at hjælpe dig. Kontakt vores eksperter for personlig rådgivning om dit lånevalg.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm sm:text-base">Ring til os</p>
                      <p className="text-slate-600 text-sm sm:text-base">+45 31 38 02 17</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm sm:text-base">Send os en email</p>
                      <p className="text-slate-600 text-sm sm:text-base">info@fitezfinance.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm sm:text-base">Besøg os</p>
                      <p className="text-slate-600 text-sm sm:text-base">Stengårds Alle 45<br />DK-2800 Kgs. Lyngby</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
                  Parat til at sammenligne lån?
                </h3>
                <p className="text-slate-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Brug vores oversigter og beregnere til at finde det perfekte lån til dig.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <Link
                    href="/sammenlign"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-bold text-center hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <span>Start sammenligning</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  
                  <Link
                    href="/guide"
                    className="w-full border-2 border-slate-300 text-slate-700 py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-bold text-center hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Læs vores guides</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
