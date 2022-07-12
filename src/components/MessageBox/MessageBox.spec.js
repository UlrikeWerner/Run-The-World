import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MessageBox from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('MessageBox', () => {
	it('renders a message box with a delete button if it is of type "delete"', () => {
		render(<MessageBox type="delete" text="hey" />);
		const message = screen.getByText('hey');
		const cancelButton = screen.getByText('cancel');
		const okButton = screen.getByText('ok');

		expect(message).toBeInTheDocument();
		expect(cancelButton).toBeInTheDocument();
		expect(okButton).toBeInTheDocument();
	});

	it('renders a message box with a delete button if it is of type "start"', () => {
		render(<MessageBox type="start" text="hey" />);
		const message = screen.getByText('hey');
		const cancelButton = screen.getByText('cancel');
		const okButton = screen.getByText('ok');

		expect(message).toBeInTheDocument();
		expect(cancelButton).toBeInTheDocument();
		expect(okButton).toBeInTheDocument();
	});
});

describe('MessageBox with type "start"', () => {
	it('should allow clicks at the okButton', async () => {
		render(<MessageBox type="start" text="hey" />);
		const okButton = screen.getByText('ok');

		await userEvent.click(okButton);
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
	});
});
