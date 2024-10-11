import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IResponseUserData,
  IUserData,
  IUserLoginData
} from 'types/user.interface'
import { BASE_URL } from 'utils/constants'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: build => ({
    addUserData: build.mutation<IResponseUserData, IUserData>({
      query: userData => ({
        url: 'users',
        method: 'POST',
        body: userData
      })
    }),
    setUserData: build.mutation<IResponseUserData, IUserLoginData>({
      query: userData => ({
        url: `login`,
        method: 'POST',
        body: userData
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('authToken')}`
        // }
      })
    })
  })
})

export const { useAddUserDataMutation, useSetUserDataMutation } = userAuthApi
