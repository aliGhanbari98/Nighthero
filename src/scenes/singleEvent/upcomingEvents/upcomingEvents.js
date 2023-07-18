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
  const classes = useStyle({})
  const navigate = useNavigate()

  const [showFixedHeader, setShowFixedHeader] = useState(false)

  // const handleScroll = () => {
  //   console.log('scrolling')
  //   const scrollTop = el.scrollTop
  //   const threshold = 100 // Adjust this value to determine when to show/hide the fixed header

  //   if (scrollTop >= threshold) {
  //     setShowFixedHeader(true)
  //   } else {
  //     setShowFixedHeader(false)
  //   }
  // }

  const onContainerScroll = () => {
    const el = document.getElementById('upcomingEventsBody')

    const topPosition = el.getBoundingClientRect().top
    console.log(topPosition)
    const threshold = showFixedHeader ? 0 : 250 // Adjust this value to determine when to show/hide the fixed header
    if (topPosition < threshold) {
      setShowFixedHeader(true)
    } else {
      setShowFixedHeader(false)
    }
  }

  // console.log({ showFixedHeader })

  // useEffect(() => {
  //   // Add scroll event listener to track scroll position
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     // Clean up the scroll event listener on component unmount
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div onScroll={onContainerScroll} className={classes.container}>
      {/* <div
        className={`photoContainer fixedHeader_hidden ${
          showFixedHeader ? 'fixedHeader' : ''
        }`}
      >
        {!showFixedHeader && <img alt="place" src="./images/danceNight.jpg" />}
        {!showFixedHeader && (
          <div
            onClick={() => navigate(`/single-event/${resData?.id}`)}
            className="closeButtonContainer"
          >
            <img alt="gallery" src="./images/close.png" />
          </div>
        )}
        {!showFixedHeader && (
          <div className="infoContainer">
            <h2>Opposto</h2>
            <span>{resData?.location.address}</span>
            <span>+39 338 3135 436</span>
          </div>
        )}
        {<span className="resName">Opposto</span>}
      </div> */}
      <div className="headerContainer">
        <div className="buttonContainer">
          <div
            onClick={() => navigate(`/single-event/${resData?.id}`)}
            className="closeButtonContainer"
          >
            <img alt="gallery" src="./images/close.png" />
          </div>
        </div>
        <div
          className={`fixedHeaderContaienr ${
            showFixedHeader && 'fixedHeader_visible'
          }`}
        >
          <span className="resName">Opposto</span>
        </div>

        <div
          className={`photoContainer ${
            showFixedHeader && 'photoContainer_hidden'
          }`}
        >
          <img alt="place" src="./images/danceNight.jpg" />

          <div className="infoContainer">
            <h2>Opposto</h2>
            <span>{resData?.location.address}</span>
            <span>+39 338 3135 436</span>
          </div>
        </div>
      </div>
      <div id="upcomingEventsBody" className="body">
        {data.map(item => (
          <Item
            timestamp={item.timeFrom}
            image={item.image}
            description={item.description}
          />
        ))}
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

export default UpcomingEvents
