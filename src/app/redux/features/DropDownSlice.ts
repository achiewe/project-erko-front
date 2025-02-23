import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state type
export interface DropDownProps {
  isDropDown: boolean;
  activeMenu: string | null;
}

// Initial state
const initialState: DropDownProps = {
  isDropDown: false,
  activeMenu: null,
};

const DropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    setIsDropDown: (state, action: PayloadAction<string | null>) => {
      if (state.activeMenu === action.payload) {
        state.isDropDown = !state.isDropDown; // Toggle dropdown
      } else if (action.payload === null) {
        state.isDropDown = false; // Close dropdown
        state.activeMenu = null;
      } else {
        state.isDropDown = true;
      }
      state.activeMenu = action.payload;
    },
  },
});

// Export actions and reducer
export const { setIsDropDown } = DropDownSlice.actions;
export default DropDownSlice.reducer;
