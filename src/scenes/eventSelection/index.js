import { useEffect, useState } from 'react'
import EventSelection from './eventSelection'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedTimeSlots,
  loadSelectedTimeSlots,
  eventFilteredTypesView,
  loadSelectedDate,
  eventSelectedDateView,
  loadSelectedPeople,
  eventSelectedPeopleView,
  eventSelectedCityView,
  eventConstansView,
  loadSelectedCategories,
  eventSelectedCategoriesView,
  eventMusicGenresView,
  eventCityZonesView,
  eventHasPromotionView,
  eventHasLowPriceView,
} from '../_slice/event.slice.js'
import { setIsLoading } from '../_slice/view.slice'
import { searchRestaurantsReq } from 'src/services/restaurant'

export default () => {
  const dispatch = useDispatch()
  // const { homeCity, homeNightType } = useParams()

  const [restaurantsData, setRestaurantsData] = useState([])
  const [searchedName, setSearchedName] = useState('')
  const [searchHeaderExpanded, setSearchHeaderExpanded] = useState(false)

  const selectedTypes = useSelector(eventFilteredTypesView)
  const selectedTimeSlots = useSelector(eventSelectedTimeSlots)

  const selectedDate = useSelector(eventSelectedDateView)
  const selectedPeople = useSelector(eventSelectedPeopleView)
  const selectedCity = useSelector(eventSelectedCityView)
  const selectedNightTypes = useSelector(eventFilteredTypesView)
  const constants = useSelector(eventConstansView)
  const selectedCategories = useSelector(eventSelectedCategoriesView)
  const selectedMusicGenres = useSelector(eventMusicGenresView)
  const selectedZones = useSelector(eventCityZonesView)
  const selectedHasPromotion = useSelector(eventHasPromotionView)
  const selectedHasLowPrice = useSelector(eventHasLowPriceView)

  const refreshData = (name = '') => {
    dispatch(setIsLoading(true))
    searchRestaurantsReq({
      city: selectedCity.value,
      nightTypes: selectedNightTypes.map(({ id }) => id),
      category: selectedCategories ? selectedCategories.id : null,
      areas: selectedZones.length ? selectedZones.map(({ id }) => id) : [],
      hasLowPrice: selectedHasLowPrice,
      hasPromotion: selectedHasPromotion,
      musicGenres: selectedMusicGenres.length
        ? selectedMusicGenres.map(({ id }) => id)
        : [],
      date: selectedDate ? new Date(selectedDate['$d']) : null,
      time: selectedTimeSlots.length ? selectedTimeSlots[0].time : null,
      name,
    }).then(data => {
      setRestaurantsData(data)
      dispatch(setIsLoading(false))
    })
  }

  const handleTimeSlot = timeSlot => {
    dispatch(loadSelectedTimeSlots(timeSlot))
  }

  const onDateChange = newDate => {
    console.log(JSON.stringify(new Date(newDate['$d'])))
    dispatch(loadSelectedDate(newDate))
  }
  const onPeopleChange = newPeople => {
    dispatch(loadSelectedPeople(newPeople))
  }
  const onCategoriesChange = newCat => {
    dispatch(loadSelectedCategories(newCat))
  }
  // const onRestaurantClick = res => {
  //   dispatch(loadSelectedRestaurant)
  // }

  const onHeaderModalClose = () => {
    setSearchHeaderExpanded(false)
    refreshData(searchedName)
  }

  useEffect(() => {
    if (selectedCity.value) refreshData()
  }, [selectedCategories, selectedDate, selectedTimeSlots, selectedCity])

  return (
    <EventSelection
      handleTimeSlot={handleTimeSlot}
      selectedTimeSlots={selectedTimeSlots}
      selectedTypes={selectedTypes}
      selectedDate={selectedDate}
      selectedPeople={selectedPeople}
      selectedNightTypes={selectedNightTypes}
      onDateChange={onDateChange}
      onPeopleChange={onPeopleChange}
      restaurantsData={restaurantsData}
      restaurantsCategories={constants.restaurantCategories}
      selectedCategories={selectedCategories}
      onCategoriesChange={onCategoriesChange}
      searchedName={searchedName}
      setSearchedName={setSearchedName}
      searchHeaderExpanded={searchHeaderExpanded}
      setSearchHeaderExpanded={setSearchHeaderExpanded}
      onHeaderModalClose={onHeaderModalClose}
    />
  )
}
