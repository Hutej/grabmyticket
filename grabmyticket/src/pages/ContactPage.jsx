import { useState } from 'react'

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="route-shell">
      <header className="panel-surface route-header">
        <p className="eyebrow">Contact Us</p>
        <h2 className="section-title">Need help with bookings?</h2>
        <p className="muted-copy">
          Send us a quick message and our support team will get back to you.
        </p>
      </header>

      <div className="contact-grid">
        <section className="panel-surface">
          <form className="booking-form" onSubmit={onSubmit}>
            <div className="form-grid two-column">
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>

              <label>
                Email
                <input required type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>

            <label>
              Message
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell us how we can help"
              />
            </label>

            <button type="submit" className="button-link">
              Send Message
            </button>

            {isSubmitted ? (
              <p className="alert success">Thanks! We will reach out to you shortly.</p>
            ) : null}
          </form>
        </section>

        <aside className="panel-surface booking-summary">
          <h3>Support Channels</h3>
          <p>
            <strong>Email:</strong> support@grabmyshow.in
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Hours:</strong> Mon-Sat, 9:00 AM to 9:00 PM
          </p>
          <p className="muted-copy">
            For urgent booking issues, include your event name and contact number.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default ContactPage
