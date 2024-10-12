import { apiSlice } from "../apiSlice";

const registerSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                headers: {
                    'TIME_ZONE': '+04:00',
                    'Content-Type': 'application/json',
                },
                body: userData,
            }),
            invalidatesTags: ['auth'],
        }),
    }),
});

export const { useRegisterUserMutation } = registerSlice;