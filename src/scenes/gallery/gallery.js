import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, MySlider } from 'src/components'
import { useStyle } from './style'

const Gallery = ({}) => {
  const navigate = useNavigate()
  const classes = useStyle({})

  return (
    <div className={classes.container}>
      <img
        className="closeButton"
        alt="close"
        src="./images/close-yellow.png"
        onClick={() => navigate('/single-event')}
      />
      <div className="sliderContainer">
        <img alt="gallery" src="./images/danceNight.jpg" />
      </div>
    </div>
  )
}

export default Gallery
