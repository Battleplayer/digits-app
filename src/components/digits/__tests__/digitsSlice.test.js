import digitsSlice, { generateArray, setDigit } from '../digitsSlice';

let generatedArr;
(function () {
	generatedArr = generateArray();
})();

describe('digits reducer', () => {
	const initialState = {
		digits: [0, 0, 0, 0],
		searchArray: generatedArr,
	};

	it('should handle initial state', () => {
		expect(digitsSlice(initialState, { type: 'unknown' })).toEqual({
			digits: [0, 0, 0, 0],
			searchArray: generatedArr,
		});
	});

	it('should set new digit', () => {
		const actual = digitsSlice(
			initialState,
			setDigit({
				value: 1,
				index: 0,
			})
		);
		expect(actual.digits).toEqual([1, 0, 0, 0]);
	});
});
