import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, MyModal } from 'src/components'
import { useStyle } from './style'

const BookingMethod = ({
  resData,
  selectedEvent,
  onConfirm,
  infoModalIsOpen,
  setInfoModalIsOpen,
  confirmedBookingMethod = 0,
  guestUserInfo,
}) => {
  const [fullName, setFullName] = useState(guestUserInfo.fullName)
  const [email, setEmail] = useState(guestUserInfo.email)
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('pending')
  const [isNewUser, setIsNewUser] = useState(true)

  const [bookingMethod, setBookingMethod] = useState(0)

  const finalBookingMethod = bookingMethod || confirmedBookingMethod

  const navigate = useNavigate()

  const classes = useStyle({ finalBookingMethod })

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
          onClick={() => navigate('/event-offers')}
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
        <span>Scegli la modalita di prenotazione</span>
        <div className="itemsContainer">
          {payAll && (
            <div
              onClick={() => setBookingMethod(1)}
              className={`item total ${finalBookingMethod === 1 && 'selected'}`}
            >
              <span className="text">Paga tutto</span>
              <span className="percentage">{discount}%</span>
              <img alt="discount" src="./images/discount.png" />
            </div>
          )}
          {payPartially && (
            <div
              onClick={() => setBookingMethod(2)}
              className={`item total ${finalBookingMethod === 2 && 'selected'}`}
            >
              <span className="text notBold">Acconto {partialPayPercent}%</span>
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
      {finalBookingMethod && (
        <div className="buttonContainer">
          <Button
            onClick={() => {
              onConfirm({ finalBookingMethod, fullName, email })
            }}
            label="Vai al pagamento"
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
          {status === 'confirming' && (
            <p>
              {isNewUser
                ? `Abbiamo inviato un link di conferma alla tua email, utilizzalo per
              ricevere la tua password`
                : 'Sei già registrato, inserisci la password per accedere'}
            </p>
          )}
          {status === 'confirming' && (
            <input
              className="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          )}
          <div className="buttonContainer">
            {fullName &&
              email &&
              (status === 'confirming' ? password : true) && (
                <Button
                  label={status === 'pending' ? 'Conferma' : 'Accedi'}
                  onClick={() => {
                    if (status === 'pending') setStatus('confirming')
                    else
                      onConfirm({
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

export default BookingMethod
