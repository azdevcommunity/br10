import {apiSlice} from "../apiSlice";


const debtorSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            readProducts: builder.query({
                query: (id) => ({
                    url: `/products/specialist/${id}`,
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