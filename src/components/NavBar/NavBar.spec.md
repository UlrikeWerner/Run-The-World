import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import NavBar from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Link: () => mockedUsedNavigate,
}));

describe('NavBar component', () => {
	it('should render children', () => {
		render(<NavBar />);

		const list = screen.getByRole('img');
		console.log(list);
		const challenge = screen.getByAltText(/active/);

		expect(list).toBeInTheDocument();
		expect(challenge).toBeInTheDocument();
	});
});
