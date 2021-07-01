import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'videoId',
    initialState: {
        id: null
    },
    reducers: {
        update: (state = initialState, action) => {
            state.id = action.payload;
        }
    }
});

export const { update } = videoSlice.actions;

export default videoSlice.reducer;
