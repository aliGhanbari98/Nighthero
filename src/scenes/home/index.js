import { useEffect } from 'react'
import Home from './home'
import { useSelector, useDispatch } from 'react-redux'
import {
  viewLoginModalExpanded,
  setLoginModalExpanded,
  setIsLoading,
} from '../_slice/view.slice'
import {
  eventSelectedCityView,
  eventSelectedEventTypeView,
  loadSelectedCity,
  loadSelectedEventType,
  loadFilteredTypes,
  loadConstants,
  eventConstansView,
} from '../_slice/event.slice'
import { getConstantsReq } from 'src/services/constants'
import { getCitiesReq } from 'src/services/world'

export default ({ desktopMode }) => {
  const dispatch = useDispatch()
  const loginModalExpanded = useSelector(viewLoginModalExpanded)
  const selectedCity = useSelector(eventSelectedCityView)
  const selectedEventType = useSelector(eventSelectedEventTypeView)
  const constants = useSelector(eventConstansView)

  const onClose = value => {
    dispatch(setLoginModalExpanded(value))
  }

  const onSearchClick = (city, eventType) => {
    dispatch(loadSelectedCity(city))
    dispatch(loadSelectedEventType(eventType))
    dispatch(loadFilteredTypes({ data: eventType }))
  }

  useEffect(() => {
    dispatch(setIsLoading(true))
    if (selectedEventType) {
      dispatch(loadSelectedCity(''))
      dispatch(loadSelectedEventType(''))
      dispatch(loadFilteredTypes({ reset: true }))
    }
    Promise.all([
      getConstantsReq().then(data => data),
      getCitiesReq().then(data => data),
    ]).then(([constantsData, citiesData]) => {
      dispatch(loadConstants({ ...constantsData, cities: citiesData }))
      dispatch(setIsLoading(false))
    })
  }, [])

  return (
    <Home
      loginModalExpanded={loginModalExpanded}
      setLoginModalexpanded={onClose}
      onSearchClick={onSearchClick}
      selectedCity={selectedCity}
      selectedEventType={selectedEventType}
      eventTypes={constants?.nightTypes}
      cities={constants?.cities}
      desktopMode={desktopMode}
    />
  )
}
