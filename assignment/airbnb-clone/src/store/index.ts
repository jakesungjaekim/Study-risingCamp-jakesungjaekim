import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from '@reduxjs/toolkit/query'
import { windowSizeApi } from './apis/windowSizeApi'


export const store = configureStore({
  reducer: {
    [windowSizeApi.reducerPath]: windowSizeApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware()
    .concat(windowSizeApi.middleware)
  }
})

setupListeners(store.dispatch)

export { useGetWindowSizeQuery } from './apis/windowSizeApi'