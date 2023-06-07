import Home from './home'
import { useSelector, useDispatch } from 'react-redux'
import {
  viewLoginModalExpanded,
  setLoginModalExpanded,
} from '../_slice/view.slice'
import {
  eventSelectedCityView,
  eventSelectedEventTypeView,
  loadSelectedCity,
  loadSelectedEventType,
} from '../_slice/event.slice'

export default ({}) => {
  const dispatch = useDispatch()
  const loginModalExpanded = useSelector(viewLoginModalExpanded)
  const selectedCity = useSelector(eventSelectedCityView)
  const selectedEventType = useSelector(eventSelectedEventTypeView)

  const onClose = value => {
    dispatch(setLoginModalExpanded(value))
  }

  const onSearchClick = (city, eventType) => {
    dispatch(loadSelectedCity(city))
    dispatch(loadSelectedEventType(eventType))
  }

  return (
    <Home
      loginModalExpanded={loginModalExpanded}
      setLoginModalexpanded={onClose}
      onSearchClick={onSearchClick}
      selectedCity={selectedCity}
      selectedEventType={selectedEventType}
    />
  )
}
