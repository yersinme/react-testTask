import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './AuthStore/Auth.store';


const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  }
});

export default store