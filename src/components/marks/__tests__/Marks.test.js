import { render, screen } from '@testing-library/react';
import ReduxProvider from 'utils/tests/ReduxMock';

import Marks from '../Marks';

describe('marks component', () => {
	render(
		<ReduxProvider>
			<Marks />
		</ReduxProvider>
	);

	it('should render all marks', () => {
		const marks = screen.queryAllByText('-');
		expect(marks).toHaveLength(4);
	});

	it('should not display modal', () => {
		const header = screen.queryByText('Congratz');
		expect(header).toBeNull();
	});
});
