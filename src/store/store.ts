import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reducer, { RootState } from '@store/reducers';
import { StoreEnhancer } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type { RootState };
export type VoidThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppThunk<R, P = Promise<R>> = ThunkAction<P, RootState, unknown, Action<string>>;

export type StoreType = ReturnType<typeof createStore>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = StoreType['dispatch'];
export const useTypedDispatch = (): AppDispatch => useDispatch();

export const createStore = (options: { devTools?: boolean; isServer?: boolean } = {}) => {
    const { devTools = true, isServer } = options;
    const enhancers: StoreEnhancer[] = [];
    if (!isServer) {
        // const sentryReduxEnhancer = Sentry.createReduxEnhancer();
        // enhancers.push(sentryReduxEnhancer);
    }

    return configureStore<RootState>({
        reducer,
        devTools,
        enhancers,
    });
};
