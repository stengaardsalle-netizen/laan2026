import { 
  ChartBarIcon,
  GiftIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  EyeIcon,
  UserGroupIcon,
  SparklesIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    title: 'Sammenlign flere tilbud',
    description: 'Vi samler tilbud fra 15+ låneudbydere, så du nemt kan sammenligne renter, vilkår og omkostninger på ét sted.',
    icon: ChartBarIcon,
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    stats: '15+ udbydere'
  },
  {
    title: 'Gratis og uforpligtende',
    description: 'Brug af vores sammenligningsservice er helt gratis. Du betaler kun, hvis du vælger at optage et lån.',
    icon: GiftIcon,
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    stats: '100% gratis'
  },
  {
    title: 'Hurtig og sikker proces',
    description: 'Vores digitale platform gør det nemt og hurtigt at ansøge om lån. Alle oplysninger behandles sikkert og fortroligt.',
    icon: ShieldCheckIcon,
    gradient: 'from-purple-500 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
    stats: 'Under 5 min'
  },
  {
    title: 'Ekspert vejledning',
    description: 'Få hjælp til at forstå lånevilkår, renter og ÅOP. Vores guide hjælper dig med at træffe det rigtige valg.',
    icon: AcademicCapIcon,
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    stats: 'Ekspert hjælp'
  },
  {
    title: 'Transparent information',
    description: 'Vi viser alle omkostninger tydeligt - ingen skjulte gebyrer eller overraskelser. Du ved præcis, hvad lånet koster.',
    icon: EyeIcon,
    gradient: 'from-teal-500 to-cyan-600',
    bgGradient: 'from-teal-50 to-cyan-50',
    stats: 'Ingen skjulte gebyrer'
  },
  {
    title: 'Personlig vejledning',
    description: 'Baseret på din økonomiske situation og behov hjælper vi dig med at finde det mest passende lån.',
    icon: UserGroupIcon,
    gradient: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    stats: 'Skræddersyet'
  },
]

export default function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 text-sm font-semibold text-blue-800">
              <SparklesIcon className="mr-2 h-4 w-4" />
              Hvorfor vælge Lån.dk?
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent sm:text-4xl">
            Din pålidelige partner til lånesammenligning
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Vi gør det nemt og trygt at finde det rigtige lån. Med vores omfattende sammenligningstjeneste 
            sparer du både <strong className="text-blue-600">tid og penge</strong> på at finde det bedste lånetilbud.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group relative">
                <div className={`relative overflow-hidden bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                  
                  {/* Top stats badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${benefit.gradient} text-white shadow-lg`}>
                      {benefit.stats}
                    </span>
                  </div>

                  <div className="relative">
                    <dt className="flex items-start gap-4 mb-6">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                      </div>
                    </dt>
                    
                    <dd className="text-base leading-7 text-gray-600 line-height-relaxed">
                      {benefit.description}
                    </dd>
                  </div>

                  {/* Animated border on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50.000+</div>
              <div className="text-sm text-gray-500">Tilfredse kunder</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">23.000 kr</div>
              <div className="text-sm text-gray-500">Gennemsnitlig besparelse</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-500">Låneudbydere</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">5 min</div>
              <div className="text-sm text-gray-500">Ansøgningstid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}