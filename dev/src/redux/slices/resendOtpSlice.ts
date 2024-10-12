import { apiSlice } from "../apiSlice";

const resendOtpSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        resendOtp: builder.mutation({
            query: ({ data }) => ({
                url: '/auth/get-otp',
                method: 'POST',
                headers: {
                    'TIME_ZONE': '+04:00',
                    'Content-Type': 'application/json',
                },
                body: data, // The body should be exactly the otpData
            }),
            invalidatesTags: ['auth'], // Adjust tags as per your caching needs
        }),
    }),
});

export const { useResendOtpMutation } = resendOtpSlice;