// packages
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected: false,
    userProfil: null,
    role: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isConnected = true;
      state.userProfil = action.payload.profile;
      state.role = action.payload.profile[0].role
    },
    loggedOut: (state) => state = initialState,
  },
});

export const {
  loggedIn,
  loggedOut,
} = userSlice.actions;

export default userSlice.reducer;
