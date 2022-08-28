import { render } from '@testing-library/react';
import ReduxProvider from 'utils/tests/ReduxMock';

import App from './App';

describe('app component', () => {
	const { container } = render(
		<ReduxProvider>
			<App />
		</ReduxProvider>
	);

	it('should render app', () => {
		const app = container.querySelector('.App');
		expect(app).toBeInTheDocument();
	});
});
