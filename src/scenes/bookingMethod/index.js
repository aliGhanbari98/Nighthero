import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedRestaurantView,
  loadSelectedBookingMethod,
  eventSelectedBookingMethodView,
  eventFinalEventView,
} from '../_slice/event.slice.js'

import BookingMethod from './bookingMethod'

export default () => {
  const dispatch = useDispatch()

  const restaurantData = useSelector(eventSelectedRestaurantView)
  const confirmedBookingMethod = useSelector(eventSelectedBookingMethodView)
  const selectedEvent = useSelector(eventFinalEventView)

  const onConfirm = method => {
    dispatch(loadSelectedBookingMethod(method))
  }

  return (
    <BookingMethod
      resData={restaurantData}
      selectedEvent={selectedEvent}
      confirmedBookingMethod={confirmedBookingMethod}
      onConfirm={onConfirm}
    />
  )
}
