import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Switch, AutoComplete } from 'src/components'
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

const Payment = ({}) => {
  const navigate = useNavigate()
  const [giftApplied, setGiftApplied] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState(0)
  const [month, setMonth] = useState({ key: '', value: '' })
  const [year, setYear] = useState({ key: '', value: '' })

  const onPaymentMethodClick = id => {
    setSelectedMethod(id)
    setTimeout(() => {
      const element = document.getElementById('cardData')
      element.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const classes = useStyle({})

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
          <h2>Opposto</h2>
          <span>Piazza Vittorio Venetto 1, Torino</span>
          <span>+39 338 3135 436</span>
        </div>
      </div>
      <div className="body">
        <div className="top">
          <span>Riepilogo</span>
          <div className="offer">
            <div className="top">
              <span className="title">Prive</span>
              <span className="price">€ 160</span>
              <span className="count">x1</span>
            </div>
            <div className="bottom">Entrata + drink + area tavoli</div>
          </div>
          <div className="details">
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
            {giftApplied && (
              <div className="appliedGift">
                <span className="title">100 gift</span>
                <div className="right">
                  <span className="description">Bottiglia omaggio di </span>
                  <span className="price">20€</span>
                </div>
              </div>
            )}
            <div className="reservation">Mod. di prenotazione</div>
            <div className="advancePayment">
              <span className="title">Acconto 50%</span>
              <span className="price">€ 320</span>
            </div>
          </div>
        </div>

        <div className="gift">
          <div className="left">
            <span className="description">Utilizza il tuo Gift da </span>
            <span className="price">100 gifts</span>
          </div>
          <Switch
            value={giftApplied}
            onChange={_ => setGiftApplied(prevVal => !prevVal)}
          />
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
          <Button onClick={() => navigate('/booking-method')} label="Paga" />
        </div>
      )}
    </div>
  )
}

export default Payment
