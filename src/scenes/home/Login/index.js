import Login from './login'
import { useDispatch } from 'react-redux'
import { setLoginModalExpanded } from '../../_slice/view.slice'

export default ({}) => {
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(setLoginModalExpanded(false))
  }
  return <Login onClose={onClose} />
}
