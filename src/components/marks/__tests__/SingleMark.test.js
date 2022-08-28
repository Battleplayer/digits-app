import { render, screen } from '@testing-library/react';
import ReduxProvider from 'utils/tests/ReduxMock';

import SingleMark from '../SingleMark';

const MockComponent = (props) => {
	const { isFound } = props;
	return (
		<ReduxProvider>
			<SingleMark isFound={isFound} />
		</ReduxProvider>
	);
};

describe('SingleMark component', () => {
	it('MockComponent is rendered initially', () => {
		render(<MockComponent isFound={false} />);
		const mark = screen.queryByText('-');
		expect(mark).toBeInTheDocument();
	});

	it('MockComponent is receive confirm', () => {
		render(<MockComponent isFound={true} />);
		const mark = screen.queryByText('+');
		expect(mark).toBeInTheDocument();
	});

	it('MockComponent value is updating', () => {
		const { rerender } = render(<MockComponent isFound={true} />);
		expect(screen.queryByText('+')).toBeInTheDocument();
		expect(screen.queryByText('-')).toBeNull();

		rerender(<MockComponent isFound={false} />);
		expect(screen.queryByText('-')).toBeInTheDocument();
		expect(screen.queryByText('+')).toBeNull();
	});
});
