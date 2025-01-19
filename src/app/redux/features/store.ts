import { configureStore } from "@reduxjs/toolkit";
import IsloadingSlice, { LoadingProps } from "./IsLoadingSlice";

// store for every states
const store = configureStore({
   reducer:{
   isLoading:IsloadingSlice
   }
})

// export type state to use it in the project
export type RootState = {
    isLoading:LoadingProps
}

export default store;