// packages
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import user from './Reducers/userReducer';

const rootReducer = combineReducers({
  user
});

export const store = configureStore({
  reducer: rootReducer,
})