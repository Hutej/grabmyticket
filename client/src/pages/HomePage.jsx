import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import EventCard from '../components/EventCard'
import { formatPrice } from '../lib/events'

const companyPillars = [
  {
    title: 'Professional Event Discovery',
    text: 'Navigate a structured catalog of experiences across city, category, and date.',
  },
  {
    title: 'Reliable Booking Infrastructure',
    text: 'Fast checkout, transparent pricing, and booking history built for real-world scale.',
  },
  {
    title: 'Brand-Grade Experience',
    text: 'Clean design, responsive UI, and a consistent product journey on every route.',
  },
]

function HomePage({ events, isLoading }) {
  const minPrice = events.length > 0 ? Math.min(...events.map((event) => event.price)) : 0
  const totalCities = new Set(events.map((event) => event.city)).size
  const totalCategories = new Set(events.map((event) => event.type)).size

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-heading uppercase tracking-widest text-main">Professional Event Booking Platform</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              A modern company website for discovering and booking premium events.
            </h1>
          </div>

          <p className="text-lg text-foreground/70 leading-relaxed">
            GrabMyShow helps people discover experiences and move from interest to
            confirmed booking through a clean, production-ready platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link to="/events">Explore Platform</Link>
            </Button>
            <Button asChild variant="neutral">
              <Link to="/about">Company Overview</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/images/home-hero.svg"
            alt="GrabMyShow product overview illustration"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/70 mb-2">Live Events</p>
            <h3 className="text-3xl font-black text-main">{events.length}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/70 mb-2">Active Cities</p>
            <h3 className="text-3xl font-black text-main">{totalCities}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/70 mb-2">Event Categories</p>
            <h3 className="text-3xl font-black text-main">{totalCategories}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/70 mb-2">Starting Price</p>
            <h3 className="text-3xl font-black text-main">Rs {formatPrice(minPrice)}</h3>
          </CardContent>
        </Card>
      </section>

      {/* Value Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companyPillars.map((pillar) => (
          <Card key={pillar.title}>
            <CardContent className="pt-6">
              <h3 className="font-heading text-lg mb-3">{pillar.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{pillar.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Company Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 flex items-center justify-center">
          <img
            src="/images/home-company.svg"
            alt="GrabMyShow trust and quality illustration"
            className="w-full h-auto"
          />
        </div>

        <Card className="order-1 md:order-2">
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-xs font-heading uppercase tracking-widest text-main mb-2">Why Teams Choose GrabMyShow</p>
              <h2 className="text-2xl md:text-3xl font-black">Built like a company product, not a demo page.</h2>
            </div>

            <p className="text-foreground/70">
              The website is structured into independent routes so users can browse,
              evaluate, and book confidently with a predictable journey.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-main font-black">✓</span>
                <span>Dedicated homepage for brand trust and product positioning</span>
              </li>
              <li className="flex gap-2">
                <span className="text-main font-black">✓</span>
                <span>Separate booking route with focused checkout process</span>
              </li>
              <li className="flex gap-2">
                <span className="text-main font-black">✓</span>
                <span>Image-first presentation for events and platform highlights</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link to="/events">See Event Catalog</Link>
              </Button>
              <Button asChild variant="neutral" className="flex-1">
                <Link to="/book">Start Booking Flow</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="p-4 bg-blue-500/10 border-2 border-blue-500 rounded-base text-blue-600 text-sm">
          Refreshing platform metrics...
        </div>
      )}
    </div>
  )
}

export default HomePage
