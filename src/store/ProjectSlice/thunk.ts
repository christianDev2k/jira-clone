import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectService } from 'services';

export const getAllProjectThunk = createAsyncThunk(
    'getAllProjectThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await ProjectService.getAllProject();
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
