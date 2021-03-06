import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//const { REACT_APP_BASE_URL } = process.env revisar porque el scope de las variables de entorno

//claves

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
    })
})

export const { useGetExchangesQuery, useGetCryptoHistoryQuery, useGetCryptoDetailsQuery, useGetCryptosQuery } = cryptoApi