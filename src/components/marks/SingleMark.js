const SingleMark = (props) => {
	const { isFound } = props;
	return <span>{isFound ? '+' : '-'}</span>;
};

export default SingleMark;
