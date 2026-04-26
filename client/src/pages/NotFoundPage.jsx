import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-lg w-full text-center border-2 border-gray-200 rounded-2xl">
        <CardContent className="pt-12 pb-12 space-y-6">
          <div>
            <p className="text-5xl font-black text-main mb-2">404</p>
            <h1 className="text-3xl font-black">This route does not exist.</h1>
          </div>

          <p className="text-foreground/70">
            The page may have moved. Start again from home or browse live events.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild className="flex-1">
              <Link to="/">Go Home</Link>
            </Button>
            <Button asChild variant="neutral" className="flex-1">
              <Link to="/events">Browse Events</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFoundPage
