import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import SingleEvent from './singleEvent'
import {
  loadSelectedRestaurant,
  eventSelectedRestaurantView,
  eventFilteredTypesView,
  loadSelectedRestaurantEvents,
} from '../_slice/event.slice'
import { setIsLoading } from '../_slice/view.slice'
import {
  getRestaurantById,
  getRestaurantMenu,
  getRestaurantEvents,
} from 'src/services/restaurant'
import { useEffect } from 'react'

export default () => {
  const { resId } = useParams()
  const dispatch = useDispatch()

  const [resMenu, setResMenu] = useState({ products: [], categories: [] })

  const restaurantData = useSelector(eventSelectedRestaurantView)
  const selectedNightTypes = useSelector(eventFilteredTypesView)

  useEffect(() => {
    dispatch(setIsLoading(true))
    Promise.all([
      getRestaurantById(resId).then(res => res),
      getRestaurantMenu(resId).then(res => res),
      getRestaurantEvents(resId).then(data => data),
    ]).then(([resData, menuData, resEvents]) => {
      dispatch(loadSelectedRestaurant(resData))
      setResMenu(menuData)
      dispatch(loadSelectedRestaurantEvents(resEvents))
      dispatch(setIsLoading(false))
    })
  }, [])

  return (
    <SingleEvent
      data={restaurantData}
      selectedNightTypes={selectedNightTypes}
      resMenu={resMenu}
    />
  )
}
