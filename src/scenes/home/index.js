import Home from './home'
import { useSelector, useDispatch } from 'react-redux'
import {
  viewLoginModalExpanded,
  setLoginModalExpanded,
} from '../_slice/view.slice'
export default ({}) => {
  const dispatch = useDispatch()
  const loginModalExpanded = useSelector(viewLoginModalExpanded)
  const onClose = value => {
    dispatch(setLoginModalExpanded(value))
  }

  return (
    <Home
      loginModalExpanded={loginModalExpanded}
      setLoginModalexpanded={onClose}
    />
  )
}
