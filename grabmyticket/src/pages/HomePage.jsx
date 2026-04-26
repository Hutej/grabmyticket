import { Link } from 'react-router-dom'
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
    <section className="route-shell">
      <section className="company-hero panel-surface">
        <div className="company-hero-copy">
          <p className="eyebrow">Professional Event Booking Platform</p>
          <h2 className="hero-title">
            A modern company website for discovering and booking premium events.
          </h2>
          <p className="hero-copy">
            GrabMyShow helps people discover experiences and move from interest to
            confirmed booking through a clean, production-ready platform.
          </p>

          <div className="cta-row">
            <Link className="button-link" to="/events">
              Explore Platform
            </Link>
            <Link className="button-link secondary" to="/about">
              Company Overview
            </Link>
          </div>
        </div>

        <div className="hero-media-card">
          <img
            src="/images/home-hero.svg"
            alt="GrabMyShow product overview illustration"
          />
        </div>
      </section>

      <section className="metrics-grid">
        <article className="panel-surface metric-card">
          <p>Live Events</p>
          <h3>{events.length}</h3>
        </article>
        <article className="panel-surface metric-card">
          <p>Active Cities</p>
          <h3>{totalCities}</h3>
        </article>
        <article className="panel-surface metric-card">
          <p>Event Categories</p>
          <h3>{totalCategories}</h3>
        </article>
        <article className="panel-surface metric-card">
          <p>Starting Price</p>
          <h3>Rs {formatPrice(minPrice)}</h3>
        </article>
      </section>

      <section className="split-grid">
        {companyPillars.map((pillar) => (
          <article key={pillar.title} className="panel-surface value-card">
            <h3>{pillar.title}</h3>
            <p className="muted-copy">{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="panel-surface company-story-section">
        <div className="company-story-copy">
          <p className="eyebrow">Why Teams Choose GrabMyShow</p>
          <h2 className="section-title">Built like a company product, not a demo page.</h2>
          <p className="muted-copy">
            The website is structured into independent routes so users can browse,
            evaluate, and book confidently with a predictable journey.
          </p>

          <ul className="story-points">
            <li>Dedicated homepage for brand trust and product positioning</li>
            <li>Separate booking route with focused checkout process</li>
            <li>Image-first presentation for events and platform highlights</li>
          </ul>

          <div className="cta-row">
            <Link className="button-link" to="/events">
              See Event Catalog
            </Link>
            <Link className="button-link secondary" to="/book">
              Start Booking Flow
            </Link>
          </div>
        </div>

        <div className="company-story-media">
          <img
            src="/images/home-company.svg"
            alt="GrabMyShow trust and quality illustration"
          />
        </div>
      </section>

      {isLoading ? <p className="alert info">Refreshing platform metrics...</p> : null}
    </section>
  )
}

export default HomePage
