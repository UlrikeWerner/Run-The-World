import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import Result from './pages/result';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="result/" element={<Result />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
