import { createApi } from '@reduxjs/toolkit/query/react';

const windowSizeApi = createApi({
  reducerPath: 'windowSize',
  baseQuery: async () => {
    return new Promise((resolve)=> {
      const handleResize = () => {
        resolve({ data: window.innerWidth });
        window.removeEventListener('resize', handleResize)
      };

      window.addEventListener('resize', handleResize)

      resolve({ data: window.innerWidth })
    })
  },
  endpoints(builder) {
    return {
      getWindowSize: builder.query({
        query: () => ''
      })
    }
  }
})



export const { useGetWindowSizeQuery } = windowSizeApi
export { windowSizeApi }