import { NavLink, Outlet } from 'react-router-dom'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b-2 border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Brand and Navigation Row */}
          <div className="flex items-center justify-between mb-3">
            {/* Brand */}
            <NavLink to="/" className="flex items-center gap-2 font-heading text-lg hover:opacity-80 transition-opacity">
              <span className="text-main text-2xl">●</span>
              <span>GrabMyShow</span>
            </NavLink>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `
                    text-sm font-heading transition-colors
                    ${isActive 
                      ? 'text-main border-b-2 border-main pb-1' 
                      : 'text-foreground/70 hover:text-foreground'
                    }
                  `}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <Badge variant="neutral" className="text-xs">{eventsCount} events</Badge>
                <Badge variant="neutral" className="text-xs">{bookingsCount} bookings</Badge>
              </div>
              <Button 
                variant="neutral" 
                size="sm"
                onClick={onThemeToggle}
                className="text-xs"
              >
                {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'}
              </Button>
            </div>
          </div>

          {/* Subline */}
          <p className="text-xs text-foreground/60">
            Premium event discovery and booking for concerts, movies, sports, comedy, and conferences.
          </p>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-3 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `
                  text-xs px-3 py-2 rounded-base border-2 transition-colors
                  ${isActive 
                    ? 'border-main bg-main text-main-foreground' 
                    : 'border-border hover:bg-secondary-background'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-background py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-foreground/70">
            GrabMyShow is your one-stop booking destination for concerts, movies,
            sports, comedy, and conferences.
          </p>
          <p className="text-sm font-heading text-main">
            Plan smarter. Book faster. Show up happier.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
