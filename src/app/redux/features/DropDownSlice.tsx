import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// state type
export interface DropDownProps {
  isDropDown: boolean;
}

// write initial type of the state
const initialState: DropDownProps = {
  isDropDown: true,
};

const DropDownSlice = createSlice({
  name: "isDropDown",
  initialState,
  reducers: {
    setDropDown: (state, action: PayloadAction<boolean>) => {
      state.isDropDown = action.payload;
    },
  },
});

//export setState
export const { setDropDown } = DropDownSlice.actions;
export default DropDownSlice.reducer;
