'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/layout/Header'
import { BookOpen, Search } from 'lucide-react'

const terms = [
  { term: 'Afdrag', def: 'Den del af din månedlige ydelse, der går til at nedbringe selve lånebeløbet (restgælden). Adskilt fra renter og gebyrer.' },
  { term: 'Afdragsfrihed', def: 'En periode (typisk op til 10 år) hvor du kun betaler renter og bidrag, men ikke afdrager på lånet. Restgælden forbliver uændret.' },
  { term: 'Balanceprincippet', def: 'Grundprincippet i dansk realkredit: for hvert lån udstedes obligationer med præcis samme vilkår. Det sikrer, at realkreditinstituttet ikke selv påtager sig renterisiko.' },
  { term: 'Bidragssats', def: 'Den løbende betaling til realkreditinstituttet for at administrere dit lån. Beregnes som en procentdel af restgælden og varierer med belåningsgrad og lånetype.' },
  { term: 'Debitorrente', def: 'Den rente du som låntager betaler på dit lån. For realkreditlån svarer den til kuponrenten på de bagvedliggende obligationer.' },
  { term: 'Ejerudgift', def: 'De samlede udgifter ved at eje en bolig: ydelse på lån, ejendomsskat, forsikring, vedligeholdelse og varme.' },
  { term: 'F-kort / F1 / F3 / F5', def: 'Variabelt forrentede realkreditlån med rentetilpasning. Tallet angiver intervallet: F1 tilpasses årligt, F3 hvert 3. år, F5 hvert 5. år. F-kort tilpasses løbende.' },
  { term: 'Fastforrentet lån', def: 'Et realkreditlån med en rente, der er fastsat i hele lånets løbetid (typisk 30 år). Giver fuld sikkerhed mod rentestigninger.' },
  { term: 'Finanstilsynet', def: 'Den danske myndighed, der fører tilsyn med banker, realkreditinstitutter og andre finansielle virksomheder. Sikrer, at de overholder lovgivningen.' },
  { term: 'Fortrydelsesret', def: 'Du har 14 dages fortrydelsesret på forbrugslån ifølge kreditaftaleloven. Ved realkreditlån gælder fortrydelsesretten kun på rådgivningen, ikke selve lånet.' },
  { term: 'Friværdi', def: 'Forskellen mellem din boligs markedsværdi og den samlede gæld i boligen. Positiv friværdi betyder, at boligen er mere værd end gælden.' },
  { term: 'Hovedstol', def: 'Det oprindelige lånebeløb, du optager. Adskilt fra den restgæld, der ændres i takt med afdrag og eventuelle kursjusteringer.' },
  { term: 'Kuponrente', def: 'Den nominelle rente på en realkreditobligation. F.eks. 4% på en 4% obligation. Det er denne rente, du betaler som låntager.' },
  { term: 'Kurs', def: 'Prisen på en obligation udtrykt i procent af pålydende. Kurs 98 betyder, at du får 98 kr. udbetalt for hver 100 kr. du låner.' },
  { term: 'Kursgevinst', def: 'Gevinst ved at indfri et lån til en lavere kurs end det blev optaget til. Skattefri for private boligejere i Danmark.' },
  { term: 'Kurstab', def: 'Tab ved optagelse af lån, når kursen er under 100. Ved kurs 95 er kurstabet 5% af lånebeløbet.' },
  { term: 'Kreditaftaleloven', def: 'Dansk lov der regulerer forbrugslån og kreditaftaler. Fastsætter krav til oplysningspligt, ÅOP-beregning og fortrydelsesret.' },
  { term: 'Kreditvurdering', def: 'Långiverens vurdering af din evne til at betale lånet tilbage. Baseret på indkomst, udgifter, eksisterende gæld og betalingshistorik.' },
  { term: 'Løbetid', def: 'Den samlede periode, lånet løber over. Realkreditlån har typisk 30 års løbetid, forbrugslån 1-15 år.' },
  { term: 'Nedkonvertering', def: 'Omlægning af lån, når renten falder. Du indfrier dit lån til kurs 100 og optager et nyt til lavere rente, hvilket reducerer din ydelse.' },
  { term: 'Obligation', def: 'Et gældsbevis udstedt af et realkreditinstitut. Investorer køber obligationer, og pengene finansierer dit boliglån.' },
  { term: 'Opkonvertering', def: 'Omlægning af lån, når renten stiger og kursen falder. Du køber dine obligationer billigt tilbage og reducerer din restgæld. Gevinsten er skattefri.' },
  { term: 'Pant', def: 'Sikkerhed stillet i en ejendom til sikring af et lån. Realkreditlån har altid 1. prioritets pant i boligen.' },
  { term: 'Renteloft', def: 'Lovmæssig øvre grænse for renten på forbrugslån i Danmark. Fastsat for at beskytte forbrugere mod urimelige renteniveauer.' },
  { term: 'Restgæld', def: 'Det beløb, du til enhver tid skylder på dit lån. Falder i takt med dine afdrag (medmindre du har afdragsfrihed).' },
  { term: 'Rådighedsbeløb', def: 'Det beløb du har tilbage hver måned, når alle faste udgifter (inkl. lån) er betalt. En vigtig faktor i kreditvurderingen.' },
  { term: 'Tinglysning', def: 'Officiel registrering af pantebreve i boligen hos Tinglysningsretten. Tinglysningsafgiften er 1.825 kr. + 1,45% af hovedstolen.' },
  { term: 'Variabel rente', def: 'Rente der tilpasses løbende eller ved faste intervaller (F1, F3, F5). Giver typisk lavere startrente, men med risiko for stigning.' },
  { term: 'Ydelse', def: 'Dit samlede månedlige beløb til långiveren: renter + afdrag + bidrag/gebyrer.' },
  { term: 'ÅOP', def: 'Årlige Omkostninger i Procent. Et lovpligtigt nøgletal der samler ALLE lånets omkostninger i ét tal: rente, gebyrer, bidrag. Altid højere end den nominelle rente. Brug ÅOP til at sammenligne lån.' },
]

export default function LaaneordbogPage() {
  const [search, setSearch] = useState('')
  const filtered = terms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.def.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link><span>/</span>
            <Link href="/viden" className="hover:text-white transition-colors">Viden</Link><span>/</span>
            <span className="text-white font-semibold">Låneordbog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Låneordbog</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8">Over {terms.length} finansielle begreber forklaret i klart, forståeligt sprog</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input type="text" placeholder="Søg efter et begreb..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-900 text-lg border-0 shadow-2xl focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filtered.map((t, i) => (
              <div key={i} id={t.term.toLowerCase().replace(/[\s\/]/g, '-')} className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">{t.term}</h2>
                <p className="text-slate-600 leading-relaxed">{t.def}</p>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">Ingen resultater for &quot;{search}&quot;</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8"><div className="mx-auto max-w-7xl px-4 text-center"><p className="text-xs text-slate-500">&copy; 2025 Lån.dk — Uafhængig vejledning om lån i Danmark.</p></div></footer>
    </div>
  )
}
