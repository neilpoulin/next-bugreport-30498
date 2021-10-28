import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    ready: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setReady: (state, action: PayloadAction<{ ready: boolean }>) => {
            state.ready = action.payload.ready;
        },
    },
});

export default appSlice;
