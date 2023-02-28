import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import App from './app'

export default () => {
  // const { id } = useParams()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  // 	if (
  // 		!localStorage.getItem('accessToken') &&
  // 		!localStorage.getItem('refreshToken')
  // 	)
  // 		return
  // 	Promise.all([
  // 		getCities({}).then(({ list }) => {
  // 			dispatch(loadCities(list))
  // 		}),
  // 		getCategories({}).then(({ list }) => {
  // 			dispatch(loadCategories(list))
  // 		}),
  // 	])
  // }, [dispatch])

  return <App />
}
