import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRANSLATED_WORD } from 'utils/constants'

const apiKey = '289bbf2262msh5a5effee5c67a3ep199133jsn1007ced6c2ba'

export const globalDictionaryApi = createApi({
  reducerPath: 'dictionaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TRANSLATED_WORD
  }),
  endpoints: build => ({
    getTranslation: build.query<any, string>({
      query: name => ({
        url: `/get`,
        headers: {
          'x-rapidapi-key': apiKey
        },
        params: {
          langpair: 'en|uk',
          q: name
        }
      })
    })
  })
})

export const { useGetTranslationQuery } = globalDictionaryApi
export default globalDictionaryApi
