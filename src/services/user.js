import axios from 'axios'
import { reqWrapper } from 'src/helpers/queryWrapper'
import { getRequest } from 'src/setup/config/axios'

export const insertUser = reqWrapper(body =>
  axios.post(`/users`, body).then(data => data),
)
