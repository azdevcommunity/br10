// otpSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OTPState {
    countdown: number;
    resendAttempts: number;
    phoneNumber: string | null;
    timerRunning: boolean;  // To check if the timer is running or not
}

const initialState: OTPState = {
    countdown: 5,  // Default to 5 seconds
    resendAttempts: 0,
    phoneNumber: null,
    timerRunning: false,
};

export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        startTimer: (state, action: PayloadAction<string>) => {
            // Start countdown when user requests OTP
            if (state.phoneNumber === action.payload) {
                state.timerRunning = true;
            } else {
                // If the phone number changes, reset everything
                state.countdown = 5;
                state.resendAttempts = 0;
                state.phoneNumber = action.payload;
                state.timerRunning = true;
            }
        },
        decrementCountdown: (state) => {
            if (state.countdown > 0) {
                state.countdown -= 1;
            } else {
                state.timerRunning = false;
            }
        },
        stopTimer: (state) => {
            state.timerRunning = false;
        },
        resetCountdown: (state) => {
            state.countdown = 5;
            state.timerRunning = true;
        },
        incrementResendAttempts: (state) => {
            if (state.resendAttempts < 3) {
                state.resendAttempts += 1;
                state.countdown = 5;  // Reset countdown after resending
                state.timerRunning = true;
            }
        }
    }
});

export const {
    startTimer,
    decrementCountdown,
    stopTimer,
    resetCountdown,
    incrementResendAttempts,
} = otpSlice.actions;

export default otpSlice.reducer;