import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoSVG from 'src/assets/icons/logo.svg'
import SearchSVG from 'src/assets/icons/search.svg'
import { AutoComplete, Button, PartySelect } from 'src/components'
import Login from './Login'
import { errorAlert } from 'src/helpers/alerts'
import { useStyle } from './style'

const Home = ({
  loginModalExpanded,
  setLoginModalexpanded,
  selectedCity,
  selectedEventType,
  onSearchClick,
  eventTypes,
  cities,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [event, setEvent] = useState('')
  const [city, setCity] = useState({ key: '', value: '' })
  const [loginExpanded, setLoginExpanded] = useState(false)

  const validator = () => {
    if (!event && !city.value)
      errorAlert({
        message: '',
        detail: 'Si prega di compilare prima i campi',
      })
    else if (!event && city.value)
      errorAlert({
        message: '',
        detail: 'Si prega di selezionare il tipo di evento',
      })
    else if (!city.value && event)
      errorAlert({
        message: '',
        detail: 'Seleziona la città del tuo evento',
      })
    else {
      onSearchClick(city, event)
      navigate(`/event-selection`)
    }
  }

  return (
    <div className={classes.container}>
      <div className="header">
        <div className="left">
          <img src={LogoSVG} alt="logo" />
          <span>Night Hero</span>
        </div>
        <div className="right">
          <div className="loginButtonContainer">
            <Button
              onClick={() => setLoginModalexpanded(true)}
              label="Accedi"
            />
          </div>
          <div className="registarButtonContainer">
            <Button onClick={() => navigate('/register')} label="Registrati" />
          </div>
        </div>
      </div>
      <div className="body">
        <img alt="logo" src={LogoSVG} />
        <p>
          Scopri i migliori locali notturni della tua zona, prenota, paga e
          divertiti!
        </p>
        <div className="searchBar">
          <div className="partySelectContainer">
            <PartySelect
              items={eventTypes}
              selectedEvent={event || selectedEventType}
              setSelectedEvent={setEvent}
            />
          </div>
          <div className="autoCompleteContainer">
            <AutoComplete
              value={city || selectedCity}
              onChange={val => {
                setCity(val)
              }}
              options={cities?.map(({ id, value }) => ({
                key: value,
                value: id,
              }))}
              placeholder="Citta"
            />
          </div>
          <div onClick={validator} className="searchButtonContainer">
            <img alt="search-button" src={SearchSVG} />
          </div>
        </div>
      </div>
      {loginModalExpanded && <Login />}
    </div>
  )
}

export default Home
