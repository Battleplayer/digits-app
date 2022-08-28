import { configureStore } from '@reduxjs/toolkit';

import digitsReducer from '../components/digits/digitsSlice';

export const store = configureStore({
	reducer: {
		digits: digitsReducer,
	},
});
