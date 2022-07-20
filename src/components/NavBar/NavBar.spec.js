import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {MemoryRouter as Router} from 'react-router-dom';

import NavBar from './';

describe('NavBar', () => {
	it('should render with two links"', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(2);
	});

	it('should testing NavLink path 1', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);

		const history = createMemoryHistory();
		userEvent.click(screen.getByTestId('challenge list'));
		expect(history.location.pathname).toEqual('/');
	});
});
