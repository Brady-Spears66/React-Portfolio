import projectsReducer from './theme/ProjectsSlice';
import skillsReducer from './theme/SkillsSlice';
import themeReducer, {themeSlice} from './theme/ThemeSlice'
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectsReducer,
        skills: skillsReducer
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;