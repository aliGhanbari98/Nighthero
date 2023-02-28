import { createSlice } from '@reduxjs/toolkit'
import { errorAlert } from 'src/helpers/alerts'

const initialState = {
  type: '',
  city: '',
  filteredTypes: [{ title: 'Serata di ballo', image: 'danceNight.jpg', id: 1 }],
  selectedTimeSlots: [],
  selectedDate: '',
  selectedPeople: '',
}

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    loadFilteredTypes: (state, { payload }) => {
      const foundItem = state.filteredTypes.find(item => payload.id === item.id)
      let modifiedFilteredTypes = [...state.filteredTypes]
      if (foundItem) {
        modifiedFilteredTypes = modifiedFilteredTypes.filter(
          item => item.id !== foundItem.id,
        )
        if (modifiedFilteredTypes.length === 0) {
          errorAlert({
            message: '',
            detail: 'deve essere selezionata almeno una categoria',
          })
          return
        }
      } else modifiedFilteredTypes.push(payload)

      return {
        ...state,
        filteredTypes: modifiedFilteredTypes,
      }
    },
    loadSelectedTimeSlots: (state, { payload }) => {
      const foundItem = state.selectedTimeSlots.find(
        item => payload.id === item.id,
      )
      let modifiedTimeSlots = [...state.selectedTimeSlots]
      if (foundItem)
        modifiedTimeSlots = modifiedTimeSlots.filter(
          item => item.id !== foundItem.id,
        )
      else modifiedTimeSlots.push(payload)

      return {
        ...state,
        selectedTimeSlots: modifiedTimeSlots,
      }
    },
    loadSelectedDate: (state, { payload }) => ({
      ...state,
      selectedDate: payload,
    }),
    loadSelectedPeople: (state, { payload }) =>
      console.log(payload) || {
        ...state,
        selectedPeople: payload,
      },
  },
})

const { actions, reducer } = restaurantSlice
export default reducer

// ACTIONS
export const loadFilteredTypes = actions.loadFilteredTypes
export const loadSelectedTimeSlots = actions.loadSelectedTimeSlots
export const loadSelectedDate = actions.loadSelectedDate
export const loadSelectedPeople = actions.loadSelectedPeople

// VIEW
export const eventFilteredTypesView = state => state.event.filteredTypes
export const eventSelectedTimeSlots = state => state.event.selectedTimeSlots
export const eventSelectedDateView = state => state.event.selectedDate
export const eventSelectedPeopleView = state => state.event.selectedPeople
