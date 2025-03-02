
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
interface IAuthStore {
    email: string;
    password: string;
    status: boolean;
}



const defaultAuthState: IAuthStore = {
    email: '',
    password: '',
    status: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: defaultAuthState,
    reducers: {
        setAuth(state, action: PayloadAction<IAuthStore>) {
            return action.payload;
        },
        clearAuth() {
            return defaultAuthState;
        },
    },
});

const loadingSlice = createSlice({
    name: 'loading',
    initialState: { isLoading: true },
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loading: loadingSlice.reducer,
    },
});

export const authActions = authSlice.actions;
export const loadingActions = loadingSlice.actions;

export const authReducer = authSlice.reducer;
export const loadingReducer = loadingSlice.reducer;