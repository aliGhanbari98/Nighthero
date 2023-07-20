import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoSVG from 'src/assets/icons/logo.svg'

import { MyModal, Button } from 'src/components'
import { checkForMatches } from 'src/helpers/functions'

import { useStyle } from './style'

const extractFirstItemOfMenu = resMenu => {
  const groupedProducts = {}
  resMenu.products?.forEach(product => {
    if (!groupedProducts[product.idCategory]) {
      groupedProducts[product.idCategory] = []
    }
    groupedProducts[product.idCategory].push(product)
  })

  const categoriesKeys = Object.keys(groupedProducts)
  const firstCategory = resMenu.categories.find(
    item => item.id === Number(categoriesKeys[0]),
  )

  const firstCategoryProducts = groupedProducts[firstCategory.id]
  return { cat: firstCategory, product: firstCategoryProducts }
}

const SingleEvent = ({ data, selectedNightTypes, resMenu, desktopMode }) => {
  const navigate = useNavigate()
  const classes = useStyle({ desktopMode })

  const [giftModalIsOpen, setGiftModalIsOpen] = useState(false)

  return !data ? null : (
    <div className={classes.container}>
      {desktopMode && (
        <div className="header">
          <div onClick={() => navigate('/')} className="left">
            <img src={LogoSVG} alt="logo" />
          </div>
          <div className="right">
            <img alt="profile" src="./images/user.png" />
          </div>
        </div>
      )}
      <div className="photosContainer">
        {data?.images?.map((image, index) => (
          <div className="photo">
            <img alt="gallery" src={image.image} />
            {index === 0 && !desktopMode && (
              <span onClick={() => navigate('/gallery')}>
                Vedi Tutte le foto
              </span>
            )}
          </div>
        ))}
        {/* <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
          <span onClick={() => navigate('/gallery')}>Vedi Tutte le foto</span>
        </div>
        <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
        </div>
        <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
        </div> */}
        <div
          onClick={() => navigate('/event-selection')}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
      </div>
      <div className="body">
        <div className="innerContainer">
          <div className="eventContainer">
            {data?.nightTypes?.map(item => (
              <span
                className={
                  checkForMatches(item, selectedNightTypes) ? 'selected' : ''
                }
              >
                {item.value}
              </span>
            ))}
          </div>
          <div className="nameContainer">
            <span className="name">{data.restaurant?.name}</span>
            <span className="type">{data.restaurant?.category.value}</span>
          </div>

          <div className="infoContainer">
            <div>
              <div className="pinContainer">
                <img alt="promotion" src="./images/pin.png" />
              </div>
              <span>{data.restaurant?.location.address}</span>
            </div>
            <div>
              <img alt="promotion" src="./images/euro.png" />
              <span>{data.restaurant?.details.priceRange}</span>
            </div>
            <div className="contactContainer">
              <div className="left">
                <img alt="promotion" src="./images/telephone.png" />
              </div>
              <div className="right">
                <div className="top">
                  <span className="help">Aiuto</span>
                  <span className="email">info@waithero.it</span>
                </div>
                <div className="bottom">
                  <span>+39 338 3135 436</span>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {data.restaurant?.hasGift && (
            <div
              onClick={() => setGiftModalIsOpen(prevValue => !prevValue)}
              className="giftContainer"
            >
              <span>Se prenoti in questo locale otterrai</span>
              <div>
                <hr />
                <div>
                  <span className="number">100</span>
                  <span className="gift">Gift</span>
                </div>
                <hr />
              </div>
            </div>
          )}
          <MyModal
            handleClose={() => setGiftModalIsOpen(false)}
            open={giftModalIsOpen}
            maxWidth={400}
          >
            <div className={classes.giftModalContainer}>
              <span>
                I <b>gift</b> sono punti fedelta che puoi ricevere ogni volta
                che effettuni una prenotazione presso i ristoranti aderenti.
              </span>
              <hr />
              <div className="giftsContainer">
                <div>
                  <span className="number">100</span>
                  <spn className="giftText">Gift</spn>
                  <div className="arrowContainer">
                    <img alt="arrow" src="./images/right-arrow.png" />
                  </div>
                  <span className="value">20€</span>
                </div>
                <div>
                  <span className="number">100</span>
                  <spn className="giftText">Gift</spn>
                  <div className="arrowContainer">
                    <img alt="arrow" src="./images/right-arrow.png" />
                  </div>
                  <span className="value">20€</span>
                </div>
              </div>
            </div>
          </MyModal>
          {resMenu.categories.length ? (
            <div className="menuContainer">
              <span className="menuText">Menu</span>
              <span className="category">
                {extractFirstItemOfMenu(resMenu).cat.name}
              </span>
              <div className="item">
                {`${
                  extractFirstItemOfMenu(resMenu).product[0].name
                } ..................... €${
                  extractFirstItemOfMenu(resMenu).product[0].price
                },00`}
              </div>
              <div className="buttonContainer">
                <span onClick={() => navigate(`/menu/${data.restaurant.id}`)}>
                  Vedi tutto il menu
                </span>
              </div>
            </div>
          ) : null}

          <hr />
          <div
            onClick={() => navigate('/upcoming-events')}
            className="upcomingEventsContainer"
          >
            Vedi i prossimi eventi da Opposto
          </div>

          <div className="timetableContainer">
            <span className="title">Orari di apertura</span>
            {data.timetable.map(({ weekday, timeFrom, timeTo }) => (
              <span className="timeItem">{`${weekday} ${timeFrom} - ${timeTo}`}</span>
            ))}
          </div>
          <hr />

          <span className="localServiceText">Servizi locale</span>

          <div className="servicesContainer">
            {data.localServices.map(({ name }) => (
              <span>{name}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="footerButtonContainer">
        <Button label="Prenota" onClick={() => navigate('/event-details')} />
      </div>

      {/* <div className="rateContainer">
          <img alt="rate" src="./images/star.png" />
          <span>8/10</span>
        </div>
        <div className="clientPhotosContainer">
          <span>Foto dei clienti</span>
          <div className="photosContainer">
            <div>
              <img alt="gallery" src="./images/danceNight.jpg" />
              <div className="rateContainer">
                <div className="stars">
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                </div>
                <span>8/10</span>
              </div>
            </div>
            <div>
              <img alt="gallery" src="./images/danceNight.jpg" />
              <div className="rateContainer">
                <div className="stars">
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                </div>
                <span>8/10</span>
              </div>
            </div>
            <div>
              <img alt="gallery" src="./images/danceNight.jpg" />
              <div className="rateContainer">
                <div className="stars">
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                </div>
                <span>8/10</span>
              </div>
            </div>
            <div>
              <img alt="gallery" src="./images/danceNight.jpg" />
              <div className="rateContainer">
                <div className="stars">
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                  <img alt="rate" src="./images/star.png" />
                </div>
                <span>8/10</span>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default SingleEvent
