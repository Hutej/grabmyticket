import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { AlertCircle, CheckCircle, Info } from 'lucide-react'

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
    <Card>
      <CardHeader>
        <CardTitle>Book Your Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm text-foreground/80">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={onFieldChange}
                  placeholder="Your full name"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input
                  id="contact"
                  required
                  name="contact"
                  value={formData.contact}
                  onChange={onFieldChange}
                  placeholder="Your phone number"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onFieldChange}
                  placeholder="you@example.com"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  required
                  name="city"
                  value={formData.city}
                  onChange={onFieldChange}
                  placeholder="City"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Event Selection Section */}
          <div className="space-y-4 border-t-2 border-border pt-6">
            <h3 className="font-heading text-sm text-foreground/80">Select Event</h3>
            
            <div className="space-y-3">
              <Label>Event Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {typeOptions.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer p-3 border-2 border-border rounded-base hover:bg-secondary-background transition-colors">
                    <input
                      type="radio"
                      name="event_type"
                      value={type}
                      checked={formData.event_type === type}
                      onChange={onFieldChange}
                      disabled={isLoading}
                      className="cursor-pointer"
                    />
                    <span className="text-sm font-heading">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event_name">Event Name</Label>
                <Select
                  value={selectedEvent?.name || ''}
                  onValueChange={(value) => {
                    const event = {
                      target: {
                        name: 'event_name',
                        value: value,
                      }
                    }
                    onFieldChange(event)
                  }}
                  disabled={eventOptions.length === 0 || isLoading}
                >
                  <SelectTrigger id="event_name">
                    <SelectValue placeholder={eventOptions.length === 0 ? 'No events available' : 'Choose event'} />
                  </SelectTrigger>
                  <SelectContent>
                    {eventOptions.map((event) => (
                      <SelectItem key={event.name} value={event.name}>
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tickets">Number of Tickets</Label>
                <Input
                  id="tickets"
                  required
                  min="1"
                  type="number"
                  name="tickets"
                  value={formData.tickets}
                  onChange={onFieldChange}
                  placeholder="1"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Booking Summary Section */}
          <div className="bg-secondary-background border-2 border-border rounded-base p-4 space-y-3">
            <h3 className="font-heading text-sm">Booking Summary</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/70">Event Type:</span>
              <span className="font-heading">{formData.event_type || '—'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/70">Tickets:</span>
              <span className="font-heading">{Math.max(1, Number(formData.tickets) || 1)}</span>
            </div>
            <div className="border-t-2 border-border pt-3 flex items-center justify-between">
              <span className="font-heading">Total Cost:</span>
              <span className="font-heading text-lg text-main">Rs {totalCost}</span>
            </div>
          </div>

          {/* Messages */}
          {formError && (
            <div className="flex items-start gap-3 p-3 bg-red-500/10 border-2 border-red-500 rounded-base">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-600">{formError}</p>
            </div>
          )}

          {statusMessage && (
            <div className="flex items-start gap-3 p-3 bg-green-500/10 border-2 border-green-500 rounded-base">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-green-600">{statusMessage}</p>
            </div>
          )}

          {isLoading && (
            <div className="flex items-start gap-3 p-3 bg-blue-500/10 border-2 border-blue-500 rounded-base">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-600">Loading latest data...</p>
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Confirm Booking'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default BookingForm
