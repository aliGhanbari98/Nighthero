import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const BookingMethod = ({}) => {
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState(0)
  const classes = useStyle({ selectedItem })

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
          <h2>Opposto</h2>
          <span>Piazza Vittorio Venetto 1, Torino</span>
          <span>+39 338 3135 436</span>
        </div>
      </div>
      <div className="body">
        <span>Scegli la modalita di prenotazione</span>
        <div className="itemsContainer">
          <div
            onClick={() => setSelectedItem(1)}
            className={`item total ${selectedItem === 1 && 'selected'}`}
          >
            <span className="text">Paga tutto</span>
            <span className="percentage">20%</span>
            <img alt="discount" src="./images/discount.png" />
          </div>
          <div
            onClick={() => setSelectedItem(2)}
            className={`item ${selectedItem === 2 && 'selected'}`}
          >
            Acconto 50%
          </div>
          <div
            onClick={() => setSelectedItem(3)}
            className={`item ${selectedItem === 3 && 'selected'}`}
          >
            Prenotazione gratuita
          </div>
        </div>
      </div>
      {selectedItem !== 0 && (
        <div className="buttonContainer">
          <Button
            onClick={() => navigate('/payment')}
            label="Vai al pagamento"
          />
        </div>
      )}
    </div>
  )
}

export default BookingMethod
