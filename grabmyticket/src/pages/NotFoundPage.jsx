import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="route-shell">
      <article className="panel-surface not-found-panel">
        <p className="eyebrow">404</p>
        <h2 className="section-title">This route does not exist.</h2>
        <p className="muted-copy">
          The page may have moved. Start again from home or browse live events.
        </p>
        <div className="cta-row">
          <Link className="button-link" to="/">
            Go Home
          </Link>
          <Link className="button-link secondary" to="/events">
            Browse Events
          </Link>
        </div>
      </article>
    </section>
  )
}

export default NotFoundPage
