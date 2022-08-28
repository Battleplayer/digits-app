import { store } from 'app/store';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }) => (
	<Provider store={Object.assign(store)}>{children}</Provider>
);

export default ReduxProvider;
