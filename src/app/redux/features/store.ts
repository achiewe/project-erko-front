import { configureStore } from "@reduxjs/toolkit";
import IsloadingSlice, { LoadingProps } from "./IsLoadingSlice";
import DropDownSlice, { DropDownProps } from "./DropDownSlice";
import ModalOpenSlice, { ModalProps } from "./ModalOpenSlice";

// store for every states
const store = configureStore({
   reducer:{
   isLoading:IsloadingSlice,
   isDropDown:DropDownSlice,
   openModal:ModalOpenSlice,
   }
})

// export type state to use it in the project
export type RootState = {
    isLoading:LoadingProps,
    isDropDown:DropDownProps
    openModal:ModalProps
}

export default store;