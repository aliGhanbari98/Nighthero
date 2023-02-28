import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  visitedSteps: [],
  deliveryIsAdded: false,
  loginModalExpanded: false,
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => ({ ...state, isLoading: payload }),
    setVisitedSteps: (state, { payload }) => ({
      ...state,
      visitedSteps: state.visitedSteps.includes(payload)
        ? state.visitedSteps
        : [...state.visitedSteps, payload],
    }),
    setDeliveryIsAdded: (state, { payload }) => ({
      ...state,
      deliveryIsAdded: payload,
    }),
    resetViewSlice: () => initialState,
    setLoginModalexpanded: (state, { payload }) => ({
      ...state,
      loginModalExpanded: payload,
    }),
  },
})

const { actions, reducer } = viewSlice
export default reducer

// ACTIONS
export const setIsLoading = actions.setIsLoading
export const setVisitedSteps = actions.setVisitedSteps
export const setDeliveryAdded = actions.setDeliveryIsAdded
export const resetViewSlice = actions.resetViewSlice
export const setLoginModalExpanded = actions.setLoginModalexpanded

// VIEW
export const viewIsLoading = state => state.view.isLoading
export const viewVisitedSteps = state => state.view.visitedSteps
export const viewDeliveryIsAdded = state => state.view.deliveryIsAdded
export const viewLoginModalExpanded = state => state.view.loginModalExpanded
