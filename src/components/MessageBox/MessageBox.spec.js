import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MessageBox from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('MessageBox component with type "delete"', () => {
	it('should render children', () => {
		render(<MessageBox type="delete" text="hey" />);
		const msg = screen.getByText('hey');
		const cancelBTN = screen.getByText('cancel');
		const okBTN = screen.getByText('ok');

		expect(msg).toBeInTheDocument();
		expect(cancelBTN).toBeInTheDocument();
		expect(okBTN).toBeInTheDocument();
	});
});

describe('MessageBox component with type "start"', () => {
	it('should render children', () => {
		render(<MessageBox type="start" text="hey" />);
		const msg = screen.getByText('hey');
		const cancelBTN = screen.getByText('cancel');
		const okBTN = screen.getByText('ok');

		expect(msg).toBeInTheDocument();
		expect(cancelBTN).toBeInTheDocument();
		expect(okBTN).toBeInTheDocument();
	});
});

describe('Button at the MessageBox component with type "start"', () => {
	it('should allow clicks', async () => {
		render(<MessageBox type="start" text="hey" />);
		const okBTN = screen.getByText('ok');

		await userEvent.click(okBTN);
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
	});
});
