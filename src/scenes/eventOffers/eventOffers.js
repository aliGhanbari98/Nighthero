import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const DetailsCard = ({ hidden, selectedOfferWidth }) => {
  const classes = useStyle({ hidden, selectedOfferWidth })

  return (
    <div className={classes.detailsCard}>
      <div className="persons">
        <san className="title">N. persone</san>
        <san className="count">25</san>
      </div>
      <div className="packages">
        <san>N. paccheto prive</san>
        <san>5</san>
      </div>
      <div className="total">
        <span className="title">Tot :</span>
        <span className="price">€ 800</span>
      </div>
      <div className="earlyPayment">
        <span className="title">-20% se ordini entro 30 minuti</span>
        <span className="price">€ 640</span>
      </div>
    </div>
  )
}

const EventOffers = ({}) => {
  const navigate = useNavigate()
  const [selectedOffer, setSelectedOffer] = useState(0)
  const [selectedOfferWidth, setSelectedOfferWidth] = useState(100)
  const classes = useStyle({ selectedOffer, selectedOfferWidth })

  const onOfferClick = (elId, offerId) => {
    setSelectedOffer(offerId)
    const element = document.getElementById(elId)
    setSelectedOfferWidth(element.offsetWidth)
  }

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
        <span className="description">Selezina quello di cui hai bisogno</span>
      </div>
      <div className="body">
        <div className="offerContainer">
          <div
            id="id_1"
            onClick={() => onOfferClick('id_1', 1)}
            className={`offer ${selectedOffer === 1 && 'selected'}`}
          >
            <div className="top">
              <span className="title">Prevendita</span>
              <span className="price">€ 15</span>
              <span className="count">x1</span>
            </div>
            <div className="bottom">Entrata + drink omaggio</div>
          </div>
          {selectedOffer === 1 && <DetailsCard hidden />}
          {selectedOffer === 1 && (
            <DetailsCard selectedOfferWidth={selectedOfferWidth} />
          )}
        </div>
        <div className="offerContainer">
          <div
            id="id_2"
            onClick={e => onOfferClick('id_2', 2)}
            className={`offer ${selectedOffer === 2 && 'selected'}`}
          >
            <div className="top">
              <span className="title">Tavolo</span>
              <span className="price">€ 20</span>
              <span className="count">x1</span>
            </div>
            <div className="bottom">Entrata + drink + area tavoli</div>
          </div>
          {selectedOffer === 2 && <DetailsCard hidden />}
          {selectedOffer === 2 && (
            <DetailsCard selectedOfferWidth={selectedOfferWidth} />
          )}
        </div>
        <div className="offerContainer">
          <div
            id="id_3"
            onClick={e => onOfferClick('id_3', 3)}
            className={`offer ${selectedOffer === 3 && 'selected'}`}
          >
            <div className="top">
              <span className="title">Prevendita</span>
              <span className="price">€ 160</span>
            </div>
            <div className="bottom">
              Entrata + sala privè e tavolo + belvedere 1L x 5 persone
            </div>
          </div>
          {selectedOffer === 3 && <DetailsCard hidden />}
          {selectedOffer === 3 && (
            <DetailsCard selectedOfferWidth={selectedOfferWidth} />
          )}
        </div>
      </div>
      {selectedOffer !== 0 && (
        <div className="buttonContainer">
          <Button
            onClick={() => navigate('/booking-method')}
            label="Vai a prenota"
          />
        </div>
      )}
    </div>
  )
}

export default EventOffers
