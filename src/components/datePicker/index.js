import { useState } from 'react'
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { useStyle } from './style'

// dayjs('2014-08-18T21:11:54')

const DatePicker = ({ date, setDate }) => {
  const classes = useStyle()

  const handleChange = newValue => {
    setDate(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Pick a date"
        inputFormat="MM/DD/YYYY"
        value={date}
        onChange={handleChange}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePicker
