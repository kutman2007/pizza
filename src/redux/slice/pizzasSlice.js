
import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
// import axios from "axios"
const initialState = {
    items: []
}
//  export const fetchUserById = createAsyncThunk(
//     'pizza/fetchByIdStatus',
//     async (params) => {
//         const {category,order,searh,pageCount,sortyipe}=params
//     // const {data}= await axios.get(`https://64ad6fe3b470006a5ec5f6a0.mockapi.io/pic?&limit=4${category}&page=${pageCount}&sortBy=${sortyipe.replace('-', '')}&order=${order}${searh}`)
//     // return data
//     const {data}= await axios.get(`https://64ad6fe3b470006a5ec5f6a0.mockapi.io/pic?&limit=4${category}&page=${pageCount}&sortBy=${sortyipe.replace('-', '')}&order=${order}${searh}`)
//    return data
// }
//   )
export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setitems(state, action) {
            state.items = action.payload
        }
    },
//     extraReducers: {
//         [fetchUserById.pending]:(state)=>{
//         console.log(state,'loading')
//     },
//     [fetchUserById.fulfilled]:(state)=>{
//         console.log(state,'ok')
//     },
//     [fetchUserById.rejected]:(state)=>{
//         console.log(state,'bom')
//     }
// }
})
export const { setitems } = pizzasSlice.actions
export default pizzasSlice.reducer