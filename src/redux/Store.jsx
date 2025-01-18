import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
  madleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})