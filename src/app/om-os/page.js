'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { Shield, Users, Award, Target, CheckCircle, ArrowRight, Heart, TrendingUp, Lightbulb, BookOpen, Phone, Mail, MapPin, User, Building, GraduationCap, Briefcase } from 'lucide-react'

export default function OmOsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.15) 1px,transparent 0)',backgroundSize:'50px 50px'}}></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-blue-400/20">
            <Heart className="h-5 w-5 text-blue-300" />
            <span className="text-white font-bold text-sm">Om Lån.dk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Uafhængig vejledning</span><br/>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">om lån i Danmark</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-blue-100 font-light">
            Vi gør det komplekse enkelt. Gennem dybdegående guides, låneberegnere og uvildig vejledning hjælper vi dig med at træffe informerede økonomiske beslutninger.
          </p>
        </div>
      </section>

      {/* Mission & Værdier */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Vores mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Lån.dk blev grundlagt med én klar vision: at gøre det danske lånemarked mere gennemsigtigt og forståeligt for alle. Vi tror på, at velinformerede forbrugere træffer bedre økonomiske beslutninger — og at alle fortjener adgang til uvildig, letforståelig vejledning om lån.</p>
            <p className="text-lg text-slate-700 leading-relaxed">Vi er ikke en bank eller et realkreditinstitut. Vi udsteder ikke lån. Vi er en uafhængig vejledningsportal, der hjælper dig med at forstå dine muligheder, sammenligne vilkår og navigere sikkert i låneverdenen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Gennemsigtighed', desc: 'Vi er åbne om vores forretningsmodel, og vi adskiller altid reklame fra redaktionelt indhold.' },
              { icon: Heart, title: 'Brugerens interesse', desc: 'Vores indhold er designet til at informere og beskytte dig — også med advarsler, når du ikke bør låne.' },
              { icon: Lightbulb, title: 'Faglig dybde', desc: 'Vi forklarer komplekse begreber pædagogisk og præcist, så du kan træffe informerede valg.' },
            ].map((value, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4"><value.icon className="h-5 w-5 text-white" /></div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jesper Jensen - Grundlægger */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Personen bag Lån.dk</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center flex-shrink-0">
                  <User className="h-12 w-12 text-white/60" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Jesper Jensen</h3>
                  <p className="text-blue-200 font-bold text-lg">Grundlægger og CEO</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3">
                    <div className="flex items-center gap-2 text-blue-100 text-sm"><Mail className="h-4 w-4" />info@fitezfinance.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Jesper Jensen grundlagde Lån.dk med en klar vision: at skabe Danmarks mest brugervenlige og transparente låneplatform. Med over 10 års erfaring fra den finansielle sektor og digital markedsføring har han opbygget dyb indsigt i både forbruger- og erhvervsmarkedet.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Jesper brænder for at hjælpe almindelige danskere med at træffe informerede finansielle beslutninger. Han tror på, at alle fortjener adgang til fair og forståelig finansiel oplysning, uanset deres økonomiske situation.
                </p>
              </div>

              <h4 className="text-xl font-black text-slate-900 mb-4">Baggrund</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { year: '2026', title: 'AI-udvikling', desc: 'Kurser inden for AI og maskinlæring', icon: Lightbulb },
                  { year: '2005', title: 'Grundlægger', desc: 'Stifter af finansiel formidlingsservice', icon: Building },
                  { year: '2002', title: 'Datafagtekniker', desc: 'Udvikling og servicering af databasesystemer', icon: GraduationCap },
                ].map((edu, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"><edu.icon className="h-4 w-4 text-white" /></div>
                      <span className="text-sm font-bold text-blue-600">{edu.year}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 mb-1">{edu.title}</h5>
                    <p className="text-slate-600 text-sm">{edu.desc}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-black text-slate-900 mb-4">Kompetencer</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Finansiel vejledning', 'Markedsanalyse', 'Digital innovation', 'Forretningsudvikling', 'Kundeservice', 'SEO & content'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sådan tjener vi penge / Gennemsigtighed */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Sådan tjener vi penge</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">Vi ønsker fuld åbenhed om vores forretningsmodel. Lån.dk er en reklamefinansieret vejledningsportal. Vi modtager kommission fra banker og låneudbydere, når vi formidler kontakt. Det betyder, at vores service er gratis for dig.</p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 mb-8">
            <p className="text-blue-900 font-medium"><strong>Vigtigt:</strong> Kommission påvirker aldrig vores vejledende indhold. Vores guides, artikler og låneordbog er skrevet uafhængigt af kommercielle hensyn. Læs vores <Link href="/om-os/redaktionel-politik" className="text-blue-700 underline">redaktionelle politik</Link> for mere information.</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Hvad vi dækker</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Boliglån', desc: 'Realkreditlån, obligationer, kurser, konvertering, tillægslån', href: '/boliglaan' },
              { title: 'Forbrugslån', desc: 'Renter, ÅOP, kreditvurdering, ansvarlig låntagning', href: '/forbrugslaan' },
              { title: 'Viden', desc: 'Låneordbog med 30+ begreber, lovgivning og forbrugerbeskyttelse', href: '/viden' },
              { title: 'Billån', desc: 'Finansiering af bilkøb, forhandlerstrategi', href: '/billaan' },
            ].map((topic, i) => (
              <Link href={topic.href} key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all group">
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{topic.title}</h3>
                <p className="text-slate-600 text-sm">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Kontakt os</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">Har du spørgsmål til vores indhold, vores redaktionelle praksis, eller vil du samarbejde med os? Vi hører gerne fra dig.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"><Phone className="h-5 w-5 text-white" /></div>
                <div><p className="font-bold text-slate-900 text-sm">Ring til os</p><p className="text-slate-600 text-sm">+45 31 38 02 17</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0"><Mail className="h-5 w-5 text-white" /></div>
                <div><p className="font-bold text-slate-900 text-sm">Email</p><p className="text-slate-600 text-sm">info@fitezfinance.com</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"><MapPin className="h-5 w-5 text-white" /></div>
                <div><p className="font-bold text-slate-900 text-sm">Adresse</p><p className="text-slate-600 text-sm">Stengårds Alle 45, DK-2800 Kgs. Lyngby</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
