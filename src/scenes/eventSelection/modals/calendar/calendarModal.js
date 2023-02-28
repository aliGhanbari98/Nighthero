import { useState, useEffect } from 'react'
import { DatePicker, Button } from 'src/components'
import { useStyle } from './style'

const CalendarModal = ({ onConfirm, selectedDate = '' }) => {
  const classes = useStyle()
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(selectedDate)
  }, [selectedDate])

  return (
    <div className={classes.container}>
      <DatePicker date={date} setDate={setDate} />
      <div className="buttonsContainer">
        <Button onClick={() => onConfirm(date)} label="Conferma" />
      </div>
    </div>
  )
}

export default CalendarModal
