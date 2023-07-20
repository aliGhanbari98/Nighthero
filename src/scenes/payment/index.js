import { useSelector, useDispatch } from 'react-redux'
import { bookReq } from 'src/services/booking.js'
import {
  eventSelectedRestaurantView,
  eventSelectedBookingMethodView,
  eventFinalEventView,
  eventSelectedOfferView,
  eventSelectedPeopleView,
  eventSelectedDateView,
  eventSelectedTimeSlots,
} from '../_slice/event.slice.js'
import { setIsLoading } from '../_slice/view.slice'

import Payment from './payment'

const bookingMethodsDic = {
  1: 'PAY_ALL',
  2: '',
  3: 'PAY_AFTER',
}

export default () => {
  const dispatch = useDispatch()

  const restaurantData = useSelector(eventSelectedRestaurantView)
  const confirmedBookingMethod = useSelector(eventSelectedBookingMethodView)
  const selectedEvent = useSelector(eventFinalEventView)
  const selectedOffer = useSelector(eventSelectedOfferView)
  const selectedPeople = useSelector(eventSelectedPeopleView)
  const selectedDate = useSelector(eventSelectedDateView)
  const selectedTime = useSelector(eventSelectedTimeSlots)

  const onConfirm = () => {
    dispatch(setIsLoading(true))
    const payload = {
      date: new Date(selectedDate['$d']).toISOString(),
      eventId: selectedEvent.id,
      paymentMethod: bookingMethodsDic[confirmedBookingMethod],
      people: Number(selectedPeople),
      priceId: selectedOffer.id,
      restaurantId: restaurantData.restaurant.id,
      time: selectedTime[0].time,
    }
    bookReq(payload).then(res => {
      dispatch(setIsLoading(false))
      window.location.href = res.redirectUrl
    })
  }

  return (
    <Payment
      resData={restaurantData}
      selectedEvent={selectedEvent}
      selectedOffer={selectedOffer}
      confirmedBookingMethod={confirmedBookingMethod}
      selectedPeople={selectedPeople}
      onConfirm={onConfirm}
      userGift={200}
    />
  )
}
