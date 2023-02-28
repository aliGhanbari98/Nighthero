import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DatePicker, Button } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'
import { useStyle } from './style'

const Item = ({ date, description, image }) => {
  const classes = useStyle({})

  return (
    <div className={classes.item}>
      <h2>{date}</h2>
      <span>{description}</span>
      <img src={image} alt="event-avatar" />
    </div>
  )
}

const EventDetails = ({}) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const classes = useStyle({})

  return (
    <div className={classes.container}>
      <div className="photoContainer">
        <img alt="place" src="./images/danceNight.jpg" />
        <div
          onClick={() => navigate('/single-event')}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
        <div className="infoContainer">
          <h2>Opposto</h2>
          <span>Piazza Vittorio Venetto 1, Torino</span>
          <span>+39 338 3135 436</span>
        </div>
      </div>
      <div className="body">
        <Item
          date="23 Febbario 2023"
          image="./images/danceNight.jpg"
          description="Serata techno con ospiti di grande successo come Amelie Lens e Carl Cox !"
        />
        <Item
          date="23 Febbario 2023"
          image="./images/danceNight.jpg"
          description="Serata techno con ospiti di grande successo come Amelie Lens e Carl Cox !"
        />
      </div>
    </div>
  )
}

export default EventDetails
