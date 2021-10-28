import { combineReducers } from '@reduxjs/toolkit';
import appSlice from '@store/slices/app';

/**
 * The App's main reducers. This is where new Slicers should be added.
 * @type {Reducer<RootState>}
 */
const appReducer = combineReducers({
    [appSlice.name]: appSlice.reducer,
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
