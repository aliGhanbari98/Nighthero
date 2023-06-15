import { reqWrapper } from 'src/helpers/queryWrapper'
import { getRequest } from 'src/setup/config/axios'

export const getConstantsReq = reqWrapper(() => getRequest('/constants'))
