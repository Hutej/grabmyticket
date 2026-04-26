import { useEffect, useMemo, useState } from 'react'
import { API_BASE, fallbackEvents, normalizeEvents } from '../lib/events'

function createInitialFormState(events) {
  const firstEvent = events[0] || fallbackEvents[0]

  return {
    name: '',
    contact: '',
    email: '',
    city: '',
    event_type: firstEvent.type,
    event_name: firstEvent.name,
    tickets: 1,
  }
}

export function useTicketingData() {
  const [events, setEvents] = useState(fallbackEvents)
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [statusMessage, setStatusMessage] = useState('')
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState(() => createInitialFormState(fallbackEvents))

  const typeOptions = useMemo(
    () => [...new Set(events.map((event) => event.type))],
    [events],
  )

  const eventOptions = useMemo(
    () => events.filter((event) => event.type === formData.event_type),
    [events, formData.event_type],
  )

  const selectedEvent = useMemo(
    () =>
      eventOptions.find((event) => event.name === formData.event_name) ||
      eventOptions[0] ||
      null,
    [eventOptions, formData.event_name],
  )

  const totalCost = (selectedEvent?.price || 0) * Number(formData.tickets || 0)

  useEffect(() => {
    void loadInitialData()
  }, [])

  useEffect(() => {
    if (typeOptions.length === 0) {
      return
    }

    if (!typeOptions.includes(formData.event_type)) {
      setFormData((previous) => ({
        ...previous,
        event_type: typeOptions[0],
      }))
    }
  }, [typeOptions, formData.event_type])

  useEffect(() => {
    if (eventOptions.length === 0) {
      return
    }

    const selectedStillExists = eventOptions.some(
      (event) => event.name === formData.event_name,
    )

    if (!selectedStillExists) {
      setFormData((previous) => ({
        ...previous,
        event_name: eventOptions[0].name,
      }))
    }
  }, [eventOptions, formData.event_name])

  async function loadInitialData() {
    setIsLoading(true)
    setStatusMessage('')

    try {
      const [eventsResponse, bookingsResponse] = await Promise.all([
        fetch(`${API_BASE}/events`),
        fetch(`${API_BASE}/bookings`),
      ])

      if (!eventsResponse.ok || !bookingsResponse.ok) {
        throw new Error('API returned an unexpected response.')
      }

      const eventData = await eventsResponse.json()
      const bookingData = await bookingsResponse.json()

      const normalizedEvents = normalizeEvents(eventData)
      setEvents(normalizedEvents)
      setBookings(Array.isArray(bookingData) ? bookingData : [])
    } catch {
      setEvents(fallbackEvents)
      setBookings([])
      setStatusMessage('Backend is offline right now, so demo events are being shown.')
    } finally {
      setIsLoading(false)
    }
  }

  function onFieldChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: name === 'tickets' ? Number(value || 0) : value,
    }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    setFormError('')
    setStatusMessage('')

    const payload = {
      ...formData,
      event_name: selectedEvent?.name || formData.event_name,
      tickets: Math.max(1, Number(formData.tickets) || 1),
    }

    try {
      const response = await fetch(`${API_BASE}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      let responseBody = {}
      try {
        responseBody = await response.json()
      } catch {
        responseBody = {}
      }

      if (!response.ok) {
        throw new Error(responseBody.detail || 'Could not create booking.')
      }

      const bookingRecord = {
        ...responseBody,
        id:
          responseBody.id ||
          `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        total_cost:
          responseBody.total_cost || payload.tickets * (selectedEvent?.price || 0),
      }

      setBookings((previous) => [bookingRecord, ...previous])
      setFormData((previous) => ({
        ...previous,
        name: '',
        contact: '',
        email: '',
        city: '',
        tickets: 1,
      }))
      setStatusMessage('Booking added successfully.')
    } catch (error) {
      setFormError(error.message || 'Could not create booking.')
    }
  }

  return {
    events,
    bookings,
    isLoading,
    statusMessage,
    formError,
    formData,
    typeOptions,
    eventOptions,
    selectedEvent,
    totalCost,
    onFieldChange,
    onSubmit,
    refreshData: loadInitialData,
  }
}
