import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MyModal, Button } from 'src/components'

import { useStyle } from './style'

const SingleEvent = () => {
  const navigate = useNavigate()
  const classes = useStyle()

  const [giftModalIsOpen, setGiftModalIsOpen] = useState(false)

  return (
    <div className={classes.container}>
      <div className="photosContainer">
        <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
          <span onClick={() => navigate('/gallery')}>Vedi Tutte le foto</span>
        </div>
        <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
        </div>
        <div className="photo">
          <img alt="gallery" src="./images/danceNight.jpg" />
        </div>
        <div
          onClick={() => navigate('/event-selection')}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
      </div>
      <div className="body">
        <div className="eventContainer">
          <span className="selected">Serata di ballo</span>
          <span>Evento aziendale</span>
          <span>Festa di laurea</span>
        </div>
        <div className="nameContainer">
          <span className="name">Opposto</span>
          <span className="type">Discoteca</span>
        </div>
        <div className="infoContainer">
          <div>
            <div className="pinContainer">
              <img alt="promotion" src="./images/pin.png" />
            </div>
            <span>Piazza Vitorio Veneto 1, Torino</span>
          </div>
          <div>
            <img alt="promotion" src="./images/euro.png" />
            <span>Prezzo basso</span>
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

        <MyModal
          handleClose={() => setGiftModalIsOpen(false)}
          open={giftModalIsOpen}
          maxWidth={400}
        >
          <div className={classes.giftModalContainer}>
            <span>
              I <b>gift</b> sono punti fedelta che puoi ricevere ogni volta che
              effettuni una prenotazione presso i ristoranti aderenti.
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
        <div className="rateContainer">
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
        </div>
        <div className="menuContainer">
          <span className="menuText">Menu</span>
          <span className="category">Analcolici</span>
          <div className="item">
            Succo alla pera in bottiglia ...................... €3,00
          </div>
          <div className="buttonContainer">
            <span onClick={() => navigate('/menu')}>Vedi tutto il menu</span>
          </div>
        </div>

        <hr />

        <div
          onClick={() => navigate('/upcoming-events')}
          className="upcomingEventsContainer"
        >
          Vedi i prossimi eventi da Opposto
        </div>

        <div className="timetableContainer">
          <span className="title">Orari di apertura</span>
          <span className="timeItem">Martedi 19.00 - 23.00</span>
          <span className="timeItem">Mercoledi 19.00 - 23.00</span>
          <span className="timeItem">Giovedi 19.00 - 23.00</span>
          <span className="timeItem">Venerdi 19.00 - 23.00</span>
          <span className="timeItem">Sabato 19.00 - 23.00</span>
          <span className="timeItem">Domenica 19.00 - 23.00</span>
        </div>
        <hr />

        <span className="localServiceText">Servizi locale</span>

        <div className="servicesContainer">
          <span>Accesso disabili</span>
          <span>Animali annessi</span>
        </div>
      </div>

      <div className="footerButtonContainer">
        <Button label="Prenota" onClick={() => navigate('/event-details')} />
      </div>
    </div>
  )
}

export default SingleEvent
