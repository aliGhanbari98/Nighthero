import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Switch, AutoComplete } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'
import { useStyle } from './style'

const months = [
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
  { key: 'Feb', value: 1 },
]

const years = [
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
  { key: '2023', value: 1 },
]

const extractBookingMethod = (bookingMethod, data, totalPrice) => {
  if (bookingMethod === 1) {
    return { text: 'Paga tutto', percenrage: data.discount }
  } else if (bookingMethod === 2) {
    return {
      text: `Acconto ${data.partialPayPercent}%`,
      percenrage: data.discount,
    }
  } else if (bookingMethod === 3) {
    return { text: 'Prenotazione gratuita' }
  }
}

const extractFinalGift = (userGift, items) => {
  let finalGift = { gift: 0 }
  items.forEach(item => {
    if (userGift >= item.gift && item.gift >= finalGift.gift) finalGift = item
  })
  return finalGift
}

const Payment = ({
  resData,
  selectedEvent,
  confirmedBookingMethod,
  onConfirm,
  selectedOffer,
  selectedPeople,
  userGift,
}) => {
  const navigate = useNavigate()
  const [giftApplied, setGiftApplied] = useState(false)
  const [giftData, setGiftData] = useState({})
  const [selectedMethod, setSelectedMethod] = useState(0)
  const [month, setMonth] = useState({ key: '', value: '' })
  const [year, setYear] = useState({ key: '', value: '' })

  const classes = useStyle({})

  const onPaymentMethodClick = id => {
    setSelectedMethod(id)
    setTimeout(() => {
      const element = document.getElementById('cardData')
      element.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const totalPrice =
    Math.ceil(selectedPeople / selectedOffer.people) * selectedOffer.price

  const extractedBookingMethod = extractBookingMethod(
    confirmedBookingMethod,
    selectedEvent,
  )

  const priceByBookingMethod =
    confirmedBookingMethod === 1
      ? totalPrice - (selectedEvent.discount / 100) * totalPrice
      : confirmedBookingMethod === 2
      ? totalPrice - (selectedEvent.partialPayPercent / 100) * totalPrice
      : 0

  const onGiftSwitchClick = () => {
    const finalGift = extractFinalGift(userGift, selectedEvent?.gifts)
    if (finalGift.id) {
      setGiftApplied(prevVal => !prevVal)
      setGiftData(finalGift)
    } else
      errorAlert({
        message: '',
        detail:
          'Non hai abbastanza regali da utilizzare per utilizzare le offerte di questo ristorante',
      })
  }

  return (
    <div id="payment-container" className={classes.container}>
      <div className="photoContainer">
        <img alt="place" src="./images/danceNight.jpg" />
        <div
          onClick={() => navigate('/booking-method')}
          className="closeButtonContainer"
        >
          annulla
        </div>
        <div className="infoContainer">
          <h2>{resData?.restaurant.name}</h2>
          <span>{resData?.restaurant.location.address}</span>
          <span>+39 338 3135 436</span>
        </div>
      </div>
      <div className="body">
        <div className="top">
          <span>Riepilogo</span>
          <div className="offer">
            <div className="top">
              <span className="title">{selectedOffer?.type}</span>
              <span className="price">€ {selectedEvent?.price}</span>
              <span className="count">x{selectedOffer?.people}</span>
            </div>
            <div className="bottom">{selectedOffer?.description}</div>
          </div>
          <div className="details">
            <div className="persons">
              <san className="title">N. persone</san>
              <san className="count">{selectedPeople}</san>
            </div>
            <div className="packages">
              <san>N. paccheto prive</san>
              <san>{selectedOffer?.people}</san>
            </div>
            <div className="total">
              <span className="title">Tot :</span>
              <span className="price">€ {totalPrice}</span>
            </div>
            {/* <div className="earlyPayment">
              <span className="title">-20% se ordini entro 30 minuti</span>
              <span className="price">€ {totalPrice}</span>
            </div> */}
            {giftApplied && (
              <div className="appliedGift">
                <span className="title">{giftData?.gift} gift</span>
                <div className="right">
                  <span className="description">{giftData?.description} </span>
                  <span className="price">{giftData?.value}€</span>
                </div>
              </div>
            )}
            <div className="reservation">Mod. di prenotazione</div>
            <div className="advancePayment">
              <span className="title">{extractedBookingMethod.text}</span>
              <span className="price">€{priceByBookingMethod}</span>
            </div>
          </div>
        </div>

        <div className="gift">
          <div className="left">
            <span className="description">Utilizza il tuo Gift da </span>
            <span className="price">{userGift} gifts</span>
          </div>
          <Switch value={giftApplied} onChange={onGiftSwitchClick} />
        </div>
        <div className="methods">
          <div className="title">Scegli metodo di pagamento</div>
          <div className="items">
            <img
              className={`${selectedMethod === 1 && 'selected'}`}
              onClick={() => onPaymentMethodClick(1)}
              alt="method"
              src="./images/paypal.png"
            />
            <img
              className={`${selectedMethod === 2 && 'selected'}`}
              onClick={() => onPaymentMethodClick(2)}
              alt="method"
              src="./images/paypal.png"
            />
            <img
              className={`${selectedMethod === 3 && 'selected'}`}
              onClick={() => onPaymentMethodClick(3)}
              alt="method"
              src="./images/paypal.png"
            />
            <img
              className={`${selectedMethod === 4 && 'selected'}`}
              onClick={() => onPaymentMethodClick(4)}
              alt="method"
              src="./images/paypal.png"
            />
          </div>
        </div>
        {selectedMethod !== 0 && (
          <div id="cardData" className="cardData">
            <div>
              <input className="cardNumber" placeholder="Numero carta" />
              <input className="cvv" placeholder="CVV" />
            </div>
            <div className="selects">
              <AutoComplete
                options={months}
                className="month"
                placeholder="Mese"
              />
              <AutoComplete options={years} placeholder="Anno" />
            </div>
            <div>
              <input className="cardHolder" placeholder="Intestata a" />
            </div>
          </div>
        )}
      </div>
      {selectedMethod !== 0 && (
        <div className="footerButtonContainer">
          <Button
            onClick={() => {
              onConfirm()
              navigate('/booking-method')
            }}
            label="Paga"
          />
        </div>
      )}
    </div>
  )
}

export default Payment
