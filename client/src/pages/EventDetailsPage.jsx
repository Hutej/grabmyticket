import { Link, useParams } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import EventCard from '../components/EventCard'
import { formatEventDate, formatPrice } from '../lib/events'

function EventDetailsPage({ events }) {
  const { eventSlug } = useParams()
  const event = events.find((item) => item.slug === eventSlug)

  if (!event) {
    return (
      <div>
        <Card className="text-center">
          <CardContent className="pt-12 pb-12 space-y-4">
            <p className="text-xs font-heading uppercase tracking-widest text-main">Event Not Found</p>
            <h2 className="text-3xl font-black">That event is no longer listed.</h2>
            <p className="text-foreground/70">Try browsing the full event list for current options.</p>
            <Button asChild className="mx-auto">
              <Link to="/events">Back to Events</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const relatedEvents = events
    .filter((item) => item.type === event.type && item.slug !== event.slug)
    .slice(0, 3)

  return (
    <div className="space-y-12">
      {/* Event Hero */}
      <Card className="border-2 border-gray-200 rounded-2xl">
        <CardContent className="pt-8 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-heading uppercase tracking-widest text-main">{event.type}</p>
            <h1 className="text-4xl font-black">{event.name}</h1>
            <p className="text-lg text-foreground/70">{event.description}</p>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t-2 border-gray-200 pt-6">
            <div className="space-y-1 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-foreground/60 font-heading">Date</p>
              <p className="font-heading text-sm">{formatEventDate(event.date)}</p>
            </div>
            <div className="space-y-1 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs text-foreground/60 font-heading">Time</p>
              <p className="font-heading text-sm">{event.time}</p>
            </div>
            <div className="space-y-1 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-xs text-foreground/60 font-heading">Venue</p>
              <p className="font-heading text-sm">{event.venue}</p>
            </div>
            <div className="space-y-1 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-xs text-foreground/60 font-heading">City</p>
              <p className="font-heading text-sm">{event.city}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 border-t-2 border-gray-200 pt-6 items-center">
            <div className="text-2xl font-black text-main">Rs {formatPrice(event.price)}</div>
            <Button asChild className="flex-1">
              <Link to="/book">Book This Event</Link>
            </Button>
            <Button asChild variant="neutral" className="flex-1">
              <Link to="/events">See More Events</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Events */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black">Related Picks</h2>
        {relatedEvents.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-foreground/70">
              More events in this category are coming soon.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedEvents.map((item) => (
              <EventCard key={item.slug} event={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default EventDetailsPage
