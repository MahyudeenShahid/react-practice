import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // console.log("action", action.payload);
      state.value = action.payload;
    },
  },
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer