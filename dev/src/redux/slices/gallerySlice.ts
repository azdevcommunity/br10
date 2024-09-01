import {apiSlice} from "../apiSlice";


const debtorSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            // createCashFlow: builder.mutation<BaseResult<CashFlowCreateResponseDTO>, CashFlowCreateRequestDTO>({
            //     query: (body) => ({
            //         url: "cashflow/create",
            //         method: "POST",
            //         body
            //     }),
            //     invalidatesTags: ["cashflow"]
            // }),
            // updateCashFlow: builder.mutation<BaseResult<CashFlowUpdateResponseDTO>, CashFlowUpdateRequestDTO>({
            //     query: (body) => ({
            //         url: "cashflow/update",
            //         method: "POST",
            //         body
            //     }),
            //     invalidatesTags: ["cashflow"]
            // }),
            // deleteCashFlow: builder.mutation<BaseResult<string>, EntityById>({
            //     query: (body) => ({
            //         url: "cashflow/delete",
            //         method: "POST",
            //         body
            //     }),
            //     invalidatesTags: ["cashflow"]
            // }),
            readGalleries: builder.query({
                query: () => ({
                    url: `/galleries`,
                    method: "GET",
                }),
                providesTags: ['galleries'],
            }),
            // readCashFlowByDebt: builder.query<BaseResult<Array<CashFlowReadResponseDTO>>, EntityById>({
            //     query: (body) => ({
            //         url: `cashflow/by-debt`,
            //         method: "POST",
            //         body
            //     }),
            //     providesTags: ['cashflow'],
            // }),
        };
    }
})

export const {
 useReadGalleriesQuery,
} = debtorSlice;