import { combineReducers } from '@reduxjs/toolkit'
import viewSlice from 'src/scenes/_slice/view.slice'
import eventSlice from 'src/scenes/_slice/event.slice'
import userSlice from 'src/scenes/_slice/user.slice'

const rootReducer = combineReducers({
  view: viewSlice,
  event: eventSlice,
  user: userSlice,
})

export default rootReducer
