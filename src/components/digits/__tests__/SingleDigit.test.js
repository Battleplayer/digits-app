import { fireEvent, render, waitFor } from '@testing-library/react';
import ReduxProvider from 'utils/tests/ReduxMock';

import SingleDigit from '../SingleDigit';

const MockComponent = (props) => {
	const { onChange = () => jest.mock(), index = 0, value = 0 } = props;
	return (
		<ReduxProvider>
			<SingleDigit onChange={onChange} value={value} index={index} />
		</ReduxProvider>
	);
};

describe('SingleDigit component', () => {
	it('should render initially', () => {
		const { container } = render(<MockComponent />);
		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
	});

	it('input value changes', () => {
		const { container } = render(<MockComponent />);
		const input = container.querySelector('input');
		fireEvent.change(input, { target: { value: 1 } });
		waitFor(() => expect(input.value).toBe('1'));
	});

	it('input value does not changes', () => {
		const { container } = render(<MockComponent />);
		const input = container.querySelector('input');
		fireEvent.change(input, { target: { value: 'a' } });
		waitFor(() => expect(input.value).toBe('0'));
	});
});
