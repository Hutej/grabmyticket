const journeySteps = [
  'Pick your event from concerts, movies, sports, comedy, and conferences.',
  'Compare schedule, location, and pricing before checkout.',
  'Book seats and track all reservations from one dashboard.',
]

function AboutPage() {
  return (
    <section className="route-shell">
      <section className="panel-surface route-header">
        <p className="eyebrow">About GrabMyShow</p>
        <h2 className="section-title">Built for people who never want to miss out</h2>
        <p className="hero-copy">
          GrabMyShow was designed to make event discovery and booking feel instant,
          visual, and simple across every category.
        </p>
      </section>

      <section className="split-grid">
        <article className="panel-surface value-card">
          <h3>Our Mission</h3>
          <p className="muted-copy">
            Bring every kind of live experience into one clean platform where people
            can search, decide, and book without friction.
          </p>
        </article>

        <article className="panel-surface value-card">
          <h3>Our Promise</h3>
          <p className="muted-copy">
            Transparent pricing, quick booking flow, and easy route-based browsing on
            both mobile and desktop.
          </p>
        </article>
      </section>

      <section className="panel-surface">
        <h3 className="section-title">How It Works</h3>
        <div className="step-list">
          {journeySteps.map((step) => (
            <article key={step} className="step-card">
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default AboutPage
