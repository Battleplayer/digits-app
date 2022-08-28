import { digitsArray, searchArray } from 'components/digits/digitsSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SingleMark from './SingleMark';

const Marks = () => {
	const digits = useSelector(digitsArray);
	const search = useSelector(searchArray);
	const [isFound, setIsFound] = useState(false);

	useEffect(() => {
		if (digits?.join('') === search?.join('')) {
			setIsFound(true);
		}
	}, [digits, search]);

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<>
			{isFound && (
				<div className='modal'>
					<h1>Congratz</h1>
					<p>You found them all</p>
					<button onClick={handleReload}>try again</button>
				</div>
			)}
			<div className='flex'>
				{search?.map((digit, index) => {
					const isFound = digits[index] === digit;
					return <SingleMark key={index} isFound={isFound} />;
				})}
			</div>
		</>
	);
};

export default Marks;
