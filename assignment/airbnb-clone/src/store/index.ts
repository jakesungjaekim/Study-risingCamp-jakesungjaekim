import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    //...
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware()
    .concat()
    .concat()
  }
})

setupListeners(store.dispatch)

