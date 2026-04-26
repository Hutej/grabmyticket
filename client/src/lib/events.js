export const API_BASE = 'http://127.0.0.1:8000/api'
export const THEME_KEY = 'grabmyshow-theme'

const categoryImageByType = {
  Concert: '/images/concert.svg',
  Movie: '/images/movie.svg',
  Sports: '/images/sports.svg',
  Comedy: '/images/comedy.svg',
  Conference: '/images/conference.svg',
}

export function getCategoryImage(type) {
  return categoryImageByType[type] || '/images/event-default.svg'
}

export const fallbackEvents = [
  {
    id: 1,
    slug: 'sunburn-beach-fest',
    type: 'Concert',
    name: 'Sunburn Beach Fest',
    city: 'Goa',
    venue: 'Anjuna Arena',
    date: '2026-06-14',
    time: '06:30 PM',
    price: 1499,
    image: '/images/concert.svg',
    description:
      'An open-air beach concert with indie, EDM, and regional fusion artists.',
  },
  {
    id: 2,
    slug: 'midnight-premiere-gala',
    type: 'Movie',
    name: 'Midnight Premiere Gala',
    city: 'Mumbai',
    venue: 'Regal Screen 7',
    date: '2026-05-08',
    time: '11:45 PM',
    price: 699,
    image: '/images/movie.svg',
    description:
      'First-day first-show access with exclusive fan memorabilia and lounge entry.',
  },
  {
    id: 3,
    slug: 'champions-derby-night',
    type: 'Sports',
    name: 'Champions Derby Night',
    city: 'Bengaluru',
    venue: 'Kanteerava Stadium',
    date: '2026-07-03',
    time: '07:00 PM',
    price: 1799,
    image: '/images/sports.svg',
    description:
      'A prime-time league clash with pre-match entertainment and fan activation zones.',
  },
  {
    id: 4,
    slug: 'laugh-lab-live',
    type: 'Comedy',
    name: 'Laugh Lab Live',
    city: 'Pune',
    venue: 'The Punchline Club',
    date: '2026-05-22',
    time: '08:15 PM',
    price: 799,
    image: '/images/comedy.svg',
    description:
      'A rapid-fire stand-up special featuring rising comics and crowd-work sets.',
  },
  {
    id: 5,
    slug: 'future-stack-summit',
    type: 'Conference',
    name: 'Future Stack Summit',
    city: 'Hyderabad',
    venue: 'HITEX Convention Hall',
    date: '2026-08-19',
    time: '09:30 AM',
    price: 2499,
    image: '/images/conference.svg',
    description:
      'Tech and product conference focused on AI, cloud-native systems, and UX strategy.',
  },
  {
    id: 6,
    slug: 'retro-bollywood-night',
    type: 'Concert',
    name: 'Retro Bollywood Night',
    city: 'Delhi',
    venue: 'Nehru Open Grounds',
    date: '2026-09-01',
    time: '07:30 PM',
    price: 1199,
    image: '/images/concert.svg',
    description:
      'A nostalgic sing-along concert celebrating classic tracks and cinematic nostalgia.',
  },
  {
    id: 7,
    slug: 'legends-vs-rivals-cup',
    type: 'Sports',
    name: 'Legends vs Rivals Cup',
    city: 'Chennai',
    venue: 'Marina Sports Park',
    date: '2026-10-11',
    time: '06:00 PM',
    price: 1399,
    image: '/images/sports.svg',
    description:
      'A showcase tournament featuring fan-favorite players and all-star moments.',
  },
  {
    id: 8,
    slug: 'creator-economy-forum',
    type: 'Conference',
    name: 'Creator Economy Forum',
    city: 'Jaipur',
    venue: 'Pink City Expo Centre',
    date: '2026-11-07',
    time: '10:00 AM',
    price: 1599,
    image: '/images/conference.svg',
    description:
      'A practical conference for creators, marketers, and founders scaling digital brands.',
  },
]

export function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function normalizeEvents(rawEvents) {
  if (!Array.isArray(rawEvents) || rawEvents.length === 0) {
    return fallbackEvents
  }

  return rawEvents.map((rawEvent, index) => {
    const template = fallbackEvents[index % fallbackEvents.length]
    const name = rawEvent.name || template.name
    const parsedPrice = Number(rawEvent.price)

    return {
      ...template,
      ...rawEvent,
      id: rawEvent.id ?? index + 1,
      name,
      slug: rawEvent.slug || slugify(name) || template.slug,
      type: rawEvent.type || template.type,
      price: Number.isFinite(parsedPrice) ? parsedPrice : template.price,
      image:
        rawEvent.image || getCategoryImage(rawEvent.type || template.type) || template.image,
      city: rawEvent.city || template.city,
      venue: rawEvent.venue || template.venue,
      date: rawEvent.date || template.date,
      time: rawEvent.time || template.time,
      description: rawEvent.description || template.description,
    }
  })
}

export function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

export function formatPrice(amount) {
  const safeAmount = Number(amount) || 0
  return new Intl.NumberFormat('en-IN').format(safeAmount)
}

export function formatEventDate(isoDate) {
  if (!isoDate) {
    return 'Date TBA'
  }

  const parsed = new Date(isoDate)
  if (Number.isNaN(parsed.getTime())) {
    return isoDate
  }

  return parsed.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
