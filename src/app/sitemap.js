export default function sitemap() {
  const baseUrl = 'https://www.xn--ln-yia.dk'
  
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/sammenlign', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/guide', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/ansog', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/boliglaan', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/boliglaan/koeb-af-bolig', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/boliglaan/realkredit-vs-banklaan', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/boliglaan/tillaegslaan', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/opkonvertering', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/forbrugslaan', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/forbrugslaan/renter-og-aop', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/billaan', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/laan-penge-hurtigt', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/kviklaan', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/kviklaan/renter', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/viden', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/viden/laaneordbog', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/viden/lovgivning', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/om-os', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/om-os/redaktionel-politik', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/kontakt', priority: 0.6, changeFrequency: 'yearly' },
    { url: '/privatlivspolitik', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/vilkaar', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/sitemap', priority: 0.3, changeFrequency: 'monthly' },
  ]

  return pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
