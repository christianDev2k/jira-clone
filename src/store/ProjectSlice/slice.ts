import { createSlice } from '@reduxjs/toolkit';
import { AllProjectType } from 'types';
import { getAllProjectThunk } from '.';

type initialStateType = {
    allProjects: AllProjectType[];
    isFetchingAllProjects: boolean;
};

const initialState: initialStateType = {
    allProjects: [],
    isFetchingAllProjects: false,
};

const ProjectSlice = createSlice({
    name: 'ProjectSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProjectThunk.pending, state => {
                state.isFetchingAllProjects = true;
            })
            .addCase(getAllProjectThunk.fulfilled, (state, { payload }) => {
                state.allProjects = payload;
                state.isFetchingAllProjects = false;
            })
            .addCase(getAllProjectThunk.rejected, state => {
                state.isFetchingAllProjects = false;
            });
    },
});

export const { reducer: ProjectSliceReducer, actions: ProjectActions } = ProjectSlice;
