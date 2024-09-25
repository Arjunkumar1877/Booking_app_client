import { configureStore } from '@reduxjs/toolkit';
import useReducer from './userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    version: 1
}
const persistedUser = persistReducer(persistConfig, useReducer)

export const store = configureStore({
    reducer: {
        user: persistedUser
    }
})


export const persistor = persistStore(store)