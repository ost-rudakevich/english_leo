import { IUserData } from '../../../types/user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ICurrentUser } from './current-user-slice.interface'

const initialState: ICurrentUser = {
  user: null
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload
    }
  }
})

export const { addCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer
