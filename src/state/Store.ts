import projectsReducer from './theme/ProjectsSlice';
import themeReducer, {themeSlice} from './theme/ThemeSlice'
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectsReducer
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;