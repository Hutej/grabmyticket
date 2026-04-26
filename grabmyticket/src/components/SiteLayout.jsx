import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
  { to: '/book', label: 'Booking' },
  { to: '/my-bookings', label: 'Bookings' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout({ theme, onThemeToggle, eventsCount, bookingsCount }) {
  return (
    <div className="site-shell">
      <header className="site-header panel-surface">
        <div className="nav-row">
          <NavLink to="/" className="brand-inline" end>
            <span className="brand-mark" aria-hidden="true">●</span>
            <span>GrabMyShow</span>
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <span className="chip-stat">{eventsCount} events</span>
            <span className="chip-stat">{bookingsCount} bookings</span>
            <button type="button" className="theme-toggle" onClick={onThemeToggle}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
        </div>

        <p className="header-subline">
          Premium event discovery and booking for concerts, movies, sports, comedy, and conferences.
        </p>
      </header>

      <main className="route-content">
        <Outlet />
      </main>

      <footer className="site-footer panel-surface">
        <p>
          GrabMyShow is your one-stop booking destination for concerts, movies,
          sports, comedy, and conferences.
        </p>
        <p>Plan smarter. Book faster. Show up happier.</p>
      </footer>
    </div>
  )
}

export default SiteLayout
