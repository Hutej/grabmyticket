import { Link } from 'react-router-dom'
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
    <section className="route-shell">
      <header className="panel-surface route-header">
        <p className="eyebrow">Ticket Checkout</p>
        <h2 className="section-title">Book your event in one smooth flow</h2>
        <p className="muted-copy">
          Fill details, choose event, and confirm seats. Your bookings appear instantly.
        </p>
      </header>

      <div className="booking-grid">
        <section className="panel-surface">
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
        </section>

        <aside className="panel-surface booking-summary">
          <p className="eyebrow">Live Summary</p>
          {selectedEvent ? (
            <>
              <h3>{selectedEvent.name}</h3>
              <p className="muted-copy">{selectedEvent.description}</p>
              <p>
                <strong>When:</strong> {formatEventDate(selectedEvent.date)} at {selectedEvent.time}
              </p>
              <p>
                <strong>Where:</strong> {selectedEvent.venue}, {selectedEvent.city}
              </p>
              <p>
                <strong>Tickets:</strong> {Math.max(1, Number(formData.tickets) || 1)}
              </p>
              <p>
                <strong>Total:</strong> Rs {formatPrice(totalCost)}
              </p>
              <Link className="button-link small secondary" to={`/events/${selectedEvent.slug}`}>
                View Event Details
              </Link>
            </>
          ) : (
            <p className="muted-copy">Choose an event type to preview details.</p>
          )}
        </aside>
      </div>

      <section className="panel-surface">
        <h3 className="section-title">Recent Bookings</h3>
        <BookingTable bookings={bookings.slice(0, 5)} emptyLabel="Your latest bookings appear here." />
      </section>
    </section>
  )
}

export default BookPage
