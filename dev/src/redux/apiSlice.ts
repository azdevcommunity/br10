import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:["galleries",],
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BR10_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            headers.set('content-type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});