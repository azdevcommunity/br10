// @ts-ignore
import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer:  {
        [apiSlice.reducerPath]: apiSlice.reducer,
    }
    ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch as any );