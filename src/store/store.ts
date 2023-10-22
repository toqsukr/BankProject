import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { cardSlice } from './cards/cards.slice';
import { contactSlice } from './contacts/contacts.slice';
import { userSlice } from './user/user.slice';

const persistConfig = {
  key: 'bank-project',
  storage
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cards: cardSlice.reducer,
  contacts: contactSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
