import { Card, CardContent } from '../components/ui/card'

const journeySteps = [
  'Pick your event from concerts, movies, sports, comedy, and conferences.',
  'Compare schedule, location, and pricing before checkout.',
  'Book seats and track all reservations from one dashboard.',
]

function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-heading uppercase tracking-widest text-main">About GrabMyShow</p>
          <h1 className="text-4xl font-black mt-2">Built for people who never want to miss out</h1>
        </div>
        <p className="text-lg text-foreground/70 max-w-2xl">
          GrabMyShow was designed to make event discovery and booking feel instant,
          visual, and simple across every category.
        </p>
      </section>

      {/* Mission & Promise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="h-2 bg-blue-500"></div>
          <CardContent className="pt-8">
            <h3 className="font-heading text-xl mb-4">Our Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              Bring every kind of live experience into one clean platform where people
              can search, decide, and book without friction.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="h-2 bg-purple-500"></div>
          <CardContent className="pt-8">
            <h3 className="font-heading text-xl mb-4">Our Promise</h3>
            <p className="text-foreground/70 leading-relaxed">
              Transparent pricing, quick booking flow, and easy route-based browsing on
              both mobile and desktop.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-3xl font-black">How It Works</h2>
        <div className="space-y-4">
          {journeySteps.map((step, index) => (
            <Card key={step} className="border-2 border-gray-200 rounded-2xl">
              <CardContent className="pt-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-main text-main-foreground font-heading flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground/70 leading-relaxed py-1">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
