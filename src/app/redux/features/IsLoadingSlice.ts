import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// state type
export interface LoadingProps{
    isLoading:boolean
}


// write initial type of the state
const initialState:LoadingProps = {
    isLoading:true
};


// object createSlice where is properties to use it
const IsLoadingSlice = createSlice({
    name:"isLoading",
    initialState,
    reducers:{
        setIsLoading:(state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

//export setState
export const {setIsLoading} = IsLoadingSlice.actions
export default IsLoadingSlice.reducer