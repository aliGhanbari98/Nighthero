import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRestaurantMenu } from 'src/services/restaurant'
import { setIsLoading } from 'src/scenes/_slice/view.slice'
import { eventSelectedRestaurantView } from 'src/scenes/_slice/event.slice'
import Menu from './menu'

export default () => {
  const { resId } = useParams()
  const dispatch = useDispatch()
  const [menuData, setMenuData] = useState()
  const [searchText, setSearchText] = useState('')
  const resData = useSelector(eventSelectedRestaurantView)
  const {
    restaurant: { name, category },
  } = resData
  useEffect(() => {
    dispatch(setIsLoading(true))
    getRestaurantMenu(resId).then(data => {
      setMenuData(data)
      dispatch(setIsLoading(false))
    })
  }, [])

  return (
    <Menu
      data={menuData}
      resId={resId}
      resName={name}
      resCategory={category.value}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  )
}
