import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Result from './pages/result';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="/" element={<Result />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
