import Link from 'next/link'
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  BoltIcon, 
  ChartBarIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-indigo-500/40 rounded-full"></div>
        <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-purple-400/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500/20 rounded-full"></div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-blue-600 ring-1 ring-blue-600/20 bg-gradient-to-r from-blue-50 to-indigo-50 hover:ring-blue-600/30 transition-all duration-300">
              🏆 Danmarks bedste lånesammenligning{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Læs mere <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent sm:text-6xl">
            Find det <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">bedste lån</span> til dine behov
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Hos Lån.dk hjælper vi dig med at sammenligne lånetyper, renter og vilkår fra forskellige udbydere. 
            <strong className="text-blue-600">Spar op til 50.000 kr.</strong> på dit næste lån! 💰
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/sammenlign"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <BoltIcon className="h-5 w-5" />
                Sammenlign lån nu - GRATIS
              </div>
            </Link>
            
            <Link
              href="/guide"
              className="group text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/50 backdrop-blur-sm"
            >
              <ChartBarIcon className="h-5 w-5 text-blue-600" />
              Læs lånevejledning
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
        
        {/* Stats cards with gradients and icons */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                Gratis sammenligning
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                Sammenlign lån fra <strong className="text-blue-600">15+ udbydere</strong> gratis og find det bedste tilbud på få minutter.
              </dd>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                  <BoltIcon className="h-6 w-6 text-white" />
                </div>
                Lynhurtig godkendelse
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                Få svar på din låneansøgning på <strong className="text-indigo-600">under 5 minutter</strong> og start din rejse mod det perfekte lån.
              </dd>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-orange-50 backdrop-blur-sm border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
                Spar op til 50.000 kr
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                Vores kunder sparer i gennemsnit <strong className="text-orange-600">23.000 kr</strong> ved at bruge vores sammenligningsservice.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}