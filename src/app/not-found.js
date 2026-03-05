import Link from 'next/link'

export const metadata = {
  title: '404 - Side ikke fundet | Lån.dk',
  description: 'Den side du leder efter kunne ikke findes. Vend tilbage til forsiden for at finde det bedste lån.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Siden blev ikke fundet
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Den side du leder efter eksisterer ikke eller er blevet flyttet. 
          Lad os hjælpe dig med at finde det rigtige lån i stedet!
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🏠 Gå til forsiden
          </Link>
          
          <Link
            href="/sammenlign"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold shadow-lg border border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            ⚡ Sammenlign lån
          </Link>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>Populære sider:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/boliglaan" className="text-blue-600 hover:text-blue-700">Boliglån</Link>
            <Link href="/forbrugslaan" className="text-blue-600 hover:text-blue-700">Forbrugslån</Link>
            <Link href="/smaa-laan" className="text-blue-600 hover:text-blue-700">Små lån</Link>
            <Link href="/guide" className="text-blue-600 hover:text-blue-700">Lånevejledning</Link>
          </div>
        </div>
      </div>
    </div>
  )
}