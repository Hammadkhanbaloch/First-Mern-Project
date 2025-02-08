import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user/userslice.js'

export const store = configureStore({
  reducer: {user:useReducer},
  madleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})