import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {infoPersonReducer} from './infos/info-slice'; // Seu rootReducer
import {infoPeopleReducer} from './infos/info-peoples-slice'; // Seu rootReducer
import {modalDetailsReducer} from './details/details-slice'

const persistConfig = {
  key: 'person',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, infoPersonReducer)

export const store = configureStore({
  reducer: {
    persistedReducer,
    modalDetailsReducer,
    infoPeopleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
