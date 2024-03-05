import { configureStore } from '@reduxjs/toolkit';
import StoreSlice from './StoreSlice';

export default configureStore({
    reducer: {
        store: StoreSlice
    }
});