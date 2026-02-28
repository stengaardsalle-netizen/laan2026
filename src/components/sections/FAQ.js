'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Hvad er ÅOP, og hvorfor er det vigtigt?',
    answer: 'ÅOP (Årlige Omkostninger i Procent) viser de samlede omkostninger ved et lån, inklusive renter og alle gebyrer. Det gør det nemt at sammenligne forskellige lånetilbud, da ÅOP giver et komplet billede af lånets reelle pris.'
  },
  {
    question: 'Hvor hurtigt kan jeg få godkendt et lån?',
    answer: 'Det afhænger af lånetypen. Kviklån kan ofte godkendes og udbetales samme dag, mens forbrugslån typisk tager 1-3 dage. Boliglån kan tage flere uger på grund af omfattende dokumentation og vurdering.'
  },
  {
    question: 'Påvirker en låneansøgning min kreditværdighed?',
    answer: 'Ja, hver låneansøgning registreres i dit kreditsystem og kan påvirke din kreditværdighed midlertidigt. Derfor er det bedst at sammenligne tilbud først og kun ansøge hos de låneudbydere, hvor du er mest interesseret.'
  },
  {
    question: 'Kan jeg betale mit lån af før tid?',
    answer: 'De fleste lån kan indfries før tid, men der kan være forbundet gebyrer med førtidsindfrielse. Tjek altid vilkårene i din låneaftale, da dette varierer mellem forskellige låneudbydere.'
  },
  {
    question: 'Hvad sker der, hvis jeg ikke kan betale mit lån?',
    answer: 'Hvis du får betalingsproblemer, er det vigtigt at kontakte din låneudbyder hurtigst muligt. Mange långivere tilbyder løsninger som afdragsfrihed eller ændrede betalingsplaner. Udebliven betaling kan føre til inkasso og påvirke din kreditværdighed negativt.'
  },
  {
    question: 'Er jeres sammenligningsservice gratis?',
    answer: 'Ja, vores sammenligningsservice er helt gratis at bruge. Vi får provision fra låneudbyderne, hvis du vælger at optage et lån gennem os, men det påvirker ikke de vilkår, du tilbydes.'
  },
  {
    question: 'Hvilke dokumenter skal jeg bruge for at ansøge om et lån?',
    answer: 'Typisk skal du bruge lønsedler, årsopgørelse, kontoudtog og legitimation. For boliglån kræves også ejendomsvurdering og købsaftale. De specifikke krav varierer mellem låneudbydere og lånetyper.'
  },
  {
    question: 'Hvad er forskellen på fast og variabel rente?',
    answer: 'Fast rente forbliver uændret gennem hele låneperioden, hvilket giver forudsigelighed. Variabel rente kan ændre sig baseret på markedsrenter, hvilket kan være en fordel hvis renten falder, men også en risiko hvis den stiger.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ofte stillede spørgsmål
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find svar på de mest almindelige spørgsmål om lån og vores service.
            </p>
          </div>
          
          <div className="mt-16">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg"
                >
                  <dt>
                    <button
                      className="flex w-full items-start justify-between text-left px-6 py-6 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => toggleItem(index)}
                    >
                      <span>{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openItems.includes(index) ? (
                          <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openItems.includes(index) && (
                    <dd className="px-6 pb-6">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}