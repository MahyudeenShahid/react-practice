import { configureStore } from '@reduxjs/toolkit'
import  usersSlice from './Reducer/UserReducer'


export const store = configureStore({
  reducer: {
    users: usersSlice
  },
})