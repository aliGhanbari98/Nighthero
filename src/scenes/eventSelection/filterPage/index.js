import { useState } from 'react'
import FilterPage from './filterPage'
import { useSelector, useDispatch } from 'react-redux'
import {
  eventFilteredTypesView,
  loadFilteredTypes,
} from '../../_slice/event.slice.js'

export default () => {
  const dispatch = useDispatch()
  const selectedTypes = useSelector(eventFilteredTypesView)
  const handleFilterByType = type => {
    dispatch(loadFilteredTypes(type))
  }
  const [promotion, setPromotion] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(false)
  const [sortyByReview, setSortByReview] = useState(false)

  return (
    <FilterPage
      handleFilterByType={handleFilterByType}
      selectedTypes={selectedTypes}
      promotion={promotion}
      setPromotion={setPromotion}
      sortByPrice={sortByPrice}
      setSortByPrice={setSortByPrice}
      sortyByReview={sortyByReview}
      setSortByReview={setSortByReview}
    />
  )
}
