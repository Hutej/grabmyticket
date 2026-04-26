import { Card, CardContent } from '../components/ui/card'
import BookingTable from '../components/BookingTable'

function BookingsPage({ bookings, isLoading, statusMessage }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-heading uppercase tracking-widest text-main">Booking History</p>
          <h1 className="text-4xl font-black mt-2">All your reservations in one place</h1>
        </div>
        <p className="text-foreground/70 max-w-2xl">
          Review upcoming plans and quickly cross-check your event details.
        </p>
      </section>

      {/* Bookings Table */}
      <Card className="border-2 border-gray-200 rounded-2xl">
        <CardContent className="pt-6 space-y-4">
          {isLoading && (
            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-700 text-sm">
              Syncing your bookings...
            </div>
          )}
          {statusMessage && (
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-sm">
              {statusMessage}
            </div>
          )}
          <BookingTable bookings={bookings} emptyLabel="No bookings found yet." />
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingsPage
