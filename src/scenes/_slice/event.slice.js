import { createSlice } from '@reduxjs/toolkit'
import { errorAlert } from 'src/helpers/alerts'

const initialState = {
  selectedEventType: '',
  selectedCity: '',
  selectedCategories: null,
  filteredTypes: [],
  musicGenres: [],
  cityZones: [],
  hasPromotion: false,
  hasLowPrice: false,
  filteredCategory: '',
  selectedTimeSlots: [],
  selectedDate: '',
  selectedPeople: '',
  constants: {
    musicGenres: [
      { id: 1, idWorld: 11, value: 'Techno' },
      { id: 2, idWorld: 11, value: 'Latino americana' },
      { id: 3, idWorld: 11, value: 'Raggaeton' },
      { id: 3, idWorld: 11, value: 'House' },
    ],
    nightTypes: [
      {
        id: 1,
        image: './images/danceNight.jpg',
        rank: 1,
        value: 'Serata di ballo',
      },
      {
        id: 2,
        image: './images/graduation.jpg',
        rank: 2,
        value: 'Festa di laurea',
      },
      {
        id: 3,
        image: './images/birthday.jpg',
        rank: 3,
        value: 'Festa di compleanno',
      },
      {
        id: 4,
        image: './images/corporateParty.jpg',
        rank: 4,
        value: 'Evento aziendale',
      },
    ],
    restaurantCategories: [],
    cities: [
      { key: 'Torino', value: 'TO' },
      { key: 'Milan', value: 'MI' },
      { key: 'Rome', value: 'RM' },
      { key: 'Padova', value: 'PD' },
      { key: 'Genova', value: 'GN' },
    ],
  },
  selectedRestaurant: null,
  selectedRestaurantEvents: [],
  finalEvent: {},
  selectedOffer: {},
  selectedBookingMethod: null,
}

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    loadFilteredTypes: (
      state,
      { payload: { data, checkForSingularity = false, reset = false } },
    ) => {
      if (reset) return { ...state, filteredTypes: [] }
      const foundItem = state.filteredTypes.find(item => data.id === item.id)
      let modifiedFilteredTypes = [...state.filteredTypes]
      if (foundItem) {
        modifiedFilteredTypes = modifiedFilteredTypes.filter(
          item => item.id !== foundItem.id,
        )
        if (checkForSingularity && modifiedFilteredTypes.length === 0) {
          errorAlert({
            message: '',
            detail: 'deve essere selezionata almeno una categoria',
          })
          return
        }
      } else modifiedFilteredTypes.push(data)

      return {
        ...state,
        filteredTypes: modifiedFilteredTypes,
      }
    },
    loadMusicGenres: (state, { payload }) => {
      const foundItem = state.musicGenres.find(item => payload.id === item.id)
      let modifiedMusicGenres = [...state.musicGenres]
      if (foundItem) {
        modifiedMusicGenres = modifiedMusicGenres.filter(
          item => item.id !== foundItem.id,
        )
      } else modifiedMusicGenres.push(payload)

      return {
        ...state,
        musicGenres: modifiedMusicGenres,
      }
    },
    loadSelectedCategories: (state, { payload }) => {
      return {
        ...state,
        selectedCategories:
          payload.id === state.selectedCategories?.id ? null : payload,
      }
    },
    loadCityZones: (state, { payload }) => {
      const foundItem = state.cityZones.find(item => payload.id === item.id)
      let modifiedCityZones = [...state.cityZones]
      if (foundItem) {
        modifiedCityZones = modifiedCityZones.filter(
          item => item.id !== foundItem.id,
        )
      } else modifiedCityZones.push(payload)

      return {
        ...state,
        cityZones: modifiedCityZones,
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
      else {
        if (modifiedTimeSlots.length < 1) modifiedTimeSlots.push(payload)
      }

      return {
        ...state,
        selectedTimeSlots: modifiedTimeSlots,
      }
    },
    loadSelectedDate: (state, { payload }) => ({
      ...state,
      selectedDate: payload,
    }),
    loadSelectedPeople: (state, { payload }) => ({
      ...state,
      selectedPeople: payload,
    }),
    loadSelectedCity: (state, { payload }) => ({
      ...state,
      selectedCity: payload,
    }),
    loadSelectedEventType: (state, { payload }) => ({
      ...state,
      selectedEventType: payload,
    }),
    loadHasPromotion: (state, { payload }) => ({
      ...state,
      hasPromotion: payload,
    }),
    loadHasLowPrice: (state, { payload }) => ({
      ...state,
      hasLowPrice: payload,
    }),
    loadConstants: (state, { payload }) => ({
      ...state,
      constants: { ...state.constants, ...payload },
    }),
    loadConstantsByKey: (state, { payload: { key, value } }) => ({
      ...state,
      constants: { ...state.constants, [key]: value },
    }),
    loadSelectedRestaurant: (state, { payload }) => ({
      ...state,
      selectedRestaurant: payload,
    }),
    loadSelectedRestaurantEvents: (state, { payload }) => ({
      ...state,
      selectedRestaurantEvents: payload,
    }),
    loadSelectedOffer: (state, { payload }) => ({
      ...state,
      selectedOffer: payload,
    }),
    loadSelectedBookingMethod: (state, { payload }) => ({
      ...state,
      selectedBookingMethod: payload,
    }),
    loadFinalEvent: (state, { payload }) => ({
      ...state,
      finalEvent: payload,
    }),
  },
})

const { actions, reducer } = restaurantSlice
export default reducer

// ACTIONS
export const loadFilteredTypes = actions.loadFilteredTypes
export const loadSelectedTimeSlots = actions.loadSelectedTimeSlots
export const loadSelectedDate = actions.loadSelectedDate
export const loadSelectedPeople = actions.loadSelectedPeople
export const loadSelectedCity = actions.loadSelectedCity
export const loadSelectedEventType = actions.loadSelectedEventType
export const loadMusicGenres = actions.loadMusicGenres
export const loadCityZones = actions.loadCityZones
export const loadHasPromotion = actions.loadHasLowPrice
export const loadHasLowPrice = actions.loadHasLowPrice
export const loadConstants = actions.loadConstants
export const loadConstantsByKey = actions.loadConstants
export const loadSelectedCategories = actions.loadSelectedCategories
export const loadSelectedRestaurant = actions.loadSelectedRestaurant
export const loadSelectedRestaurantEvents = actions.loadSelectedRestaurantEvents
export const loadSelectedOffer = actions.loadSelectedOffer
export const loadSelectedBookingMethod = actions.loadSelectedBookingMethod
export const loadFinalEvent = actions.loadFinalEvent

// VIEW
export const eventFilteredTypesView = state => state.event.filteredTypes
export const eventSelectedTimeSlots = state => state.event.selectedTimeSlots
export const eventSelectedDateView = state => state.event.selectedDate
export const eventSelectedPeopleView = state => state.event.selectedPeople
export const eventSelectedCityView = state => state.event.selectedCity
export const eventSelectedEventTypeView = state => state.event.selectedEventType
export const eventMusicGenresView = state => state.event.musicGenres
export const eventCityZonesView = state => state.event.cityZones
export const eventHasPromotionView = state => state.event.hasPromotion
export const eventHasLowPriceView = state => state.event.hasLowPrice
export const eventConstansView = state => state.event.constants
export const eventSelectedCategoriesView = state =>
  state.event.selectedCategories
export const eventSelectedRestaurantView = state =>
  state.event.selectedRestaurant
export const eventSelectedRestaurantEventsView = state =>
  state.event.selectedRestaurantEvents
export const eventSelectedOfferView = state => state.event.selectedOffer
export const eventSelectedBookingMethodView = state =>
  state.event.selectedBookingMethod
export const eventFinalEventView = state => state.event.finalEvent
