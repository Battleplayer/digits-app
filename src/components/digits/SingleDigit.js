const SingleDigit = (props) => {
	const { onChange, index, value } = props;

	const handleSetValue = (e) => {
		const { value, name } = e.target;
		if (isNaN(value)) return;
		onChange(value, name);
	};

	return (
		<input
			className='digit'
			type='text'
			maxLength={1}
			value={value}
			name={index}
			onChange={handleSetValue}
			pattern='[0-9]*'
		/>
	);
};

export default SingleDigit;
