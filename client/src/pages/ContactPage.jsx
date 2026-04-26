import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { CheckCircle } from 'lucide-react'

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-heading uppercase tracking-widest text-main">Contact Us</p>
          <h1 className="text-4xl font-black mt-2">Need help with bookings?</h1>
        </div>
        <p className="text-foreground/70 max-w-2xl">
          Send us a quick message and our support team will get back to you.
        </p>
      </section>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-2 border-gray-200 rounded-2xl">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      name="name"
                      placeholder="Your name"
                      disabled={isSubmitted}
                      className="border-2 border-gray-200 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      disabled={isSubmitted}
                      className="border-2 border-gray-200 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help"
                    disabled={isSubmitted}
                    className="resize-none border-2 border-gray-200 bg-white"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitted}>
                  Send Message
                </Button>

                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-600">
                      Thanks! We will reach out to you shortly.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Support Info Sidebar */}
        <Card className="h-fit border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <CardHeader>
            <CardTitle>Support Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-xs text-foreground/60 uppercase font-heading">Email</p>
              <a href="mailto:support@grabmyshow.in" className="font-heading text-main hover:underline">
                support@grabmyshow.in
              </a>
            </div>

            <div>
              <p className="text-xs text-foreground/60 uppercase font-heading">Phone</p>
              <a href="tel:+919876543210" className="font-heading text-main hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div>
              <p className="text-xs text-foreground/60 uppercase font-heading">Hours</p>
              <p className="font-heading">Mon-Sat, 9:00 AM to 9:00 PM</p>
            </div>

            <div className="border-t-2 border-gray-200 pt-6">
              <p className="text-sm text-foreground/70">
                For urgent booking issues, include your event name and contact number.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage
