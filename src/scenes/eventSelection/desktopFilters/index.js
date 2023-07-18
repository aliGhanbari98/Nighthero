import { useState, useEffect } from 'react'
import DesktopFilters from './desktopFilters'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventSelectedCityView,
  eventFilteredTypesView,
  loadFilteredTypes,
  eventMusicGenresView,
  loadMusicGenres,
  eventHasLowPriceView,
  loadHasLowPrice,
  eventHasPromotionView,
  loadHasPromotion,
  eventCityZonesView,
  loadCityZones,
  eventConstansView,
} from '../../_slice/event.slice.js'
import { getCityZonesReq } from 'src/services/world'

export default ({
  restaurantsCategories,
  selectedCategories,
  onCategoriesChange,
}) => {
  const dispatch = useDispatch()

  const selectedTypes = useSelector(eventFilteredTypesView)
  const selectedMusicGenres = useSelector(eventMusicGenresView)
  const hasLowPrice = useSelector(eventHasLowPriceView)
  const hasPromotion = useSelector(eventHasPromotionView)
  const selectedZones = useSelector(eventCityZonesView)
  const constants = useSelector(eventConstansView)
  const selectedCity = useSelector(eventSelectedCityView)

  const handleFilterByType = type => {
    dispatch(loadFilteredTypes({ data: type, checkForSingularity: true }))
  }
  const setSelectedMusicGenres = type => {
    dispatch(loadMusicGenres(type))
  }
  const setHasLowPrice = type => {
    dispatch(loadHasLowPrice(type))
  }
  const setHasPromotion = type => {
    dispatch(loadHasPromotion(type))
  }
  const setSelectedZones = type => {
    dispatch(loadCityZones(type))
  }

  const [cityZones, setCityZones] = useState([
    { id: 1, idWorld: 11, value: 'Centro' },
    { id: 2, idWorld: 11, value: 'San Salvario' },
    { id: 3, idWorld: 11, value: 'Santa rita' },
    { id: 4, idWorld: 11, value: 'San siro' },
    { id: 5, idWorld: 11, value: 'City life' },
  ])

  useEffect(() => {
    if (selectedCity.value)
      getCityZonesReq(selectedCity.value).then(data => {
        setCityZones(data)
      })
  }, [])

  return (
    <DesktopFilters
      handleFilterByType={handleFilterByType}
      selectedTypes={selectedTypes}
      hasPromotion={hasPromotion}
      setHasPromotion={setHasPromotion}
      selectedMusicGenres={selectedMusicGenres}
      setSelectedMusicGenres={setSelectedMusicGenres}
      hasLowPrice={hasLowPrice}
      setHasLowPrice={setHasLowPrice}
      selectedZones={selectedZones}
      setSelectedZones={setSelectedZones}
      cityZones={cityZones}
      musicGenres={constants.musicGenres}
      nightTypes={constants.nightTypes}
      restaurantsCategories={restaurantsCategories}
      selectedCategories={selectedCategories}
      onCategoriesChange={onCategoriesChange}
    />
  )
}
