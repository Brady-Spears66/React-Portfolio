/* External Imports */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Project } from '../../types'



type ProjectsState = {
    selectedCategory: string;
    openDialog: boolean;
    selectedProject: Project | null;
}

/**
 * Controls the state and application logic for the current theming
 */
export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        selectedCategory: "All",
        openDialog: false,
        selectedProject: null
    } as ProjectsState,
    reducers: {
        /**
         * Sets the current projects selected category
         */
        setSelectedCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;
        },
        setOpenDialog: (state, action: PayloadAction<boolean>) => {
            state.openDialog = action.payload
        },
        setSelectedProject: (state, action: PayloadAction<Project | null>) => {
            state.selectedProject = action.payload
        }
    }
});

export const { setSelectedCategory, setOpenDialog, setSelectedProject } = projectsSlice.actions
const projectsReducer = projectsSlice.reducer;
export default projectsReducer;