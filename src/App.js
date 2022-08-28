import './App.css';

import Digits from 'components/digits/Digits';
import Marks from 'components/marks/Marks';

const App = () => {
	return (
		<div className='App'>
			<div>
				<Digits />
				<Marks />
			</div>
		</div>
	);
};

export default App;
