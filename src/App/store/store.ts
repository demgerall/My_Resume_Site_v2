import { configureStore } from '@reduxjs/toolkit';

import { projectsSlice, worksSlice } from '@/features';

export const store = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
        works: worksSlice.reducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
