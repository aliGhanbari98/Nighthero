import { combineReducers } from '@reduxjs/toolkit'
import viewSlice from 'src/scenes/_slice/view.slice'
import eventSlice from 'src/scenes/_slice/event.slice'

const rootReducer = combineReducers({
  view: viewSlice,
  event: eventSlice,
})

export default rootReducer
