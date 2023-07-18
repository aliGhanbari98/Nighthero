export const checkForMatches = (item, array, checkKey = 'id') => {
  const result = array.find(el => {
    return el[checkKey] === item[checkKey]
  })
  return result
}

function getItemByWeekday(date, items) {
  console.log({ date })
  const weekday = date
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toUpperCase()
  const item = items.find(item => item.weekday === weekday)
  console.log(item)
  return item || null
}

export const extractTimeslots = (workingHours, date = null) => {
  let item = {}
  if (date) {
    const specificDate = new Date(date)

    item = getItemByWeekday(specificDate, workingHours)
  } else {
    item = workingHours.reduce((prev, curr) => {
      const prevDuration =
        new Date(`2000-01-01T${prev.timeTo}`).getTime() -
        new Date(`2000-01-01T${prev.timeFrom}`).getTime()
      const currDuration =
        new Date(`2000-01-01T${curr.timeTo}`).getTime() -
        new Date(`2000-01-01T${curr.timeFrom}`).getTime()
      return prevDuration > currDuration ? prev : curr
    })
  }

  // Create the array with time slots
  const timeFrom = new Date(`2000-01-01T${item.timeFrom}`)
  const timeTo = new Date(`2000-01-01T${item.timeTo}`)
  const timeSlots = []

  while (timeFrom <= timeTo) {
    const hours = timeFrom.getHours()
    const minutes = timeFrom.getMinutes()
    const timeSlot = `${hours < 10 ? '0' : ''}${hours}:${
      minutes === 0 ? '00' : minutes
    }`

    timeSlots.push(timeSlot)

    // Increment the time by 30 minutes
    timeFrom.setMinutes(timeFrom.getMinutes() + 30)
  }

  return timeSlots.map((time, i) => ({ time, id: i + 1 }))
}

export const formatDate = (date, excludeYear = false) => {
  const originalDate = new Date(date)

  const day = originalDate.getDate().toString().padStart(2, '0')
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0')
  const year = originalDate.getFullYear().toString()

  return excludeYear ? `${day}/${month}` : `${day}/${month}/${year}`
}
