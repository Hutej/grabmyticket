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
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs font-heading uppercase tracking-widest text-main">Browse Events</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Discover Curated Events
          </h1>
        </div>

        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
          Filter by your favorite category, compare events, and find exactly what you're looking for. From concerts to conferences, we've got something for everyone.
        </p>

        {/* Type Filters */}
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter events by type">
          {typeFilters.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={`
                px-6 py-3 rounded-xl font-heading text-sm font-semibold transition-all duration-200 border-2
                ${activeType === type
                  ? 'bg-main text-main-foreground border-main shadow-lg'
                  : 'bg-white text-foreground hover:bg-gray-50 border-gray-200'
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-700 text-sm text-center">
          Refreshing event catalog...
        </div>
      )}

      {/* Events Grid */}
      <section>
        {filteredEvents.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <div className="space-y-4">
                <p className="text-3xl font-black text-foreground/30">∅</p>
                <p className="text-foreground/70 font-heading">No events available in this category</p>
                <p className="text-sm text-foreground/60">Try selecting a different category or check back soon</p>
              </div>
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
      <section>
        <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <CardContent className="pt-8">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-black">Ready to Book?</h3>
                <p className="text-foreground/70 max-w-lg mx-auto">
                  Secure your tickets now and get ready for an unforgettable experience. Our booking process is fast, simple, and secure.
                </p>
              </div>
              <Button asChild className="mx-auto text-base py-6">
                <Link to="/book">
                  Open Booking Page
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default EventsPage
