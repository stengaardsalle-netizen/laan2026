'use client'

import Link from 'next/link'
import Header from '../../components/layout/Header'
import { Map, Building2, Banknote, BookOpen, Users, FileText, Shield } from 'lucide-react'

export default function SitemapPage() {
  const sections = [
    {
      title: 'Hovedsider',
      icon: Map,
      color: 'from-blue-500 to-indigo-600',
      links: [
        { name: 'Forside', href: '/', desc: 'Den ultimative guide til lån i Danmark' },
        { name: 'Sammenlign lån', href: '/sammenlign', desc: 'Find og sammenlign de bedste lånetilbud' },
        { name: 'Guides og vejledning', href: '/guide', desc: 'Alle vores dybdegående artikler samlet' },
        { name: 'Forbered din ansøgning', href: '/ansog', desc: 'Tjekliste og vejledning inden du ansøger' },
      ]
    },
    {
      title: 'Boliglån',
      icon: Building2,
      color: 'from-green-500 to-emerald-600',
      links: [
        { name: 'Guide til boliglån', href: '/boliglaan', desc: 'Realkreditlån, obligationer, kurser og konvertering' },
        { name: 'Køb af bolig', href: '/boliglaan/koeb-af-bolig', desc: 'Finansiering, udbetaling og trin-for-trin guide' },
        { name: 'Realkreditlån vs. banklån', href: '/boliglaan/realkredit-vs-banklaan', desc: 'Dybdegående sammenligning af de to lånetyper' },
        { name: 'Tillægslån i friværdien', href: '/boliglaan/tillaegslaan', desc: 'Frigør penge fra din boligs merværdi' },
        { name: 'Opkonvertering', href: '/opkonvertering', desc: 'Skær hundredtusinder af din restgæld' },
      ]
    },
    {
      title: 'Forbrugslån og andre lån',
      icon: Banknote,
      color: 'from-orange-500 to-red-600',
      links: [
        { name: 'Forbrugslån', href: '/forbrugslaan', desc: 'Guide til forbrugslån i Danmark' },
        { name: 'Renter og ÅOP', href: '/forbrugslaan/renter-og-aop', desc: 'Forstå de reelle omkostninger ved forbrugslån' },
        { name: 'Billån', href: '/billaan', desc: 'Finansiering af bilkøb' },
        { name: 'Lån penge hurtigt', href: '/laan-penge-hurtigt', desc: 'Hurtige lån med udbetaling samme dag' },
        { name: 'Kviklån', href: '/kviklaan', desc: 'Guide til kviklån og hurtige lån' },
        { name: 'Kviklån renter', href: '/kviklaan/renter', desc: 'Renter og omkostninger ved kviklån' },
      ]
    },
    {
      title: 'Viden og lovgivning',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      links: [
        { name: 'Videncenter', href: '/viden', desc: 'Samlet overblik over guides og vejledning' },
        { name: 'Låneordbog', href: '/viden/laaneordbog', desc: 'Over 30 finansielle begreber forklaret' },
        { name: 'Lovgivning og rettigheder', href: '/viden/lovgivning', desc: 'Kreditaftaleloven, fortrydelsesret og renteloft' },
      ]
    },
    {
      title: 'Om Lån.dk',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      links: [
        { name: 'Hvem er vi', href: '/om-os', desc: 'Om Lån.dk, Jesper Jensen og vores mission' },
        { name: 'Redaktionel politik', href: '/om-os/redaktionel-politik', desc: 'Vores principper for objektivitet og gennemsigtighed' },
        { name: 'Kontakt', href: '/kontakt', desc: 'Ring, skriv eller besøg os' },
      ]
    },
    {
      title: 'Juridisk',
      icon: Shield,
      color: 'from-slate-500 to-slate-700',
      links: [
        { name: 'Privatlivspolitik', href: '/privatlivspolitik', desc: 'Hvordan vi behandler dine personoplysninger' },
        { name: 'Vilkår og betingelser', href: '/vilkaar', desc: 'Betingelser for brug af Lån.dk' },
        { name: 'Cookie-politik', href: '/cookies', desc: 'Vores brug af cookies' },
        { name: 'Sitemap', href: '/sitemap', desc: 'Komplet oversigt over alle sider' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <Map className="h-12 w-12 text-blue-300 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Sitemap</h1>
          <p className="text-blue-100 text-lg">Komplet oversigt over alle sider på Lån.dk</p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.links.map((link, j) => (
                    <Link href={link.href} key={j} className="group flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{link.name}</h3>
                        <p className="text-slate-500 text-xs mt-0.5">{link.desc}</p>
                        <p className="text-blue-400 text-xs mt-1 font-mono">lån.dk{link.href}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-2"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p><a href="/sitemap" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sitemap</a></div></footer>
    </div>
  )
}
