import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { viewIsLoading } from '../_slice/view.slice'
import Home from '../home'
import EventSelection from '../eventSelection'
import FilterPage from '../eventSelection/filterPage'
import SingleEvent from '../singleEvent'
import Menu from '../singleEvent/menu'
import EventDetails from '../eventDetails'
import EventOffers from '../eventOffers/eventOffers'
import BookingMethod from '../bookingMethod'
import UpcomingEvents from '../singleEvent/upcomingEvents'
import Payment from '../payment'
import Register from '../home/register'
import Gallery from '../gallery'
import { Loading } from 'src/components'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  HashRouter,
} from 'react-router-dom'
import { useStyle } from './style'

const Body = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.endsWith('/new')) navigate('/technical-user/new')
    if (pathname.endsWith('/search')) navigate('/search')
    if (pathname.endsWith('/success')) navigate('/success')
    if (pathname === '/') return
    else navigate(pathname)
  }, [])

  return (
    <Routes>
      <Route exact path="/" name="Home Page" element={<Home />} />
      <Route
        exact
        path="/event-selection"
        name="Event Selection"
        element={<EventSelection />}
      />
      <Route exact path="/filter" name="Filter" element={<FilterPage />} />
      <Route
        exact
        path="/single-event"
        name="Single Event"
        element={<SingleEvent />}
      />
      <Route exact path="/menu" name="Menu" element={<Menu />} />
      <Route
        exact
        path="/event-details"
        name="Event Details"
        element={<EventDetails />}
      />
      <Route
        exact
        path="/event-offers"
        name="Event offers"
        element={<EventOffers />}
      />
      <Route
        exact
        path="/booking-method"
        name="Booking Method"
        element={<BookingMethod />}
      />
      <Route exact path="/payment" name="Payment" element={<Payment />} />
      <Route exact path="/register" name="Register" element={<Register />} />
      <Route
        exact
        path="/upcoming-events"
        name="Upcoming Events"
        element={<UpcomingEvents />}
      />
      <Route exact path="/gallery" name="Gallery" element={<Gallery />} />
    </Routes>
  )
}

const App = () => {
  const classes = useStyle()
  const open = useSelector(viewIsLoading)

  return (
    <div className={classes.root}>
      <Loading open={open} />
      <HashRouter>
        <Body />
      </HashRouter>
    </div>
  )
}

export default App
