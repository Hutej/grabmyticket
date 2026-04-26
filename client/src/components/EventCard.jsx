import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { formatEventDate, formatPrice } from '../lib/events'

function EventCard({ event }) {
  return (
    <Card className="flex flex-col overflow-hidden border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Clean header with event type badge */}
      <div className="px-6 pt-6 pb-4 border-b-2 border-gray-100 flex items-start justify-between">
        <div>
          <h3 className="font-heading text-xl mb-1">{event.name}</h3>
          <p className="text-sm text-foreground/60">{event.description}</p>
        </div>
        <Badge variant="default" className="flex-shrink-0 ml-4">{event.type}</Badge>
      </div>

      {/* Event details - clean layout */}
      <CardContent className="pt-6 space-y-4">
        {/* Status items with indicators */}
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="font-heading text-sm">{formatEventDate(event.date)}</span>
            </div>
            <span className="text-xs font-heading text-blue-700 border border-blue-700 rounded px-2 py-1">{event.time}</span>
          </div>

          <div className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="font-heading text-sm">{event.venue}</span>
            </div>
            <span className="text-xs font-heading text-purple-700 border border-purple-700 rounded px-2 py-1">{event.city}</span>
          </div>
        </div>

        {/* Price display */}
        <div className="pt-2 grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-lg font-black text-main">Rs {formatPrice(event.price)}</p>
            <p className="text-xs text-foreground/60 mt-1">per ticket</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs font-heading text-foreground/60">Category</p>
            <p className="text-sm font-heading text-foreground mt-1">{event.type}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs font-heading text-foreground/60">City</p>
            <p className="text-sm font-heading text-foreground mt-1">{event.city}</p>
          </div>
        </div>
      </CardContent>

      {/* Footer with action button */}
      <CardFooter className="border-t-2 border-gray-100 pt-4 px-6 pb-6">
        <Button asChild className="w-full justify-center py-3">
          <Link to={`/events/${event.slug}`}>
            View Event Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default EventCard
