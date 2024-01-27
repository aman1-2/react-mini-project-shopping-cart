import { createSlice } from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        /*Defined the functionalities to be perforemd
        Payload returns the whole state(or the data present) on which we can perform any
        action -> used moast of the time with action only. */
        add: (state,action)=>{
            state.push(action.payload)},
        remove: (state,action)=>{
            return state.filter((item)=>(item.id !== action.payload))}
    }
});

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;