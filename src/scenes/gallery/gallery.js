import { useNavigate } from 'react-router-dom'
// import { Button, MySlider } from 'src/components'
import { useStyle } from './style'

const Gallery = ({ images, resId }) => {
  const navigate = useNavigate()
  const classes = useStyle({})

  return (
    <div className={classes.container}>
      {/* <img
        className="closeButton"
        alt="close"
        src="./images/close-yellow.png"
        onClick={() => navigate(`/single-event/${resId}`)}
      /> */}
      <div
        onClick={() => navigate(`/single-event/${resId}`)}
        className="closeButtonContainer"
      >
        <img alt="gallery" src="./images/close.png" />
      </div>
      <div className="sliderContainer">
        <img alt="gallery" src={images[0]?.image} />
      </div>
    </div>
  )
}

export default Gallery
