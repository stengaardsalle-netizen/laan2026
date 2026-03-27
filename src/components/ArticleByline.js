'use client'

import Link from 'next/link'

export default function ArticleByline({ title, description, datePublished = '2025-06-01', dateModified = '2026-03-26', breadcrumbs = [] }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Jesper Jensen",
      "jobTitle": "Grundlægger og CEO",
      "url": "https://www.xn--ln-yia.dk/om-os",
      "sameAs": ["https://www.linkedin.com/in/jesper-jensen-43824327/"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lån.dk ApS",
      "url": "https://www.xn--ln-yia.dk"
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage"
    }
  }

  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Forside", "item": "https://www.xn--ln-yia.dk" },
      ...breadcrumbs.map((bc, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": bc.name,
        "item": `https://www.xn--ln-yia.dk${bc.href}`
      }))
    ]
  } : null

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">JJ</div>
            <div>
              <p className="text-sm font-bold text-slate-900">Skrevet af <Link href="/om-os" className="text-blue-600 hover:text-blue-800 underline">Jesper Jensen</Link></p>
              <p className="text-xs text-slate-500">Grundlægger og CEO, Lån.dk ApS</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Opdateret: {formatDate(dateModified)}</span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Faktatjekket
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
