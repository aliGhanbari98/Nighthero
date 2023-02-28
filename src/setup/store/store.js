import { configureStore } from '@reduxjs/toolkit'

import reducer from './root-reducer'

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const { dispatch, getState } = store
export default store
