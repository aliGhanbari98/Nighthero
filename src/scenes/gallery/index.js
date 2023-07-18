import Gallery from './gallery'
import { useSelector } from 'react-redux'
import { eventSelectedRestaurantView } from '../_slice/event.slice'

export default () => {
  const restaurantData = useSelector(eventSelectedRestaurantView)

  return (
    <Gallery
      resId={restaurantData?.restaurant?.id}
      images={restaurantData?.images}
    />
  )
}
