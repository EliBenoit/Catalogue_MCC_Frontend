// packages
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected: false,
    userProfil: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isConnected = true;
      state.userProfile = action.payload.profile;
    },
    loggedOut: (state) => state = initialState,
  },
});

export const {
  loggedIn,
  loggedOut,
} = userSlice.actions;

export default userSlice.reducer;
