import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Challenge from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Challenge component', () => {
	it('should render children', () => {
		render(
			<Challenge
				challengeId="b4FSIZoXFT5AR3omblJSQ"
				image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
				title="Route 66"
				startingPoint="Chicago"
				endingPoint="Santa Monica"
				distance="3945"
			/>
		);

		const image = screen.getByAltText('Route 66');
		const title = screen.getByText('Route 66');
		const route = screen.getByText('Chicago to Santa Monica');
		const distance = screen.getByText('3945 km');
		const button = screen.getByRole('button', {name: 'start'});

		expect(image).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(route).toBeInTheDocument();
		expect(distance).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});

describe('Button at the Challenge component', () => {
	it('should allow clicks', async () => {
		render(
			<Challenge
				challengeId="b4FSIZoXFT5AR3omblJSQ"
				image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
				title="Route 66"
				startingPoint="Chicago"
				endingPoint="Santa Monica"
				distance="3945"
			/>
		);
		const button = screen.getByText('start');
		await userEvent.click(button);
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
	});
});
