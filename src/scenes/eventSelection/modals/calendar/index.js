import CalendarModal from './calendarModal'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventFilteredTypesView,
  loadFilteredTypes,
} from '../../../_slice/event.slice.js'

export default () => {
  // const dispatch = useDispatch()
  // const selectedTypes = useSelector(eventFilteredTypesView)
  // const handleFilterByType = type => {
  //   dispatch(loadFilteredTypes(type))
  // }
  return <CalendarModal />
}
