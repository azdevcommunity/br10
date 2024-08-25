// import {apiSlice} from "../apiSlice";
export  {}


// const debtorSlice = apiSlice.injectEndpo ints({
//     endpoints: (builder) => {
//         return {
//             createCashFlow: builder.mutation<BaseResult<CashFlowCreateResponseDTO>, CashFlowCreateRequestDTO>({
//                 query: (body) => ({
//                     url: "cashflow/create",
//                     method: "POST",
//                     body
//                 }),
//                 invalidatesTags: ["cashflow"]
//             }),
//             updateCashFlow: builder.mutation<BaseResult<CashFlowUpdateResponseDTO>, CashFlowUpdateRequestDTO>({
//                 query: (body) => ({
//                     url: "cashflow/update",
//                     method: "POST",
//                     body
//                 }),
//                 invalidatesTags: ["cashflow"]
//             }),
//             deleteCashFlow: builder.mutation<BaseResult<string>, EntityById>({
//                 query: (body) => ({
//                     url: "cashflow/delete",
//                     method: "POST",
//                     body
//                 }),
//                 invalidatesTags: ["cashflow"]
//             }),
//             readCashFlowByUserAndDate: builder.query<BaseResult<Array<CashFlowReadResponseDTO>>, CashFlowReadByUserAndDateRequestDTO>({
//                 query: (body) => ({
//                     url: `cashflow/by-user-and-date`,
//                     method: "POST",
//                     body
//                 }),
//                 providesTags: ['cashflow'],
//             }),
//             readCashFlowByDebt: builder.query<BaseResult<Array<CashFlowReadResponseDTO>>, EntityById>({
//                 query: (body) => ({
//                     url: `cashflow/by-debt`,
//                     method: "POST",
//                     body
//                 }),
//                 providesTags: ['cashflow'],
//             }),
//         };
//     }
// })
//
// export const {
//     useCreateCashFlowMutation,
//     useDeleteCashFlowMutation,
//     useUpdateCashFlowMutation,
//     useReadCashFlowByUserAndDateQuery,
//     useReadCashFlowByDebtQuery
// } = debtorSlice;