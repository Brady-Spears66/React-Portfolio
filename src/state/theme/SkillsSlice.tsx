/* External Imports */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types";

type SkillsState = {
  selectedCategory: Category;
};

/**
 * Controls the state and application logic for the current theming
 */
export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    selectedCategory: "languages",
  } as SkillsState,
  reducers: {
    /**
     * Sets the current projects selected category
     */
    setSelectedCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = skillsSlice.actions;
const skillsReducer = skillsSlice.reducer;
export default skillsReducer;
