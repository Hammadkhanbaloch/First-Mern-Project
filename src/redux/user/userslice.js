import { createSlice, current } from "@reduxjs/toolkit";
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
        },
        updateStart:(state)=>{state.loading=true},
        updateSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=null
        },
        updateFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
    },
        deleteStart:(state)=>{state.loading=true},
        deleteSuccess:(state)=>{
            state.loading=false
            state.currentUser=null
        },
        deleteFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
}
})
export const {loginStart,loginSuccess,loginFailure,logout,updateStart,updateSuccess,updateFailure,deleteStart,deleteSuccess,deleteFailure}=userSlice.actions;
export default userSlice.reducer;