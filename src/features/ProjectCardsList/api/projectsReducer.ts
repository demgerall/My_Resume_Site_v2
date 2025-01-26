import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { projectType } from '@/shared/libs/types';

export const getProjects = createAsyncThunk(
    'projects/getProjects',
    async (__, thunkApi) => {
        try {
            const response = await axios.get('public/data/ProjectsData.json');
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
);

interface StateSchema {
    projects: Array<projectType>;
    isLoading: boolean;
}

const initialState: StateSchema = {
    projects: [],
    isLoading: false,
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProjects.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.isLoading = false;
            })
            .addCase(getProjects.rejected, state => {
                state.isLoading = false;
            });
    },
});
