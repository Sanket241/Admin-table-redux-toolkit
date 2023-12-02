import { createSlice } from "@reduxjs/toolkit";
// import DeleteAllUser from "../../Component/DeleteAllUser";
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            // console.log("hii"+action.payload)
            // state.pop(action.payload)
            state.splice(action.payload,1)
        },
        deleteallUser(state,action){
            // state.remove(action.payload)
            // console.log("hii")
            return [];
        },
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteallUser,()=>{
            return [];
        })
    }
})
console.log(userSlice.actions)
console.log(userSlice)
export default userSlice.reducer;
export const  {addUser, removeUser, deleteallUser} = userSlice.actions;