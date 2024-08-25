import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {RootState} from "./store";


interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:["auth","debtor","task","debt","payment","cashflow"],
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BR10_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState() as RootState).auth.jwt;
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5dXNpZiIsImlhdCI6MTcwMzE0NjQzNCwiZXhwIjoxNzA0ODc0NDM0fQ.0z76UwiHhp0TQWZVpp7ly134BJ2DWkdLej01b78_ir0"
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            headers.set('content-type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});