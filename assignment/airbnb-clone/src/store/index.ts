import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from '@reduxjs/toolkit/query'
import { photoApi } from './apis/photoApi'

export const store = configureStore({
  reducer: {
    [photoApi.reducerPath]: photoApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware()
      .concat(photoApi.middleware)
  }
})

setupListeners(store.dispatch)

export { useFetchPhotosQuery } from './apis/photoApi'