import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
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
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-heading uppercase tracking-widest text-main">Event Discovery</p>
            <h1 className="text-3xl md:text-4xl font-black">
              Browse curated events with visual previews.
            </h1>
          </div>

          <p className="text-foreground/70 leading-relaxed">
            Filter by category, compare options, and open each event for full details.
          </p>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by type">
            {typeFilters.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`
                  px-4 py-2 rounded-base border-2 font-heading text-sm transition-all
                  ${activeType === type
                    ? 'border-main bg-main text-main-foreground'
                    : 'border-border bg-secondary-background hover:border-main/50'
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/images/events-hero.svg"
            alt="Event catalog illustration"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="p-4 bg-blue-500/10 border-2 border-blue-500 rounded-base text-blue-600 text-sm">
          Refreshing event catalog...
        </div>
      )}

      {/* Events Grid */}
      <section>
        {filteredEvents.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-foreground/70">No events match this filter yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-main text-main-foreground rounded-base border-2 border-border p-8 text-center space-y-4">
        <h3 className="text-2xl font-black">Ready to lock your seats?</h3>
        <p className="text-main-foreground/80">
          Open the Booking route from the navbar to begin your checkout flow.
        </p>
        <Button asChild variant="noShadow" className="mx-auto">
          <Link to="/book">Open Booking Page</Link>
        </Button>
      </section>
    </div>
  )
}

export default EventsPage
