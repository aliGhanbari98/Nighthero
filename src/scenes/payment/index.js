import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedRestaurantView,
  eventSelectedBookingMethodView,
  eventFinalEventView,
  eventSelectedOfferView,
  eventSelectedPeopleView,
} from '../_slice/event.slice.js'

import Payment from './payment'

export default () => {
  const restaurantData = useSelector(eventSelectedRestaurantView)
  const confirmedBookingMethod = useSelector(eventSelectedBookingMethodView)
  const selectedEvent = useSelector(eventFinalEventView)
  const selectedOffer = useSelector(eventSelectedOfferView)
  const selectedPeople = useSelector(eventSelectedPeopleView)

  const onConfirm = () => {}

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
