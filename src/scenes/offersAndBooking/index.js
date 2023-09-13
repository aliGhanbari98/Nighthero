import { useState } from 'react'
import OffersAndBooking from './offersAndBooking'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedTimeSlots,
  eventSelectedDateView,
  eventSelectedPeopleView,
  eventSelectedRestaurantView,
  eventSelectedRestaurantEventsView,
  loadSelectedOffer,
  eventSelectedOfferView,
  loadFinalEvent,
  loadSelectedBookingMethod,
  eventSelectedBookingMethodView,
  eventFinalEventView,
} from '../_slice/event.slice.js'
import { loadGuestUserInfo, guestUserInfoView } from '../_slice/user.slice.js'

const extractFinalEvent = events => {
  const specialOnes = events.filter(({ isSpecial }) => isSpecial)
  const regularOne = events.find(({ isSpecial }) => !isSpecial)
  if (specialOnes.length >= 1) return specialOnes[0]
  else return regularOne
}

export default ({ desktopMode }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false)

  const selectedTimeSlots = useSelector(eventSelectedTimeSlots)
  const selectedDate = useSelector(eventSelectedDateView)
  const selectedPeople = useSelector(eventSelectedPeopleView)
  const restaurantData = useSelector(eventSelectedRestaurantView)
  const resEvents = useSelector(eventSelectedRestaurantEventsView)
  const confirmedOffer = useSelector(eventSelectedOfferView)

  const confirmedBookingMethod = useSelector(eventSelectedBookingMethodView)
  const selectedEvent = useSelector(eventFinalEventView)
  const guestUserInfo = useSelector(guestUserInfoView)

  const transformedDate = new Date(selectedDate['$d'])
  const time = selectedTimeSlots[0].time
  const combinedDateTime = new Date(transformedDate.toDateString() + ' ' + time)

  const filteredEvents = resEvents.filter(event => {
    const { timeFrom, timeTo } = event
    const timeFromDate = new Date(timeFrom)
    const timeToDate = new Date(timeTo)
    const isInRange =
      combinedDateTime >= timeFromDate && combinedDateTime <= timeToDate
    return isInRange || !event.isSpecial // return the event if it was regular no matter what
  })

  const eventData = extractFinalEvent(filteredEvents)

  const onConfirmOfferClick = offer => {
    dispatch(loadSelectedOffer(offer))
    dispatch(loadFinalEvent(eventData))
  }

  const onBookingMethodConfirm = ({ bookingMethod, fullName, email }) => {
    // check if the user is not logged in and then open the modal
    if (!infoModalIsOpen) setInfoModalIsOpen(true)
    else {
      dispatch(loadSelectedBookingMethod(bookingMethod))
      dispatch(loadGuestUserInfo({ fullName, email }))
      navigate('/payment')
    }
  }

  return (
    <OffersAndBooking
      selectedTimeSlots={selectedTimeSlots}
      selectedDate={selectedDate}
      selectedPeople={selectedPeople}
      resData={restaurantData}
      eventData={extractFinalEvent(filteredEvents)}
      confirmedOffer={confirmedOffer}
      onConfirmOfferClick={onConfirmOfferClick}
      desktopMode={desktopMode}
      onBookingMethodConfirm={onBookingMethodConfirm}
      confirmedBookingMethod={confirmedBookingMethod}
      selectedEvent={selectedEvent}
      guestUserInfo={guestUserInfo}
      infoModalIsOpen={infoModalIsOpen}
      setInfoModalIsOpen={setInfoModalIsOpen}
    />
  )
}
