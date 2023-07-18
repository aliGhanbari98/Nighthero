import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { useStyle } from './style'

const timeSlots = [
  { time: '08:00', id: 1 },
  { time: '08:30', id: 2 },
  { time: '09:00', id: 3 },
  { time: '09:30', id: 4 },
  { time: '10:00', id: 5 },
  { time: '10:30', id: 6 },
  { time: '11:00', id: 7 },
  { time: '11:30', id: 8 },
  { time: '12:00', id: 9 },
  { time: '12:30', id: 10 },
  { time: '13:00', id: 11 },
  { time: '13:30', id: 12 },
  { time: '14:00', id: 13 },
  { time: '14:30', id: 14 },
  { time: '15:00', id: 15 },
  { time: '15:30', id: 16 },
  { time: '16:00', id: 17 },
  { time: '16:30', id: 18 },
  { time: '17:00', id: 19 },
  { time: '17:30', id: 20 },
  { time: '18:00', id: 21 },
  { time: '18:30', id: 22 },
  { time: '19:00', id: 23 },
  { time: '19:30', id: 24 },
  { time: '20:00', id: 25 },
  { time: '20:30', id: 26 },
  { time: '21:00', id: 27 },
  { time: '21:30', id: 28 },
  { time: '22:00', id: 29 },
  { time: '22:30', id: 30 },
  { time: '23:00', id: 31 },
  { time: '23:30', id: 32 },
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
