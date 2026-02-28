'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
  Users,
  Headphones,
  Star,
  Award
} from 'lucide-react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 2000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Ring til os',
      subtitle: 'Få øjeblikkelig hjælp',
      info: '+45 31 38 02 17',
      action: 'tel:+4531380217',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Tal direkte med vores eksperter'
    },
    {
      icon: Mail,
      title: 'Send os en email',
      subtitle: 'Detaljerede spørgsmål',
      info: 'info@fitezfinance.com',
      action: 'mailto:info@fitezfinance.com',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Vi svarer inden for 24 timer i hverdage'
    },
    {
      icon: MessageCircle,
      title: 'Live chat',
      subtitle: 'Øjeblikkelig support',
      info: 'Start chat',
      action: '#chat',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Tilgængelig alle hverdage'
    }
  ]

  const officeHours = [
    { day: 'Mandag - Fredag', hours: '9:00 - 15:00', available: true },
    { day: 'Lørdag', hours: '10:00 - 15:00', available: true },
    { day: 'Søndag', hours: 'Lukket', available: false }
  ]

  const supportFeatures = [
    { icon: Shield, title: 'Gratis rådgivning', desc: '100% uforpligtende' },
    { icon: Users, title: 'Erfarne eksperter', desc: '15+ års erfaring' },
    { icon: Award, title: 'Pålidelig service', desc: '4.8/5 stjerner' },
    { icon: Headphones, title: '24/7 support', desc: 'Vi er her når du har brug for os' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Phone className="h-6 w-6" />
              <span className="font-black text-lg">Kom i kontakt med Lån.dk</span>
              <Sparkles className="h-6 w-6 animate-spin" style={{animationDuration: '3s'}} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Vi er her for at
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                hjælpe dig
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-slate-600 mb-12">
              Få overblik over dine lånemuligheder og træf de bedste beslutninger for din økonomi. 
              <span className="block mt-4 font-bold text-slate-800">
                Vi guider dig igennem lånejunglen med gennemsigtighed og pålidelighed.
              </span>
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  &lt;2min
                </div>
                <div className="text-slate-600 font-semibold">Gennemsnitlig svartid</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-slate-600 font-semibold">Hjulpne kunder</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  4.8★
                </div>
                <div className="text-slate-600 font-semibold">Kundetilfredshed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Vælg din foretrukne kontaktmetode
            </h2>
            <p className="text-xl text-slate-600">
              Vi er klar til at hjælpe dig på den måde der passer dig bedst
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              
              return (
                <div key={index} className="group relative">
                  {/* Floating background effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${method.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  
                  <a
                    href={method.action}
                    className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-500 block h-full"
                  >
                    {/* Icon with glow effect */}
                    <div className="mb-8 flex justify-center">
                      <div className={`relative h-24 w-24 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                        <IconComponent className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Pulse effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${method.gradient} animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-slate-500 mb-4 font-semibold">
                        {method.subtitle}
                      </p>
                      <p className="text-xl font-bold text-slate-800 mb-4">
                        {method.info}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {method.description}
                      </p>
                    </div>
                    
                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-6 w-6 text-blue-600" />
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Office Hours */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
                <Clock className="h-6 w-6 text-white" />
                <span className="font-bold text-white">Åbningstider</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                Vi er klar når du er
              </h2>
              
              <div className="space-y-4 mb-8">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 flex justify-between items-center hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`h-4 w-4 rounded-full ${schedule.available ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                      <span className="text-lg font-bold text-white">{schedule.day}</span>
                    </div>
                    <span className="text-lg text-blue-100 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-ping"></div>
                  <span className="font-bold text-green-300 text-lg">Vi er online nu!</span>
                </div>
                <p className="text-green-100">
                  Ring eller skriv til os - vi svarer med det samme.
                </p>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
                <MapPin className="h-6 w-6 text-white" />
                <span className="font-bold text-white">Vores lokation</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                Kom og besøg os
              </h2>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-white mb-4">Lån.dk Hovedkontor</h3>
                    <div className="space-y-2 text-blue-100">
                      <p className="text-lg">Stengårds Alle 45</p>
                      <p className="text-lg">DK-2800 Kgs. Lyngby</p>
                      <p className="text-lg">Danmark</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">
                      Book et møde eller kom forbi i åbningstiderne
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white/60">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-bold">Interaktivt kort</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Stengårds+Alle+45,+2800+Kgs.+Lyngby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300"
                >
                  <span>Åbn i Google Maps</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="mb-8 inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl">
                <Send className="h-6 w-6" />
                <span className="font-black text-lg">Andre spørgsmål og support</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Udfyld formularen og vi vil vende tilbage til dig
              </h2>
              <p className="text-xl text-slate-600">
                Vi svarer på alle henvendelser inden for 24 timer
              </p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-bold text-slate-900 mb-4">
                      Dit navn *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                      placeholder="Indtast dit fulde navn"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-slate-900 mb-4">
                      Email adresse *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                      placeholder="din@email.dk"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-slate-900 mb-4">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                      placeholder="+45 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-slate-900 mb-4">
                      Emne *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                    >
                      <option value="">Vælg emne</option>
                      <option value="boliglaan">Boliglån</option>
                      <option value="forbrugslaan">Forbrugslån</option>
                      <option value="kviklaan">Kviklån</option>
                      <option value="samlelaan">Samlelån</option>
                      <option value="generelt">Generelle spørgsmål</option>
                      <option value="support">Teknisk support</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className="block text-lg font-bold text-slate-900 mb-4">
                    Din besked *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg resize-none"
                    placeholder="Beskriv dit spørgsmål eller hvordan vi kan hjælpe dig..."
                  />
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sender besked...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6" />
                        <span>Send besked</span>
                        <ArrowRight className="h-6 w-6" />
                      </>
                    )}
                  </button>
                </div>
                
                <div className="mt-8 text-center text-slate-600">
                  <p className="flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span>Dine oplysninger behandles fortroligt og sikkert</span>
                  </p>
                </div>
              </form>
            ) : (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 text-center shadow-2xl border border-green-200">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-black text-green-800 mb-4">
                  Tak for din henvendelse!
                </h3>
                <p className="text-xl text-green-700 mb-8">
                  Vi har modtaget din besked og vender tilbage inden for 24 timer.
                </p>
                
                <div className="space-y-4">
                  <Link
                    href="/sammenlign"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
                  >
                    <span>Sammenlign lån imens</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Hvorfor vælge vores support?
            </h2>
            <p className="text-xl text-slate-600">
              Vi sætter en ære i at levere exceptionel kundeservice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ]
              
              return (
                <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                      <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="font-bold text-white">Over 10.000 tilfredse kunder</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Klar til at finde dit perfekte lån?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Lad os hjælpe dig med at spare penge og få det bedste lånetilbud på markedet
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/sammenlign"
                className="inline-flex items-center gap-4 rounded-full bg-white px-12 py-6 text-xl font-black text-blue-600 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-6 w-6" />
                <span>Start sammenligning</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              
              <a
                href="tel:+4531380217"
                className="inline-flex items-center gap-4 text-xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Phone className="h-6 w-6" />
                <span>Ring nu: +45 31 38 02 17</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
