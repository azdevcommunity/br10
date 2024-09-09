import {apiSlice} from "../apiSlice";


const debtorSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            readProducts: builder.query({
                query: () => ({
                    url: `/products`,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'Content-Type': 'application/json',
                    },
                    method: "GET",
                }),
                providesTags: ['products'],
            }),
        };
    }
})

export const {
 useReadProductsQuery,
} = debtorSlice;