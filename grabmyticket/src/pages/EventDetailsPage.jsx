import { Link, useParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { formatEventDate, formatPrice } from '../lib/events'

function EventDetailsPage({ events }) {
  const { eventSlug } = useParams()
  const event = events.find((item) => item.slug === eventSlug)

  if (!event) {
    return (
      <section className="route-shell">
        <article className="panel-surface not-found-panel">
          <p className="eyebrow">Event Not Found</p>
          <h2 className="section-title">That event is no longer listed.</h2>
          <p className="muted-copy">Try browsing the full event list for current options.</p>
          <Link className="button-link" to="/events">
            Back to Events
          </Link>
        </article>
      </section>
    )
  }

  const relatedEvents = events
    .filter((item) => item.type === event.type && item.slug !== event.slug)
    .slice(0, 3)

  return (
    <section className="route-shell">
      <section className="panel-surface detail-hero">
        <p className="eyebrow">{event.type}</p>
        <h2 className="section-title">{event.name}</h2>
        <p className="hero-copy">{event.description}</p>

        <div className="detail-grid">
          <article className="stat-card">
            <p>Date</p>
            <strong>{formatEventDate(event.date)}</strong>
          </article>
          <article className="stat-card">
            <p>Time</p>
            <strong>{event.time}</strong>
          </article>
          <article className="stat-card">
            <p>Venue</p>
            <strong>{event.venue}</strong>
          </article>
          <article className="stat-card">
            <p>City</p>
            <strong>{event.city}</strong>
          </article>
        </div>

        <div className="cta-row">
          <span className="event-price">Rs {formatPrice(event.price)} per ticket</span>
          <Link className="button-link" to="/book">
            Book This Event
          </Link>
          <Link className="button-link secondary" to="/events">
            See More Events
          </Link>
        </div>
      </section>

      <section className="panel-surface">
        <h3 className="section-title">Related Picks</h3>
        <div className="event-grid stagger-list">
          {relatedEvents.length === 0 ? (
            <p className="alert info">More events in this category are coming soon.</p>
          ) : (
            relatedEvents.map((item) => <EventCard key={item.slug} event={item} />)
          )}
        </div>
      </section>
    </section>
  )
}

export default EventDetailsPage
