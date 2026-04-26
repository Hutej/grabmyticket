import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { formatEventDate, formatPrice } from '../lib/events'

function EventCard({ event }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative w-full overflow-hidden bg-secondary-background">
        <img
          src={event.image}
          alt={`${event.name} poster`}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant="default">{event.type}</Badge>
          <Badge variant="neutral">{event.city}</Badge>
        </div>
      </div>

      <CardContent className="flex-1">
        <h3 className="font-heading text-lg mt-4 mb-2">{event.name}</h3>
        <p className="text-sm text-foreground/70 mb-3">{event.description}</p>

        <div className="space-y-1 text-xs text-foreground/60">
          <div className="flex flex-wrap gap-2">
            <span>📅 {formatEventDate(event.date)}</span>
            <span>🕐 {event.time}</span>
            <span>📍 {event.venue}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2 border-t-2 border-border pt-4 px-6">
        <span className="font-heading text-main">Rs {formatPrice(event.price)}</span>
        <Button asChild size="sm">
          <Link to={`/events/${event.slug}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default EventCard
