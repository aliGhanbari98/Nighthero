import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  guestUserInfo: {
    fullName: '',
    email: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadGuestUserInfo: (state, { payload }) => ({
      ...state,
      guestUserInfo: payload,
    }),
  },
})

const { actions, reducer } = userSlice
export default reducer

// ACTIONS
export const loadGuestUserInfo = actions.loadGuestUserInfo

// VIEW
export const guestUserInfoView = state => state.user.guestUserInfo
