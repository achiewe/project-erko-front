import { createSlice } from "@reduxjs/toolkit";

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
    setIsDropDown: (state) => {
      state.isDropDown = !state.isDropDown;
    },
  },
});

//export setState
export const { setIsDropDown } = DropDownSlice.actions;
export default DropDownSlice.reducer;
