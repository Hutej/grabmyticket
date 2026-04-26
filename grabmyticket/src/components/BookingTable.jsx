function BookingTable({ bookings, emptyLabel = 'No bookings yet.' }) {
  return (
    <div className="table-wrap">
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>City</th>
            <th>Type</th>
            <th>Event</th>
            <th>Tickets</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="8" className="empty-row">
                {emptyLabel}
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.contact}</td>
                <td>{booking.email}</td>
                <td>{booking.city}</td>
                <td>{booking.event_type}</td>
                <td>{booking.event_name}</td>
                <td>{booking.tickets}</td>
                <td>Rs {booking.total_cost}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default BookingTable
