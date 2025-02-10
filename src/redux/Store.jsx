import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userslice.js'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'
const rootReducer = combineReducers({user:userReducer})
const persistConfig={
  key:'root',
  storage,
  version: 1,
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  madleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: ['persist/PERSIST'], // Ignores persist-related actions
      ignoredPaths: ['register'], // Ignore non-serializable values in state
    },
  }),
})
export const persistor = persistStore(store)