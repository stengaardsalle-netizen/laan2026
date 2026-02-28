'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { 
  User,
  CheckCircle,
  Award,
  Calculator,
  Coins,
  Clock,
  TrendingUp,
  Shield,
  Users,
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
  Calendar,
  Banknote,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  MessageCircle,
  Building,
  Globe
} from 'lucide-react'

export default function JesperJensenPage() {
  // Experience timeline
  const experience = [
    {
      period: '2020 - Nu',
      role: 'Grundlægger & CEO',
      company: 'Lån.dk',
      description: 'Grundlagde Danmarks førende lånesammenligningstjeneste med fokus på transparens og forbrugerrettigheder.',
      achievements: [
        'Hjulpet over 50.000 danskere med at finde det rigtige lån',
        'Skabt Danmarks mest brugervenlige låneplatform',
        'Bygget partnerskaber med alle store danske banker'
      ]
    }
  ]

  // Core competencies
  const competencies = [
    { title: 'Lånerådgivning', icon: Calculator, level: 95 },
    { title: 'Finansiel analyse', icon: BarChart3, level: 90 },
    { title: 'Markedsforståelse', icon: TrendingUp, level: 92 },
    { title: 'Digital innovation', icon: Sparkles, level: 88 },
    { title: 'Kundeservice', icon: Users, level: 96 },
    { title: 'Forretningsudvikling', icon: Target, level: 91 }
  ]

  // Certifications and education
  const education = [
    {
      degree: 'AI kurser',
      institution: '',
      year: '2026',
      description: 'Har deltaget i kurser indenfor AI udvikling'
    },
    {
      degree: 'CEO',
      institution: '',
      year: '2005',
      description: 'Stifter af finansiel formidlingsservice'
    },
    {
      degree: 'Datafagtekniker',
      institution: '',
      year: '2002',
      description: 'Udvikling og servicering af databasesystemer'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-slate-400 to-blue-500 rounded-full blur-lg opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-4 bg-blue-600/20 backdrop-blur-2xl px-6 py-3 rounded-full shadow-2xl border border-blue-400/20">
                <Building className="h-5 w-5 text-blue-300" />
                <span className="text-white font-semibold">Grundlægger & CEO, Lån.dk</span>
              </div>
              
              {/* Main headline */}
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                  Jesper Jensen 
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-slate-400 bg-clip-text text-transparent">
                 
                </span>
              </h1>
              
              {/* Subtext */}
              <p className="text-xl lg:text-2xl leading-relaxed text-blue-100 mb-8 font-light">
                <span className="font-bold text-white">10+ års erfaring</span> indenfor den finansielle sektor og 
                <span className="font-bold text-blue-300"> markedsledende marketing ekspertise</span> i låneområdet
              </p>
              
              {/* Key stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-blue-600/20 backdrop-blur-xl rounded-2xl p-4 border border-blue-400/20">
                  <div className="text-2xl font-black text-blue-300 mb-1">50.000+</div>
                  <div className="text-blue-100 text-sm">Hjulpne besøgende online</div>
                </div>
                <div className="bg-indigo-600/20 backdrop-blur-xl rounded-2xl p-4 border border-indigo-400/20">
                  <div className="text-2xl font-black text-indigo-300 mb-1">10+ år</div>
                  <div className="text-indigo-100 text-sm">Brancheerfaring</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 px-8 py-4 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Kontakt Jesper</span>
                </Link>
                
                <div className="flex items-center gap-4 text-blue-100">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">info@fitezfinance.com</span>
                </div>
              </div>
            </div>

            {/* Right side - Profile image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <div className="h-48 w-48 mx-auto rounded-full mb-8 border-4 border-white/30 overflow-hidden bg-white/10 flex items-center justify-center">
                    <User className="h-24 w-24 text-white/40" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <Award className="h-5 w-5 text-blue-200" />
                      <span className="font-semibold">Finansiel tekstforfatter</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <GraduationCap className="h-5 w-5 text-blue-200" />
                      <span className="font-semibold">Marketing ansvarlig</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Building className="h-5 w-5 text-blue-200" />
                      <span className="font-semibold">Grundlægger Lån.dk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  Om Jesper Jensen
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Passioneret om at gøre låneprocessen transparent og forståelig for alle danskere
              </p>
            </div>

            <div className="prose prose-xl max-w-none">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Jesper Jensen grundlagde Lån.dk med en klar vision: at skabe Danmarks mest 
                  <strong className="text-blue-600"> brugervenlige og transparente låneplatform</strong>. 
                  Med over 10 års erfaring fra den finansielle sektor har Jesper hjulpet tusindvis af danskere 
                  med at navigere i lånemarkedet.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Før Lån.dk arbejdede Jesper med online markedsføring i både retail og den finansielle sektor, 
                  hvor han opbyggede dyb indsigt i både forbruger- og erhvervsmarkedet. Hans baggrund inden for 
                  <strong className="text-indigo-600"> finansiel analyse og digital innovation</strong> har været 
                  afgørende for udviklingen af Lån.dk's avancerede sammenligningsværktøjer.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Jesper brænder for at hjælpe almindelige danskere med at træffe <strong className="text-blue-700">informerede finansielle beslutninger</strong>. 
                  Han tror på, at alle fortjener adgang til fair og forståelig finansiel oplysning, uanset deres økonomiske situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Erhvervserfaring
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              En rejse gennem den finansielle sektor med fokus på innovation og kundeservice
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:text-right">
                      <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">{exp.company}</h4>
                      <p className="text-slate-700 mb-6">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h5 className="font-bold text-slate-800 mb-3">Nøgleresultater:</h5>
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Kernekompetencer
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Dyb ekspertise inden for finansiel rådgivning og markedsforståelse
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {competencies.map((comp, index) => {
              const IconComponent = comp.icon
              return (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-6 border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-slate-900 text-lg">{comp.title}</h3>
                    </div>
                    <div className="text-2xl font-black text-blue-600">
                      {comp.level}%
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                      style={{width: `${comp.level}%`}}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">
                Baggrund
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Erfaring indenfor IT, finans og digital udvikling
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-indigo-600 mb-2">{edu.year}</div>
                </div>
                
                <h3 className="font-black text-slate-900 text-lg mb-4 text-center">{edu.degree}</h3>
                <p className="text-slate-700 text-sm text-center">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-700"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
              Klar til at hjælpe
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                dig videre?
              </span>
            </h2>
            
            <p className="text-2xl text-blue-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Kontakt Jesper direkte for personlig vejledning om dine lånebehov.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/kontakt"
                className="relative inline-flex items-center gap-4 rounded-3xl bg-white px-12 py-6 text-2xl font-black text-blue-600 shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="h-7 w-7" />
                <span>Kontakt Jesper</span>
                <ArrowRight className="h-7 w-7" />
              </Link>
              
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-white/20 border border-white/20">
                  <Calculator className="h-7 w-7" />
                </div>
                <span>Sammenlign lån</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-white/80 mt-16">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-300" />
                <span className="font-semibold">info@fitezfinance.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-blue-300" />
                <span className="font-semibold">Direktør Lån.dk</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-300" />
                <span className="font-semibold">50.000+ hjulpne besøgende</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
