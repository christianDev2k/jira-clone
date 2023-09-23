import { combineReducers } from '@reduxjs/toolkit';
import { ProjectSliceReducer } from './ProjectSlice/slice';

export const rootReducer = combineReducers({ ProjectSliceReducer });
