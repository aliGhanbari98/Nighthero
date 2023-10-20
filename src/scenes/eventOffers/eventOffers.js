import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const DetailsCard = ({
  hidden,
  selectedOfferWidth,
  data,
  selectedPeople,
  discount,
}) => {
  const classes = useStyle({ hidden, selectedOfferWidth })
  const { people, price } = data
  const finalPrice = Math.ceil(selectedPeople / people) * price

  return (
    <div className={classes.detailsCard}>
      <div className="persons">
        <san className="title">N. persone</san>
        <san className="count">{selectedPeople}</san>
      </div>
      <div className="packages">
        <san>N. paccheto prive</san>
        <san>{people}</san>
      </div>
      <div className="total">
        <span className="title">Tot :</span>
        <span className="price">€ {finalPrice}</span>
      </div>
      <div className="earlyPayment">
        <span className="title">-{discount}% se ordini in anticipo</span>
        <span className="price">€ {finalPrice - 0.2 * finalPrice}</span>
      </div>
    </div>
  )
}

const EventOffers = ({
  selectedPeople,
  resData,
  eventData,
  onConfirmClick,
  confirmedOffer,
  desktopMode,
}) => {
  const navigate = useNavigate()
  const [selectedOffer, setSelectedOffer] = useState(0)
  const [selectedOfferWidth, setSelectedOfferWidth] = useState(160)
  const classes = useStyle({ selectedOffer, selectedOfferWidth, desktopMode })

  const onOfferClick = (elId, offerId) => {
    setSelectedOffer(offerId)
    const element = document.getElementById(elId)
    setSelectedOfferWidth(element.offsetWidth)
  }

  useEffect(() => {
    setSelectedOffer(confirmedOffer)
  }, [confirmedOffer])

  console.log({ selectedOffer })

  return (
    <div className={classes.container}>
      <div className="photoContainer">
        <img alt="place" src={resData?.restaurant.image} />
        <div
          onClick={() => navigate('/event-details')}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
        <div className="infoContainer">
          <h2>{resData?.restaurant.name}</h2>
          <span>{resData?.restaurant.location.address}</span>
          <span>+39 338 3135 436</span>
        </div>
        <span className="description">Selezina quello di cui hai bisogno</span>
      </div>
      <div className="body">
        {eventData?.prices.map(item => (
          <div className="offerContainer">
            <div
              id={`id_${item.id}`}
              onClick={() => onOfferClick(`id_${item.id}`, item)}
              className={`offer ${selectedOffer.id === item.id && 'selected'}`}
            >
              <div className="top">
                <span className="title">{item.type}</span>
                <span className="price">€ {item.price}</span>
                <span className="count">x{item.people}</span>
              </div>
              <div className="bottom">{item.description}</div>
            </div>
            {selectedOffer.id === item.id && (
              <DetailsCard
                discount={eventData?.discount}
                selectedPeople={selectedPeople}
                data={item}
                hidden
              />
            )}
            {selectedOffer.id === item.id && (
              <DetailsCard
                discount={eventData?.discount}
                selectedPeople={selectedPeople}
                data={item}
                selectedOfferWidth={selectedOfferWidth}
              />
            )}
          </div>
        ))}
      </div>
      {selectedOffer.id && (
        <div className="buttonContainer">
          <Button
            onClick={() => {
              onConfirmClick(selectedOffer)
              navigate('/booking-method')
            }}
            label="Vai a prenota"
          />
        </div>
      )}
    </div>
  )
}

export default EventOffers
