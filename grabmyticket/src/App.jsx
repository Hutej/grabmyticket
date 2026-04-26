import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout'
import { useTicketingData } from './hooks/useTicketingData'
import { getInitialTheme, THEME_KEY } from './lib/events'
import AboutPage from './pages/AboutPage'
import BookingsPage from './pages/BookingsPage'
import BookPage from './pages/BookPage'
import ContactPage from './pages/ContactPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const ticketingData = useTicketingData()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const bookingPageProps = {
    bookings: ticketingData.bookings,
    formData: ticketingData.formData,
    typeOptions: ticketingData.typeOptions,
    eventOptions: ticketingData.eventOptions,
    selectedEvent: ticketingData.selectedEvent,
    totalCost: ticketingData.totalCost,
    formError: ticketingData.formError,
    isLoading: ticketingData.isLoading,
    statusMessage: ticketingData.statusMessage,
    onFieldChange: ticketingData.onFieldChange,
    onSubmit: ticketingData.onSubmit,
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SiteLayout
              theme={theme}
              onThemeToggle={() =>
                setTheme((previous) => (previous === 'light' ? 'dark' : 'light'))
              }
              eventsCount={ticketingData.events.length}
              bookingsCount={ticketingData.bookings.length}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                events={ticketingData.events}
                isLoading={ticketingData.isLoading}
              />
            }
          />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route
            path="events"
            element={
              <EventsPage
                events={ticketingData.events}
                isLoading={ticketingData.isLoading}
              />
            }
          />
          <Route
            path="events/:eventSlug"
            element={<EventDetailsPage events={ticketingData.events} />}
          />
          <Route path="book" element={<BookPage {...bookingPageProps} />} />
          <Route
            path="my-bookings"
            element={
              <BookingsPage
                bookings={ticketingData.bookings}
                isLoading={ticketingData.isLoading}
                statusMessage={ticketingData.statusMessage}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
