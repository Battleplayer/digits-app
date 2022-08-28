import { render } from '@testing-library/react';
import ReduxProvider from 'utils/tests/ReduxMock';

import Digits from '../Digits';

describe('digits component', () => {
	const { container } = render(
		<ReduxProvider>
			<Digits />
		</ReduxProvider>
	);

	it('should render all digits', () => {
		const digits = container.querySelectorAll('input');
		expect(digits).toHaveLength(4);
	});
});
