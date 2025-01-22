import { configureStore } from "@reduxjs/toolkit";
import IsloadingSlice, { LoadingProps } from "./IsLoadingSlice";
import DropDownSlice, { DropDownProps } from "./DropDownSlice";

// store for every states
const store = configureStore({
   reducer:{
   isLoading:IsloadingSlice,
   isDropDown:DropDownSlice
   }
})

// export type state to use it in the project
export type RootState = {
    isLoading:LoadingProps,
    isDropDown:DropDownProps
}

export default store;