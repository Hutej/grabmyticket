import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

function EventsPage({ events, isLoading }) {
  const [activeType, setActiveType] = useState('All')

  const typeFilters = useMemo(
    () => ['All', ...new Set(events.map((event) => event.type))],
    [events],
  )

  const filteredEvents = useMemo(() => {
    if (activeType === 'All') {
      return events
    }

    return events.filter((event) => event.type === activeType)
  }, [activeType, events])

  return (
    <section className="route-shell">
      <section className="panel-surface catalog-hero">
        <div className="catalog-hero-copy">
          <p className="eyebrow">Event Discovery</p>
          <h2 className="section-title">Browse curated events with visual previews.</h2>
          <p className="muted-copy">
            Filter by category, compare options, and open each event for full details.
          </p>

          <div className="type-filter" role="tablist" aria-label="Filter events by type">
            {typeFilters.map((type) => (
              <button
                key={type}
                type="button"
                className={`chip-button${activeType === type ? ' active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-hero-media">
          <img
            src="/images/events-hero.svg"
            alt="Event catalog illustration"
          />
        </div>
      </section>

      <section className="panel-surface">

        {isLoading ? <p className="alert info">Refreshing event catalog...</p> : null}

        <div className="event-grid stagger-list">
          {filteredEvents.length === 0 ? (
            <p className="alert info">No events match this filter yet.</p>
          ) : (
            filteredEvents.map((event) => <EventCard key={event.slug} event={event} />)
          )}
        </div>
      </section>

      <section className="panel-surface route-banner">
        <h3>Ready to lock your seats?</h3>
        <p className="muted-copy">
          Open the Booking route from the navbar to begin your checkout flow.
        </p>
        <Link className="button-link" to="/book">
          Open Booking Page
        </Link>
      </section>
    </section>
  )
}

export default EventsPage
