import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//const { REACT_APP_BASE_URL } = process.env revisar porque el scope de las variables de entorno

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd72cb2381cmsh44c091ceb3d419cp162341jsnf4b6710b8ae4'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

const baseUrl = 'https://coinranking1.p.rapidapi.com'

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
    })
})

export const { useGetCryptoHistoryQuery, useGetCryptoDetailsQuery, useGetCryptosQuery } = cryptoApi