import EventDetails from './eventDetails'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedTimeSlots,
  loadSelectedTimeSlots,
  loadSelectedDate,
  eventSelectedDateView,
  loadSelectedPeople,
  eventSelectedPeopleView,
  eventSelectedRestaurantView,
} from '../_slice/event.slice.js'

export default () => {
  const dispatch = useDispatch()

  const selectedTimeSlots = useSelector(eventSelectedTimeSlots)
  const handleTimeSlot = timeSlot => {
    dispatch(loadSelectedTimeSlots(timeSlot))
  }

  const selectedDate = useSelector(eventSelectedDateView)
  const selectedPeople = useSelector(eventSelectedPeopleView)
  const restaurantData = useSelector(eventSelectedRestaurantView)

  const onDateChange = newDate => dispatch(loadSelectedDate(newDate))
  const onPeopleChange = newPeople => {
    dispatch(loadSelectedPeople(newPeople))
  }

  return (
    <EventDetails
      handleTimeSlot={handleTimeSlot}
      selectedTimeSlots={selectedTimeSlots}
      selectedDate={selectedDate}
      selectedPeople={selectedPeople}
      onDateChange={onDateChange}
      onPeopleChange={onPeopleChange}
      resData={restaurantData}
    />
  )
}
