import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DatePicker, Button } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'
import { useStyle } from './style'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Item = ({ timestamp, description, image }) => {
  const classes = useStyle({})

  const date = new Date(timestamp)

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  const formattedDate = `${day} ${months[monthIndex]} ${year}`

  return (
    <div className={classes.item}>
      <h2>{formattedDate}</h2>
      <span>{description}</span>
      <img src={image} alt="event-avatar" />
    </div>
  )
}

const UpcomingEvents = ({ data, resData }) => {
  const navigate = useNavigate()
  const classes = useStyle({})

  return (
    <div className={classes.container}>
      <div className="photoContainer">
        <img alt="place" src="./images/danceNight.jpg" />
        <div
          onClick={() => navigate(`/single-event/${resData?.id}`)}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
        <div className="infoContainer">
          <h2>Opposto</h2>
          <span>{resData?.location.address}</span>
          <span>+39 338 3135 436</span>
        </div>
      </div>
      <div className="body">
        {data.map(item => (
          <Item
            timestamp={item.timeFrom}
            image={item.image}
            description={item.description}
          />
        ))}
        {/* <Item
          date="23 Febbario 2023"
          image="./images/danceNight.jpg"
          description="Serata techno con ospiti di grande successo come Amelie Lens e Carl Cox !"
        />
        <Item
          date="23 Febbario 2023"
          image="./images/danceNight.jpg"
          description="Serata techno con ospiti di grande successo come Amelie Lens e Carl Cox !"
        /> */}
      </div>
    </div>
  )
}

export default UpcomingEvents
