import axios from 'axios'
import { reqWrapper } from 'src/helpers/queryWrapper'
import { getRequest } from 'src/setup/config/axios'

export const bookReq = reqWrapper(body =>
  axios.post('/book', { ...body }).then(data => data),
)

export const getBookingsReq = reqWrapper(userId =>
  getRequest(`/bookings/${userId}`),
)
