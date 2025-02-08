import { createSlice, current } from "@reduxjs/toolkit";
import { VscLoading } from "react-icons/vsc";
const initialState={
    currentUser:null,
    error:null,
    loading:false 
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{state.loading=true},
        loginSuccess:(state,action)=>{
            state.loading=false
            state.currentUser=action.payload
        },
        loginFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        logout:(state)=>{
            state.currentUser=null
        }
    }
})
export const {loginStart,loginSuccess,loginFailure,logout}=userSlice.actions;
export default userSlice.reducer;