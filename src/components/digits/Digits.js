import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { digitsArray, setDigit } from './digitsSlice';
import SingleDigit from './SingleDigit';

const Digits = () => {
	const dispatch = useDispatch();
	const digits = useSelector(digitsArray);

	const handleChange = useCallback(
		(value, index) => {
			dispatch(setDigit({ value, index }));
		},
		[dispatch]
	);

	return (
		<div className='flex'>
			{digits?.map((item, index) => {
				return (
					<SingleDigit
						key={index}
						index={index}
						value={item}
						onChange={handleChange}
					/>
				);
			})}
		</div>
	);
};

export default Digits;
