import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ActiveChallengePage from './pages/ActiveChallengePage';
import ChallengesPage from './pages/index';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="/" element={<ChallengesPage />} />
						<Route path="/activeChallenge" element={<ActiveChallengePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
