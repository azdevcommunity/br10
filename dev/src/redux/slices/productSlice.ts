import {apiSlice} from "../apiSlice";


const debtorSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            readProducts: builder.query({
                query: () => ({
                    url: `/products`,
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