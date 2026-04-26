function BookingForm({
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
    <form className="booking-form" onSubmit={onSubmit}>
      <div className="form-grid two-column">
        <label>
          Full Name
          <input
            required
            name="name"
            value={formData.name}
            onChange={onFieldChange}
            placeholder="Your full name"
          />
        </label>

        <label>
          Contact Number
          <input
            required
            name="contact"
            value={formData.contact}
            onChange={onFieldChange}
            placeholder="Your phone number"
          />
        </label>

        <label>
          Email
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={onFieldChange}
            placeholder="you@example.com"
          />
        </label>

        <label>
          City
          <input
            required
            name="city"
            value={formData.city}
            onChange={onFieldChange}
            placeholder="City"
          />
        </label>
      </div>

      <div className="radio-row">
        {typeOptions.map((type) => (
          <label key={type} className="radio-card">
            <input
              type="radio"
              name="event_type"
              value={type}
              checked={formData.event_type === type}
              onChange={onFieldChange}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="form-grid three-column">
        <label>
          Event Name
          <select
            required
            name="event_name"
            value={selectedEvent?.name || ''}
            onChange={onFieldChange}
            disabled={eventOptions.length === 0}
          >
            {eventOptions.length === 0 ? (
              <option value="">No events available</option>
            ) : (
              eventOptions.map((event) => (
                <option key={event.name} value={event.name}>
                  {event.name}
                </option>
              ))
            )}
          </select>
        </label>

        <label>
          Number of Tickets
          <input
            required
            min="1"
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={onFieldChange}
          />
        </label>

        <label>
          Total Cost
          <input readOnly value={`Rs ${totalCost}`} />
        </label>
      </div>

      <button type="submit" className="button-link">
        Confirm Booking
      </button>

      {formError ? <p className="alert error">{formError}</p> : null}
      {isLoading ? <p className="alert info">Loading latest data...</p> : null}
      {statusMessage ? <p className="alert success">{statusMessage}</p> : null}
    </form>
  )
}

export default BookingForm
