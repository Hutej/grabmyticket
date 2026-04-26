import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'

function BookingTable({ bookings, emptyLabel = 'No bookings yet.' }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Event</TableHead>
          <TableHead>Tickets</TableHead>
          <TableHead>Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.length === 0 ? (
          <TableRow>
            <TableCell colSpan="8" className="text-center py-8 text-foreground/70">
              {emptyLabel}
            </TableCell>
          </TableRow>
        ) : (
          bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.name}</TableCell>
              <TableCell>{booking.contact}</TableCell>
              <TableCell>{booking.email}</TableCell>
              <TableCell>{booking.city}</TableCell>
              <TableCell>{booking.event_type}</TableCell>
              <TableCell>{booking.event_name}</TableCell>
              <TableCell>{booking.tickets}</TableCell>
              <TableCell>Rs {booking.total_cost}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default BookingTable
