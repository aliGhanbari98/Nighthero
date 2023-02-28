import EventSelection from './eventSelection'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedTimeSlots,
  loadSelectedTimeSlots,
  eventFilteredTypesView,
  loadSelectedDate,
  eventSelectedDateView,
  loadSelectedPeople,
  eventSelectedPeopleView,
} from '../_slice/event.slice.js'

export default () => {
  const dispatch = useDispatch()

  const selectedTypes = useSelector(eventFilteredTypesView)
  const selectedTimeSlots = useSelector(eventSelectedTimeSlots)
  const handleTimeSlot = timeSlot => {
    dispatch(loadSelectedTimeSlots(timeSlot))
  }

  const selectedDate = useSelector(eventSelectedDateView)
  const selectedPeople = useSelector(eventSelectedPeopleView)

  const onDateChange = newDate => dispatch(loadSelectedDate(newDate))
  const onPeopleChange = newPeople => {
    dispatch(loadSelectedPeople(newPeople))
  }

  return (
    <EventSelection
      handleTimeSlot={handleTimeSlot}
      selectedTimeSlots={selectedTimeSlots}
      selectedTypes={selectedTypes}
      selectedDate={selectedDate}
      selectedPeople={selectedPeople}
      onDateChange={onDateChange}
      onPeopleChange={onPeopleChange}
    />
  )
}
