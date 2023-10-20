import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Button, MySlider } from 'src/components'
import { useStyle } from './style'

const Gallery = ({ images, resId }) => {
  const navigate = useNavigate()

  const [showingImageIndex, setShowingImageIndex] = useState(0)

  const showingImage = images.find((img, i) => i === showingImageIndex)

  const isLastImage = useMemo(
    () => showingImageIndex === images.length - 1,
    [showingImageIndex, images],
  )

  const isFirstImage = useMemo(
    () => showingImageIndex === 0,
    [showingImageIndex],
  )

  const classes = useStyle({ isFirstImage, isLastImage })

  return (
    <div className={classes.container}>
      <div
        onClick={() => navigate(`/single-event/${resId}`)}
        className="closeButtonContainer"
      >
        <img alt="gallery" src="./images/close.png" />
      </div>

      <div className="sliderContainer">
        <img alt="gallery" src={showingImage.image} />
      </div>
      <div className="navigationButtonsContainer">
        {!isFirstImage && (
          <div
            onClick={() => setShowingImageIndex(prevState => prevState - 1)}
            className="buttonContainer"
          >
            <img alt="gallery" src="./images/back-arrow.png" />
          </div>
        )}
        {!isLastImage && (
          <div
            onClick={() => setShowingImageIndex(prevState => prevState + 1)}
            className="buttonContainer"
          >
            <img alt="gallery" src="./images/next-arrow.png" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
