import { createSlice } from '@reduxjs/toolkit';

const DIGITS_LENGTH = 4;

export const generateArray = () => {
	const arr = [];
	for (let i = 0; i < DIGITS_LENGTH; i++) {
		arr.push(Math.floor(Math.random() * 9 + 1).toString());
	}
	return arr;
};

const initialState = {
	digits: new Array(DIGITS_LENGTH).fill(0),
	searchArray: generateArray(),
};

export const digitsSlice = createSlice({
	name: 'digits',
	initialState,
	reducers: {
		setDigit: (state, action) => {
			const { value, index } = action.payload;
			state.digits[index] = value;
		},
	},
});

export const digitsArray = (state) => state.digits.digits;
export const searchArray = (state) => state.digits.searchArray;

export const { setDigit } = digitsSlice.actions;

export default digitsSlice.reducer;
