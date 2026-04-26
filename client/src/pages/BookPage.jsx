import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import BookingForm from '../components/BookingForm'
import BookingTable from '../components/BookingTable'
import { formatEventDate, formatPrice } from '../lib/events'

function BookPage({
  bookings,
  formData,
  typeOptions,
  eventOptions,
  selectedEvent,
  totalCost,
  formError,
  isLoading,
  statusMessage,
  onFieldChange,
  onSubmit,
}) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-heading uppercase tracking-widest text-main">Ticket Checkout</p>
          <h1 className="text-4xl font-black mt-2">Book your event in one smooth flow</h1>
        </div>
        <p className="text-foreground/70 max-w-2xl">
          Fill details, choose event, and confirm seats. Your bookings appear instantly.
        </p>
      </section>

      {/* Booking Section - Form + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form - takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <BookingForm
            formData={formData}
            typeOptions={typeOptions}
            eventOptions={eventOptions}
            selectedEvent={selectedEvent}
            totalCost={totalCost}
            formError={formError}
            isLoading={isLoading}
            statusMessage={statusMessage}
            onFieldChange={onFieldChange}
            onSubmit={onSubmit}
          />
        </div>

        {/* Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Live Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedEvent ? (
              <>
                <div>
                  <h3 className="font-heading text-lg">{selectedEvent.name}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{selectedEvent.description}</p>
                </div>

                <div className="space-y-2 text-sm border-t-2 border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">When:</span>
                    <span className="font-heading">{formatEventDate(selectedEvent.date)} at {selectedEvent.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Where:</span>
                    <span className="font-heading">{selectedEvent.venue}, {selectedEvent.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Tickets:</span>
                    <span className="font-heading">{Math.max(1, Number(formData.tickets) || 1)}</span>
                  </div>
                </div>

                <div className="border-t-2 border-border pt-4 space-y-2">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-heading">Total:</span>
                    <span className="font-heading text-main text-xl">Rs {formatPrice(totalCost)}</span>
                  </div>
                </div>

                <Button asChild variant="neutral" className="w-full text-xs">
                  <Link to={`/events/${selectedEvent.slug}`}>
                    View Event Details
                  </Link>
                </Button>
              </>
            ) : (
              <p className="text-foreground/70 text-sm">Choose an event type to preview details.</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black">Recent Bookings</h2>
        <Card>
          <CardContent className="pt-6">
            <BookingTable bookings={bookings.slice(0, 5)} emptyLabel="Your latest bookings appear here." />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default BookPage
