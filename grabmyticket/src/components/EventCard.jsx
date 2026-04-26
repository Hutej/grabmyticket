import { Link } from 'react-router-dom'
import { formatEventDate, formatPrice } from '../lib/events'

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-image-wrap">
        <img
          className="event-image"
          src={event.image}
          alt={`${event.name} poster`}
          loading="lazy"
        />
        <div className="event-card-top">
          <span className="tag-chip">{event.type}</span>
          <p className="event-city">{event.city}</p>
        </div>
      </div>

      <div className="event-body">
        <h3>{event.name}</h3>
        <p className="muted-copy">{event.description}</p>

        <div className="event-meta">
          <span>{formatEventDate(event.date)}</span>
          <span>{event.time}</span>
          <span>{event.venue}</span>
        </div>

        <div className="event-actions">
          <strong className="event-price">Rs {formatPrice(event.price)}</strong>
          <Link className="button-link small" to={`/events/${event.slug}`}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default EventCard
