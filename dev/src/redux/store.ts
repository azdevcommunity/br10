// @ts-ignore
import { configureStore } from '@reduxjs/toolkit';
import otpReducer from './slices/otpSlice.ts';
// @ts-ignore
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer:  {
        [apiSlice.reducerPath]: apiSlice.reducer,
        otp: otpReducer
    }
    ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch as any );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;