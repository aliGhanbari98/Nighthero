import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Input } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'

const Login = ({
  onClose,
  username,
  setUsername,
  password,
  setPassword,
  onLoginClick,
  desktopMode,
}) => {
  const classes = useStyle({ desktopMode })
  const navigate = useNavigate()

  const [event, setEvent] = useState('')
  const [city, setCity] = useState({ key: '', value: '' })

  return (
    <div onClick={onClose} className={classes.container}>
      <div className="body" onClick={e => e.stopPropagation()}>
        <span onClick={() => navigate('/event-selection')} className="title">
          Accedi
        </span>
        <Input value={username} onChange={setUsername} placeholder="Email" />
        <Input
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Password"
        />
        <div className="textButtonContainer">
          <span className="passwordForgotten">Password dimenticata</span>
        </div>
        <Button
          onClick={() => {
            onLoginClick()
            navigate('/event-selection')
          }}
          label="Accedi"
        />
        <div className="textButtonContainer registerButtonContainer">
          <span onClick={() => navigate('/register')} className="register">
            Registrati
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
