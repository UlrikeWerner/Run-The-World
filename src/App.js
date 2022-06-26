import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Result from './pages';
import CreatePage from './pages/create';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
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
