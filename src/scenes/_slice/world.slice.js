import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cities: [],
}

const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    loadCities: (state, { payload }) => ({ ...state, cities: payload }),
  },
})

const { actions, reducer } = worldSlice
export default reducer

// ACTIONS
export const loadCities = actions.loadCities

// VIEW
export const worldCitiesView = state => state.world.cities
