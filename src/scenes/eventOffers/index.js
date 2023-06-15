import EventOffers from './eventOffers'
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
} from '../_slice/event.slice.js'

const extractFinalEvent = events => {
  if (events.length > 1) {
    const specialOnes = events.filter(({ isSpecial }) => !isSpecial)
    return specialOnes[0]
  } else return events[0]
}

export default () => {
  const dispatch = useDispatch()

  const selectedTimeSlots = useSelector(eventSelectedTimeSlots)
  const selectedDate = useSelector(eventSelectedDateView)
  const selectedPeople = useSelector(eventSelectedPeopleView)
  const restaurantData = useSelector(eventSelectedRestaurantView)
  const resEvents = useSelector(eventSelectedRestaurantEventsView)
  const confirmedOffer = useSelector(eventSelectedOfferView)

  const transformedDate = new Date(selectedDate['$d'])
  const time = selectedTimeSlots[0].time
  const combinedDateTime = new Date(transformedDate.toDateString() + ' ' + time)

  const filteredEvents = resEvents.filter(event => {
    const { timeFrom, timeTo } = event
    const timeFromDate = new Date(timeFrom)
    const timeToDate = new Date(timeTo)
    const isInRange =
      combinedDateTime >= timeFromDate && combinedDateTime <= timeToDate
    return isInRange
  })

  const eventData = extractFinalEvent(filteredEvents)

  const onConfirmClick = offer => {
    dispatch(loadSelectedOffer(offer))
    dispatch(loadFinalEvent(eventData))
  }
  return (
    <EventOffers
      selectedTimeSlots={selectedTimeSlots}
      selectedDate={selectedDate}
      selectedPeople={selectedPeople}
      resData={restaurantData}
      eventData={extractFinalEvent(filteredEvents)}
      confirmedOffer={confirmedOffer}
      onConfirmClick={onConfirmClick}
    />
  )
}
