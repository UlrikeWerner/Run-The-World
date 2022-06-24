//import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Result from './pages';
import CreatePage from './pages/create';
import {GlobalStyle} from './styles';

export default function App() {
	//const [activity, setActivity] = useState([]);
	return (
		<>
			{/*console.log('data', activity)*/}
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="/" element={<Result />} />
						<Route path="create/" element={<CreatePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
