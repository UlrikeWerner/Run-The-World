import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './';

describe('Button component', () => {
	it('should render children', () => {
		render(<Button value="save" />);
		const button = screen.getByText('save');
		expect(button).toBeInTheDocument();
	});
});

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		render(<Button value="save" onClick={handleClick} />);
		const button = screen.getByText('save');
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});