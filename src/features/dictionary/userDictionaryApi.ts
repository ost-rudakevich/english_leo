import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDictionary, IDictionaryData } from 'types/dictionary.interface'
import { BASE_URL } from 'utils/constants'

export const userDictionaryApi = createApi({
  reducerPath: 'addToDictionaryApi',

  tagTypes: ['DictionaryCard'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: build => ({
    getUserDictionary: build.query<IDictionary, number>({
      query: id => ({
        url: `dictionary/${id}`,
        method: 'GET'
      }),
      providesTags: result =>
        result
          ? [
              ...result.dictionary.map(({ id }) => ({
                type: 'DictionaryCard' as const,
                id
              })),
              { type: 'DictionaryCard', id: 'LIST' }
            ]
          : [{ type: 'DictionaryCard', id: 'LIST' }]
    }),
    editDictionary: build.mutation<IDictionary, IDictionary>({
      query: data => ({
        url: `dictionary/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: [{ type: 'DictionaryCard', id: 'LIST' }]
    }),
    addNewDictionary: build.mutation<IDictionary, number>({
      query: id => ({
        url: `dictionary/`,
        method: 'POST',
        body: {
          userid: id,
          id: id,
          dictionary: []
        }
      })
    })
  })
})

export const {
  useAddNewDictionaryMutation,
  useGetUserDictionaryQuery,
  useEditDictionaryMutation
} = userDictionaryApi
