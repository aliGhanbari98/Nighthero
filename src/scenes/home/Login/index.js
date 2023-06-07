import { useState } from 'react'
import Login from './login'
import { useDispatch } from 'react-redux'
import { setLoginModalExpanded } from '../../_slice/view.slice'
import { loginReq } from 'src/services/auth'

export default ({}) => {
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(setLoginModalExpanded(false))
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLoginClick = () => {
    console.log({ username, password })
    // loginReq({ username, password }).then(res => {
    //   console.log(res)
    // })
  }

  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onClose={onClose}
      onLoginClick={onLoginClick}
    />
  )
}
