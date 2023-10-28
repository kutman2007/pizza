import { createSlice } from "@reduxjs/toolkit"
const initialState={
  total:0,
 items:[]
}
export const cartSlice= createSlice({
  name:'cart',
  initialState,
  reducers:{
     Productadd(state,action){
      const finditem =state.items.find((obj)=>obj.id===action.payload.id)
      if(finditem){
        finditem.count++
      }else{
      state.items.push({
        ...action.payload,
        count:1
      })
      }
        state.total=state.items.reduce((sum,obj)=>{
        return obj.price*obj.count+sum
      },0)
    },
    minusitem(state,action){
      const itemId = action.payload;
      const finditem = state.items.find((item) => item.id === itemId);
      
    if (finditem && finditem.count > 0) {
        finditem.count--;
        state.total = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }    
    },
    Removeadd(state,action){
        state.items=state.items.filter((obj)=>obj.id !==action.payload)
      },
      Clearadd(state){
        state.items=[]
        state.total=0
      },
  }
}) 
export const {Productadd,Removeadd,Clearadd,minusitem }= cartSlice.actions
export default cartSlice.reducer