import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { viewIsLoading } from '../_slice/view.slice'
import Home from '../home'
import EventSelection from '../eventSelection'
import FilterPage from '../eventSelection/filterPage'
import SingleEvent from '../singleEvent'
import Menu from '../singleEvent/menu'
import EventDetails from '../eventDetails'
import EventOffers from '../eventOffers'
import BookingMethod from '../bookingMethod'
import UpcomingEvents from '../singleEvent/upcomingEvents'
import Payment from '../payment'
import Register from '../home/register'
import Gallery from '../gallery'
import { Loading } from 'src/components'
import { Route, Routes, useNavigate, HashRouter } from 'react-router-dom'
import { getConstantsReq } from 'src/services/constants'
import { loadConstants, eventSelectedCityView } from '../_slice/event.slice'
import { useStyle } from './style'

const Body = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme()

  const desktopMode = useMediaQuery(theme.breakpoints.up('sm'))

  const selectedCity = useSelector(eventSelectedCityView)

  useEffect(() => {
    if (!selectedCity.value) {
      navigate('/')
      return
    }
    getConstantsReq().then(data => {
      dispatch(loadConstants(data))
    })
  }, [])

  return (
    <Routes>
      <Route
        exact
        path="/"
        name="Home Page"
        element={<Home desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/event-selection"
        name="Event Selection"
        element={<EventSelection desktopMode={desktopMode} />}
      />
      <Route exact path="/filter" name="Filter" element={<FilterPage />} />
      <Route
        exact
        path="/single-event/:resId"
        name="Single Event"
        element={<SingleEvent desktopMode={desktopMode} />}
      />
      <Route exact path="/menu/:resId" name="Menu" element={<Menu />} />
      <Route
        exact
        path="/event-details"
        name="Event Details"
        element={<EventDetails desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/event-offers"
        name="Event offers"
        element={<EventOffers desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/booking-method"
        name="Booking Method"
        element={<BookingMethod desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/payment"
        name="Payment"
        element={<Payment desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/register"
        name="Register"
        element={<Register desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/upcoming-events"
        name="Upcoming Events"
        element={<UpcomingEvents desktopMode={desktopMode} />}
      />
      <Route
        exact
        path="/gallery"
        name="Gallery"
        element={<Gallery desktopMode={desktopMode} />}
      />
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
