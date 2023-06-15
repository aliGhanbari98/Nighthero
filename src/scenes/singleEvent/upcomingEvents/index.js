import { useSelector } from 'react-redux'
import {
  eventSelectedRestaurantEventsView,
  eventSelectedRestaurantView,
} from 'src/scenes/_slice/event.slice'
import UpcomingEvents from './upcomingEvents'

export default () => {
  const eventsData = useSelector(eventSelectedRestaurantEventsView)
  const resData = useSelector(eventSelectedRestaurantView)

  return <UpcomingEvents data={eventsData} resData={resData.restaurant} />
}
