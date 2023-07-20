import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhoto } from '../../@types/IPhto';

const photoApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchPhotos: builder.query<IPhoto, { page: number; limit: number }>({
        query: ({ page = 1, limit = 10 }) => `/photos?page=${page}&limit=${limit}`,
      }),
    }
  }
})

export const { useFetchPhotosQuery } = photoApi;
export { photoApi }
