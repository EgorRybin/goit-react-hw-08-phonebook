import {
  configureStore,
  // combineReducers
} from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage'; 

import { filterReducer } from './contactsSlice';
import { contactsReducer } from './contactsSlice';
import { authReduser } from './auth/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactsReducer,
//   auth: authReduser,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware: gedDefaultMiddlewares =>
    gedDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
  // middleware: gedDefaultMiddlewares =>
  //   gedDefaultMiddlewares({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
// });

export const persistor = persistStore(store);

