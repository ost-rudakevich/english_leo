import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userAuthApi } from './user/user-auth-api/userAuthApi'
import currentUserSlice from './user/current-user-slice/currentUserSlice'
import globalDictionaryApi from './dictionary/globalDictionaryApi'
import audioApi from './dictionary/wordAudioApi'
import { userDictionaryApi } from './dictionary/userDictionaryApi'

const rootReducer = combineReducers({
  [userAuthApi.reducerPath]: userAuthApi.reducer,
  [globalDictionaryApi.reducerPath]: globalDictionaryApi.reducer,
  [userDictionaryApi.reducerPath]: userDictionaryApi.reducer,
  [audioApi.reducerPath]: audioApi.reducer,
  currentUser: currentUserSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['currentUser']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(
      userAuthApi.middleware,
      globalDictionaryApi.middleware,
      userDictionaryApi.middleware,
      audioApi.middleware
    )
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
