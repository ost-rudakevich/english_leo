import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WORD_AUDIO } from 'utils/constants'

export const audioApi = createApi({
  reducerPath: 'audioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: WORD_AUDIO
  }),
  endpoints: build => ({
    getAudio: build.query<any, string>({
      query: word => ({
        url: word
      })
    })
  })
})

export const { useGetAudioQuery } = audioApi
export default audioApi
