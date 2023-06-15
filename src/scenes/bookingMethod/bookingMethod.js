import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const BookingMethod = ({
  resData,
  selectedEvent,
  confirmedBookingMethod = 0,
  onConfirm,
}) => {
  const navigate = useNavigate()
  const classes = useStyle({ confirmedBookingMethod })

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
        <img alt="place" src="./images/danceNight.jpg" />
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
              onClick={() => onConfirm(1)}
              className={`item total ${
                confirmedBookingMethod === 1 && 'selected'
              }`}
            >
              <span className="text">Paga tutto</span>
              <span className="percentage">{discount}%</span>
              <img alt="discount" src="./images/discount.png" />
            </div>
          )}
          {payPartially && (
            <div
              onClick={() => onConfirm(2)}
              className={`item total ${
                confirmedBookingMethod === 2 && 'selected'
              }`}
            >
              <span className="text notBold">Acconto {partialPayPercent}%</span>
              <span className="percentage">{partialDiscount}%</span>
              <img alt="discount" src="./images/discount.png" />
            </div>
          )}
          {payAfter && (
            <div
              onClick={() => onConfirm(3)}
              className={`item ${confirmedBookingMethod === 3 && 'selected'}`}
            >
              Prenotazione gratuita
            </div>
          )}
        </div>
      </div>
      {confirmedBookingMethod !== 0 && (
        <div className="buttonContainer">
          <Button
            onClick={() => {
              navigate('/payment')
            }}
            label="Vai al pagamento"
          />
        </div>
      )}
    </div>
  )
}

export default BookingMethod
