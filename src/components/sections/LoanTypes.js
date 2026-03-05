import Link from 'next/link'
import { 
  HomeIcon,
  ShoppingCartIcon, 
  BoltIcon,
  QueueListIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

const loanTypes = [
  {
    name: 'Boliglån',
    description: 'Finansiering af køb af fast ejendom med sikkerhed i boligen. Lange løbetider og lave renter.',
    href: '/boliglaan',
    icon: HomeIcon,
    gradient: 'from-emerald-400 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
    features: ['Fra 0,5% rente', 'Op til 30 år løbetid', 'Sikkerhed i bolig'],
    popular: false,
    badge: '💎 Bedste rente'
  },
  {
    name: 'Forbrugslån',
    description: 'Fleksibelt lån uden sikkerhed til større indkøb som bil, renovation eller ferie.',
    href: '/forbrugslaan',
    icon: ShoppingCartIcon,
    gradient: 'from-blue-400 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    features: ['Ingen sikkerhed', 'Hurtig udbetaling', 'Op til 500.000 kr'],
    popular: true,
    badge: '🔥 Mest populære'
  },
  {
    name: 'Små lån',
    description: 'Små, kortfristede lån med hurtig godkendelse og udbetaling samme dag.',
    href: '/smaa-laan',
    icon: BoltIcon,
    gradient: 'from-orange-400 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
    features: ['Samme dag udbetaling', 'Minimal dokumentation', 'Op til 50.000 kr'],
    popular: false,
    badge: '⚡ Hurtigste'
  },
  {
    name: 'Samlelån',
    description: 'Samling af flere eksisterende lån i ét enkelt lån med potentielt lavere rente.',
    href: '/samlelaan',
    icon: QueueListIcon,
    gradient: 'from-purple-400 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    features: ['Lavere samlede rente', 'Én månedlig ydelse', 'Bedre overblik'],
    popular: false,
    badge: '🎯 Smart valg'
  },
  {
    name: 'Erhvervslån',
    description: 'Finansiering til virksomheder for investering, udstyr eller driftskapital.',
    href: '/erhvervslaan',
    icon: BuildingOfficeIcon,
    gradient: 'from-cyan-400 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-200',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    features: ['Erhvervsfinansiering', 'Fleksible vilkår', 'Op til 10 mio. kr'],
    popular: false,
    badge: '🏢 For virksomheder'
  }
]

export default function LoanTypes() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-2 text-sm font-medium text-blue-800">
              <CheckCircleIcon className="mr-2 h-4 w-4" />
              Sammenlign alle lånetyper
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent sm:text-4xl">
            Vælg den rette lånetype
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hver lånetype har sine egne fordele. Find den type lån der passer <strong className="text-blue-600">perfekt</strong> til dine behov.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3">
            {loanTypes.map((loanType, index) => (
              <Link key={loanType.name} href={loanType.href} className="group relative">
                <div className={`relative overflow-hidden bg-gradient-to-br ${loanType.bgGradient} border-2 ${loanType.borderColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2`}>
                  
                  {/* Popular badge */}
                  {loanType.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg animate-pulse">
                        Populært
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      {loanType.badge}
                    </span>
                  </div>

                  <dt className="flex items-center gap-4 mb-6">
                    <div className={`h-16 w-16 flex items-center justify-center rounded-2xl ${loanType.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <loanType.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {loanType.name}
                      </h3>
                    </div>
                  </dt>

                  <dd className="space-y-6">
                    <p className="text-base leading-7 text-gray-600 line-clamp-3">
                      {loanType.description}
                    </p>

                    {/* Features with checkmarks */}
                    <div className="space-y-3">
                      {loanType.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${loanType.gradient} flex items-center justify-center mr-3 shadow-sm`}>
                            <CheckCircleIcon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${loanType.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                        Læs mere om {loanType.name.toLowerCase()}
                        <ArrowRightIcon className="h-4 w-4 text-current group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </dd>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${loanType.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/sammenlign"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <BoltIcon className="h-5 w-5" />
            Sammenlign alle lån nu - Det er gratis!
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}