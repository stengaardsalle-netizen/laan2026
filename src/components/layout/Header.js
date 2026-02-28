'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Coins,
  Menu,
  X,
  Home,
  Building,
  ShoppingBag,
  Zap,
  ChevronDown,
  Phone,
  Info
} from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  // Navigation items
  const navigation = [
    { 
      name: 'Forside', 
      href: '/', 
      icon: Home,
      subItems: [
        { name: 'Lån penge hurtigt', href: '/laan-penge-hurtigt' },
        { name: 'Små lån', href: '/smaa-laan' }
      ]
    },
    { name: 'Boliglån', href: '/kreditforeningslaan', icon: Building },
    { 
      name: 'Forbrugslån', 
      href: '/forbrugslaan', 
      icon: ShoppingBag,
      subItems: [
        { name: 'Standard forbrugslån', href: '/forbrugslaan' },
        { name: 'Forbrugslån trods RKI', href: '/forbrugslaan/rki' },
        { name: 'Renter og ÅOP', href: '/forbrugslaan/renter-og-aop' }
      ]
    },
    { 
      name: 'Kviklån', 
      href: '/kviklaan', 
      icon: Zap,
      subItems: [
        { name: 'Straks udbetaling', href: '/kviklaan/straks-udbetaling' },
        { name: 'Uden kreditvurdering', href: '/kviklaan/straks-udbetaling/uden-kreditvurdering' }
      ]
    },
    { name: 'Kontakt', href: '/kontakt', icon: Phone },
    { 
      name: 'Om os', 
      href: '/om-os', 
      icon: Info,
      subItems: [
        { name: 'Jesper Jensen fra Lån.dk', href: '/om-os/jesper-jensen' }
      ]
    },
  ]

  const handleMouseEnter = (itemName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay before closing
    setDropdownTimeout(timeout)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-blue-100/50 shadow-xl">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex w-full items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 text-2xl font-bold">
            <div className="relative h-12 w-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
              <Coins className="h-7 w-7 text-white" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Lån.dk
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const IconComponent = item.icon
              const hasDropdown = item.subItems && item.subItems.length > 0
              
              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="group relative flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 rounded-2xl hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm"
                    onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                    onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                  >
                    <IconComponent className="h-4 w-4 transition-transform group-hover:scale-110" />
                    {item.name}
                    {hasDropdown && <ChevronDown className="h-3 w-3 ml-1" />}
                  </Link>
                  
                  {hasDropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-100/50 py-4 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/sammenlign"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
              <Zap className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Sammenlign Nu</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-blue-700" /> : <Menu className="h-6 w-6 text-blue-700" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const hasDropdown = item.subItems && item.subItems.length > 0
                
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 rounded-2xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
                      onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                    >
                      <IconComponent className="h-5 w-5" />
                      {item.name}
                      {hasDropdown && <ChevronDown className="h-4 w-4 ml-auto" />}
                    </Link>
                    {hasDropdown && (
                      <div className="ml-6 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link
                href="/sammenlign"
                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Zap className="h-5 w-5" />
                Sammenlign Lån Nu
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}