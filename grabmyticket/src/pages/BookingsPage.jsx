import BookingTable from '../components/BookingTable'

function BookingsPage({ bookings, isLoading, statusMessage }) {
  return (
    <section className="route-shell">
      <header className="panel-surface route-header">
        <p className="eyebrow">Booking History</p>
        <h2 className="section-title">All your reservations in one place</h2>
        <p className="muted-copy">
          Review upcoming plans and quickly cross-check your event details.
        </p>
      </header>

      <section className="panel-surface">
        {isLoading ? <p className="alert info">Syncing your bookings...</p> : null}
        {statusMessage ? <p className="alert info">{statusMessage}</p> : null}
        <BookingTable bookings={bookings} emptyLabel="No bookings found yet." />
      </section>
    </section>
  )
}

export default BookingsPage
