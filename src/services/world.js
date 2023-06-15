import { reqWrapper } from 'src/helpers/queryWrapper'
import { getRequest } from 'src/setup/config/axios'

export const getCitiesReq = reqWrapper(() => getRequest('/cities'))

export const getCityZonesReq = reqWrapper(id => getRequest(`/city/${id}/areas`))
