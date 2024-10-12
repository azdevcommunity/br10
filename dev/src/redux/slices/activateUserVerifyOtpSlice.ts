import { apiSlice } from "../apiSlice";

const activateUserVerifyOtpSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        activateUserVerifyOtp: builder.mutation({
            query: ({ otpData, activityId }) => ({
                url: '/auth/activate-user-verify-otp',
                method: 'POST',
                headers: {
                    'TIME_ZONE': '+04:00',
                    'ACTIVITY_ID': activityId, // Ensure the activityId is passed as a header
                    'Content-Type': 'application/json',
                },
                body: otpData, // The body should be exactly the otpData
            }),
            invalidatesTags: ['auth'], // Adjust tags as per your caching needs
        }),
    }),
});

export const { useActivateUserVerifyOtpMutation } = activateUserVerifyOtpSlice;