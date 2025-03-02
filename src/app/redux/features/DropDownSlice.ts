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
      if (action.payload === null) {
        state.isDropDown = false; // Ensure dropdown is always closed
        state.activeMenu = null;
      } else if (state.activeMenu === action.payload) {
        state.isDropDown = !state.isDropDown; // Toggle dropdown
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
