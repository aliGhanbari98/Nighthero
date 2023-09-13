import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, MyModal } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

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

const OffersAndBooking = ({
  selectedPeople,
  resData,
  eventData,
  confirmedOffer,
  desktopMode,
  onConfirmOfferClick,
  infoModalIsOpen,
  setInfoModalIsOpen,
  confirmedBookingMethod = 0,
  onBookingMethodConfirm,
  guestUserInfo,
  selectedEvent,
}) => {
  const navigate = useNavigate()
  const [selectedOffer, setSelectedOffer] = useState(0)
  const [selectedOfferWidth, setSelectedOfferWidth] = useState(160)
  const [step, setStep] = useState(1)

  const [fullName, setFullName] = useState(guestUserInfo.fullName)
  const [email, setEmail] = useState(guestUserInfo.email)
  const [bookingMethod, setBookingMethod] = useState(0)

  const finalBookingMethod = bookingMethod || confirmedBookingMethod

  const onOfferClick = (elId, offerId) => {
    setSelectedOffer(offerId)
    const element = document.getElementById(elId)
    setSelectedOfferWidth(element.offsetWidth)
  }

  useEffect(() => {
    setSelectedOffer(confirmedOffer)
  }, [confirmedOffer])

  const classes = useStyle({
    selectedOffer,
    selectedOfferWidth,
    desktopMode,
    finalBookingMethod,
    step,
    bookingSectionDisabled: step === 1 && !selectedEvent.id,
  })

  const {
    discount,
    partialPayPercent,
    partialDiscount,
    payAfter,
    payAll,
    payPartially,
  } = selectedEvent

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
        <div
          onClick={() => {
            setStep(1)
          }}
          className="offersSection"
        >
          {eventData?.prices.map(item => (
            <div className="offerContainer">
              <div
                id={`id_${item.id}`}
                onClick={() => onOfferClick(`id_${item.id}`, item)}
                className={`offer ${
                  selectedOffer.id === item.id && 'selected'
                }`}
              >
                <div className="top">
                  <span className="title">{item.type}</span>
                  <span className="price">€ {item.price}</span>
                  <span className="count">x{item.people}</span>
                </div>
                <div className="bottom">{item.description}</div>
              </div>
              {/* {selectedOffer.id === item.id && (
                <DetailsCard
                  discount={eventData?.discount}
                  selectedPeople={selectedPeople}
                  data={item}
                  hidden
                />
              )} */}
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
        <div
          onClick={() => {
            if (selectedEvent.id) setStep(2)
            else
              errorAlert({
                message: '',
                detail: 'Seleziona uno dei pacchetti offerti',
              })
          }}
          className="bookingMethodSection"
        >
          <span>Scegli la modalita di prenotazione</span>
          <div className="itemsContainer">
            {payAll && (
              <div
                onClick={() => setBookingMethod(1)}
                className={`item total ${
                  finalBookingMethod === 1 && 'selected'
                }`}
              >
                <span className="text">Paga tutto</span>
                <span className="percentage">{discount}%</span>
                <img alt="discount" src="./images/discount.png" />
              </div>
            )}
            {payPartially && (
              <div
                onClick={() => setBookingMethod(2)}
                className={`item total ${
                  finalBookingMethod === 2 && 'selected'
                }`}
              >
                <span className="text notBold">
                  Acconto {partialPayPercent}%
                </span>
                <span className="percentage">{partialDiscount}%</span>
                <img alt="discount" src="./images/discount.png" />
              </div>
            )}
            {payAfter && (
              <div
                onClick={() => setBookingMethod(3)}
                className={`item ${finalBookingMethod === 3 && 'selected'}`}
              >
                Prenotazione gratuita
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedOffer.id !== 0 && (
        <div className="buttonContainer">
          <Button
            onClick={() => {
              if (step === 1) {
                if (!selectedOffer.id) {
                  errorAlert({
                    message: '',
                    detail: 'Seleziona uno dei pacchetti offerti',
                  })
                  return
                }
                onConfirmOfferClick(selectedOffer)
                setStep(2)
              } else {
                onBookingMethodConfirm({
                  bookingMethod: finalBookingMethod,
                  fullName,
                  email,
                })
              }
            }}
            label="Vai a prenota"
          />
        </div>
      )}
      <MyModal
        handleClose={() => setInfoModalIsOpen(false)}
        open={infoModalIsOpen}
        maxWidth={400}
      >
        <div className={classes.infoModalContainer}>
          <span>
            Inserisci il tuo nome completo e la tua email e ti registreremo
            automaticamente dopo il pagamento
          </span>
          <input
            className="fullName"
            placeholder="Nome e Cognome"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            className="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="buttonContainer">
            {fullName && email && (
              <Button
                label="Conferma"
                onClick={() => {
                  onBookingMethodConfirm({
                    bookingMethod: finalBookingMethod,
                    fullName,
                    email,
                  })
                }}
              />
            )}
          </div>
        </div>
      </MyModal>
    </div>
  )
}

export default OffersAndBooking
