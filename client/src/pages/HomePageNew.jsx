import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import EventCard from '../components/EventCard'
import { formatPrice } from '../lib/events'

function HomePage({ events, isLoading }) {
  const minPrice = events.length > 0 ? Math.min(...events.map((event) => event.price)) : 0
  const totalCities = new Set(events.map((event) => event.city)).size
  const totalCategories = new Set(events.map((event) => event.type)).size

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-heading uppercase tracking-widest text-main mb-4">Welcome to GrabMyShow</p>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            Discover & Book Premium Events
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Your gateway to concerts, movies, sports, comedy, and conferences. Find, compare, and book your favorite events with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="text-base py-6">
              <Link to="/events">Explore All Events</Link>
            </Button>
            <Button asChild variant="neutral" className="text-base py-6">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Statistics - Clean Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black">Platform Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Live Events Card */}
          <Card className="border-2 border-gray-200 rounded-2xl">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs font-heading uppercase text-foreground/60">Live Events</p>
                <h3 className="text-4xl font-black text-main">{events.length}</h3>
                <p className="text-xs text-foreground/50">Active on platform</p>
              </div>
            </CardContent>
          </Card>

          {/* Cities Card */}
          <Card className="border-2 border-gray-200 rounded-2xl">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs font-heading uppercase text-foreground/60">Cities</p>
                <h3 className="text-4xl font-black text-main">{totalCities}</h3>
                <p className="text-xs text-foreground/50">Coverage area</p>
              </div>
            </CardContent>
          </Card>

          {/* Categories Card */}
          <Card className="border-2 border-gray-200 rounded-2xl">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs font-heading uppercase text-foreground/60">Categories</p>
                <h3 className="text-4xl font-black text-main">{totalCategories}</h3>
                <p className="text-xs text-foreground/50">Event types</p>
              </div>
            </CardContent>
          </Card>

          {/* Starting Price Card */}
          <Card className="border-2 border-gray-200 rounded-2xl">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs font-heading uppercase text-foreground/60">Starting At</p>
                <h3 className="text-4xl font-black text-main">Rs {formatPrice(minPrice)}</h3>
                <p className="text-xs text-foreground/50">Per ticket</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us - Clean Feature Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black">Why Choose GrabMyShow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
            <div className="h-2 bg-blue-500"></div>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h3 className="font-heading text-lg">Professional Discovery</h3>
                <p className="text-sm text-foreground/70">Navigate a structured catalog of experiences across city, category, and date with ease.</p>
                <Badge variant="default" className="w-fit">Feature</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
            <div className="h-2 bg-purple-500"></div>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h3 className="font-heading text-lg">Secure Booking</h3>
                <p className="text-sm text-foreground/70">Fast checkout, transparent pricing, and complete booking history for peace of mind.</p>
                <Badge variant="default" className="w-fit">Secure</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
            <div className="h-2 bg-green-500"></div>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h3 className="font-heading text-lg">Premium Experience</h3>
                <p className="text-sm text-foreground/70">Clean design, responsive interface, and consistent experience across all devices.</p>
                <Badge variant="default" className="w-fit">Trusted</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section>
        <Card className="border-2 border-gray-200 rounded-2xl">
          <CardContent className="pt-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="default">Platform Promise</Badge>
                <h2 className="text-3xl font-black">Built for Excellence</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Trust Item 1 */}
                <div className="space-y-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                    <p className="font-heading text-sm">Transparent Pricing</p>
                  </div>
                  <p className="text-xs text-foreground/70">No hidden charges, see all costs upfront</p>
                </div>

                {/* Trust Item 2 */}
                <div className="space-y-2 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
                    <p className="font-heading text-sm">Fast & Secure</p>
                  </div>
                  <p className="text-xs text-foreground/70">Quick checkout with industry-standard security</p>
                </div>

                {/* Trust Item 3 */}
                <div className="space-y-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                    <p className="font-heading text-sm">Always Available</p>
                  </div>
                  <p className="text-xs text-foreground/70">Complete booking history accessible anytime</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild className="flex-1">
                  <Link to="/events">Start Exploring</Link>
                </Button>
                <Button asChild variant="neutral" className="flex-1">
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-700 text-sm text-center">
          Refreshing platform metrics...
        </div>
      )}
    </div>
  )
}

export default HomePage
