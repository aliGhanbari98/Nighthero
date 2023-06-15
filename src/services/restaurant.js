import axios from 'axios'
import { reqWrapper } from 'src/helpers/queryWrapper'
import { getRequest } from 'src/setup/config/axios'

export const searchRestaurantsReq = reqWrapper(body =>
  axios.post('/restaurant/search', { ...body }).then(data => data),
)

export const getRestaurantById = reqWrapper(id =>
  getRequest(`/restaurant/${id}`),
)

export const getRestaurantEvents = reqWrapper(id =>
  getRequest(`/restaurant/${id}/events`),
)

export const getRestaurantMenu = reqWrapper(id =>
  getRequest(`/restaurant/${id}/menu`),
)
