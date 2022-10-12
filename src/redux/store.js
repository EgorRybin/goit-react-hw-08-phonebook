import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { filterReducer } from './contactsSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
