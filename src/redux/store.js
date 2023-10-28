import { configureStore } from '@reduxjs/toolkit'
import filter from './slice/filterslice'
import cart from './slice/cartSlice'
import pizza from './slice/pizzasSlice'
export const store = configureStore({
  reducer: {
   filter,
   cart,
   pizza
  },
})
