import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DatePicker, Button } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'
import { extractTimeslots } from 'src/helpers/functions'
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

const EventDetails = ({
  handleTimeSlot,
  selectedTimeSlots,
  selectedDate,
  selectedPeople,
  onDateChange,
  onPeopleChange,
  resData,
}) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const classes = useStyle({
    step,
    selectedDate,
    selectedTime: selectedTimeSlots.length,
    selectedPeople,
  })

  useEffect(() => {
    if (selectedDate && selectedTimeSlots.length) setStep(3)
    else if (selectedDate && !selectedTimeSlots.length) setStep(2)
  }, [])

  const handleButtonVisibility = () =>
    (step === 1 && selectedDate) ||
    (step === 2 && selectedTimeSlots.length) ||
    (step === 3 && selectedPeople)

  return (
    <div className={classes.container}>
      <div className="photoContainer">
        <img alt="place" src="./images/danceNight.jpg" />
        <div
          onClick={() => navigate(`/single-event/${resData?.restaurant.id}`)}
          className="closeButtonContainer"
        >
          <img alt="gallery" src="./images/close.png" />
        </div>
        <div className="infoContainer">
          <h2>{resData?.restaurant.name}</h2>
          <span>{resData?.restaurant.location.address}</span>
          <span>+39 338 3135 436</span>
        </div>
        <div className="filterBar">
          <div onClick={() => setStep(1)} className="date">
            <img
              className="iconImage"
              alt="date"
              src={`./images/${
                !selectedDate ? 'calendar' : 'calendar-green'
              }.png`}
            />
            <span className={`${selectedDate && 'greenText'}`}>Data</span>
          </div>
          <div onClick={() => setStep(2)} className="time">
            <img
              className="iconImage"
              alt="time"
              src={`./images/${
                !selectedTimeSlots.length ? 'clock' : 'clock-green'
              }.png`}
            />
            <span className={`${selectedTimeSlots.length && 'greenText'}`}>
              Ora
            </span>
          </div>
          <div onClick={() => setStep(3)} className="people">
            <img
              className="iconImage"
              alt="people's count"
              src={`./images/${
                !selectedPeople ? 'people' : 'people-green'
              }.png`}
            />
            <span className={`${selectedPeople && 'greenText'}`}>Persone</span>
          </div>
        </div>
      </div>
      <div className="body">
        {step === 1 && (
          <div className="calendar">
            <DatePicker date={selectedDate} setDate={onDateChange} />
          </div>
        )}
        {step === 2 && resData && (
          <div className="time">
            <h4>Seleziona tra le fasce orarie disponibili</h4>
            <div className="itemsContainer">
              {extractTimeslots(resData?.timetable).map(item => (
                <span
                  className={`${
                    checkForMatches(item, selectedTimeSlots) && 'selected'
                  }`}
                  onClick={() => handleTimeSlot(item)}
                >
                  {item.time}
                </span>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="people">
            <h4>Seleziona tra le fasce orarie disponibili</h4>
            <input
              value={selectedPeople}
              onChange={e => onPeopleChange(e.target.value)}
              type="number"
            />
          </div>
        )}
        <div className="buttonContainer">
          {handleButtonVisibility() && (
            <Button
              onClick={() => {
                setStep(prevValue => {
                  if (prevValue === 3) {
                    navigate('/event-offers')
                    return prevValue
                  }
                  return prevValue + 1
                })
              }}
              label="Avanti"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default EventDetails
