import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// state type
export interface ModalProps{
    openModal:boolean
}


// write initial type of the state
const initialState:ModalProps = {
    openModal:true
};


// object createSlice where is properties to use it
const ModalOpenSlice = createSlice({
    name:"openModal",
    initialState,
    reducers:{
        setOpenModal:(state, action:PayloadAction<boolean>) => {
            state.openModal = action.payload
        }
    }
})

//export setState
export const {setOpenModal} = ModalOpenSlice.actions
export default ModalOpenSlice.reducer