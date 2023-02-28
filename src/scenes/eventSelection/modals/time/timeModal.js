import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const timeSlots = [
  { time: '19:00', id: 1 },
  { time: '19:30', id: 2 },
  { time: '20:00', id: 3 },
  { time: '20:30', id: 4 },
  { time: '21:00', id: 5 },
  { time: '21:30', id: 6 },
  { time: '22:00', id: 7 },
  { time: '22:30', id: 8 },
]

const checkForMatches = (item, array) => {
  const result = array.find(el => el.id === item.id)
  return result
}

const TimeModal = ({ onConfirm, onTimeSlotClick, selectedTimeSlots }) => {
  const classes = useStyle()

  return (
    <div className={classes.container}>
      <h4>Seleziona tra le fasce orarie disponibili</h4>
      <div className="itemsContainer">
        {timeSlots.map(item => (
          <span
            className={`${
              checkForMatches(item, selectedTimeSlots) && 'selected'
            }`}
            onClick={() => onTimeSlotClick(item)}
          >
            {item.time}
          </span>
        ))}
      </div>
      <div className="buttonsContainer">
        <Button onClick={onConfirm} label="Conferma" />
      </div>
    </div>
  )
}

export default TimeModal
