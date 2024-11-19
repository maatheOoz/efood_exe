// Recursos externos
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<Efood[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureEfood: builder.query<Efood, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureEfoodQuery,
  useGetHomePageQuery,
  usePurchaseMutation
} = api
export default api
