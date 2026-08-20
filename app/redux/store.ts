import { tokenSlice } from "./token";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userSlice } from "./user";
import { roomSlice } from "./room";

const noopStorage = {
  getItem: () => Promise.resolve(null),
  setItem: () => Promise.resolve(),
  removeItem: () => Promise.resolve(),
};

const createLocalStorage = () => {
  if (typeof window === "undefined") {
    return noopStorage;
  }

  try {
    const testKey = "__redux_persist_test__";
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
  } catch {
    return noopStorage;
  }

  return {
    getItem: (key: string) =>
      Promise.resolve(window.localStorage.getItem(key)),

    setItem: (key: string, value: string) => {
      try {
        window.localStorage.setItem(key, value);
        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    },

    removeItem: (key: string) =>
      Promise.resolve(window.localStorage.removeItem(key)),
  };
};

const storage = createLocalStorage();
const tokenPersistConfig = {
  key: 'token',
  storage,
  blacklist: ['loading', 'error'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['loading', 'error'],
};
const roomPersistConfig = {
  key: 'room',
  storage,
  whotelist: ['token'],
};
// 3. Create the persisted reducer
const persistedReducer = combineReducers({
  token: persistReducer(tokenPersistConfig, tokenSlice.reducer),
  user: userSlice.reducer,
  room: persistReducer(roomPersistConfig, roomSlice.reducer),
});

// 4. Configure the store with serialization checks ignored for redux-persist actions
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Export the persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type AppThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: { message: string };
};
