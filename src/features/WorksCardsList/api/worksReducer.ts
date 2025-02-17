import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { workType } from '@/shared/libs/types';

export const getWorks = createAsyncThunk(
    'works/getWorks',
    async (lng: string, thunkApi) => {
        try {
            const response = await axios.get(
                `/My_Resume_Site_v2/data/${lng.slice(0, 2)}/WorksData.json`,
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
);

interface StateSchema {
    works: Array<workType>;
    isLoading: boolean;
}

const initialState: StateSchema = {
    works: [],
    isLoading: false,
};

export const worksSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWorks.pending, state => {
                state.isLoading = true;
            })
            .addCase(getWorks.fulfilled, (state, action) => {
                state.works = action.payload;
                state.isLoading = false;
            })
            .addCase(getWorks.rejected, state => {
                state.isLoading = false;
            });
    },
});
