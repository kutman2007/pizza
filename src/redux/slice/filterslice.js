import { createSlice } from "@reduxjs/toolkit"
const initialState={
  categoriosid:0,
  pageCount:1,
  sortt:{
    name: 'популярности', sortport: 'rating' 
  }
}
export const filterSlice= createSlice({
  name:'filters',
  initialState,
  reducers:{
     setcategoriosid(state,action){
      state.categoriosid=action.payload
    },
    setsort(state,action){
      state.sortt=action.payload
    },
    setpageCount(state,action){
      state.pageCount=action.payload
    },
  }
}) 
export const {setcategoriosid,setsort,setpageCount }= filterSlice.actions
export default filterSlice.reducer