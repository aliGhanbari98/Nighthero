import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedRestaurantView,
  loadSelectedBookingMethod,
  eventSelectedBookingMethodView,
  eventFinalEventView,
} from '../_slice/event.slice.js'
import { loadGuestUserInfo, guestUserInfoView } from '../_slice/user.slice.js'

import BookingMethod from './bookingMethod'

export default () => {
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const restaurantData = useSelector(eventSelectedRestaurantView)
  const confirmedBookingMethod = useSelector(eventSelectedBookingMethodView)
  const selectedEvent = useSelector(eventFinalEventView)
  const guestUserInfo = useSelector(guestUserInfoView)

  const onConfirm = ({ bookingMethod, fullName, email }) => {
    // check if the user is not logged in and then open the modal
    if (!infoModalIsOpen) setInfoModalIsOpen(true)
    else {
      dispatch(loadSelectedBookingMethod(bookingMethod))
      dispatch(loadGuestUserInfo({ fullName, email }))
      navigate('/payment')
    }
  }

  return (
    <BookingMethod
      resData={restaurantData}
      selectedEvent={selectedEvent}
      confirmedBookingMethod={confirmedBookingMethod}
      onConfirm={onConfirm}
      infoModalIsOpen={infoModalIsOpen}
      setInfoModalIsOpen={setInfoModalIsOpen}
      guestUserInfo={guestUserInfo}
    />
  )
}
