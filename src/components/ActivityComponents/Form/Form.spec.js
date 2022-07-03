import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import AddActivity from './index';

describe('AddActivity component', () => {
	it('should render children', () => {
		render(<AddActivity />);
		const dateLabel = screen.getByLabelText('date of the activity');
		const dateInput = screen.getByPlaceholderText('YYYY-MM-DD');
		const distanceLabel = screen.getByLabelText('distance (km)');
		const distanceInput = screen.getByPlaceholderText('0.000');
		const durationLabel = screen.getByLabelText('duration');
		const durationInput = screen.getByPlaceholderText('hh:mm:ss');
		const cancelBTN = screen.getByText('cancel');
		const saveBTN = screen.getByText('save');

		expect(dateLabel).toBeInTheDocument();
		expect(dateInput).toBeInTheDocument();
		expect(distanceLabel).toBeInTheDocument();
		expect(distanceInput).toBeInTheDocument();
		expect(durationLabel).toBeInTheDocument();
		expect(durationInput).toBeInTheDocument();
		expect(cancelBTN).toBeInTheDocument();
		expect(saveBTN).toBeInTheDocument();
	});

	it('the save button should be disabled', () => {
		render(<AddActivity />);
		const distanceInput = screen.getByPlaceholderText('0.000');
		const durationInput = screen.getByPlaceholderText('hh:mm:ss');
		const saveBTN = screen.getByText('save');

		fireEvent.change(distanceInput, {target: {value: ''}});

		expect(saveBTN).toHaveAttribute('disabled');

		fireEvent.change(durationInput, {target: {value: ''}});

		expect(saveBTN).toHaveAttribute('disabled');
	});

	it('the save button should not be disabled', () => {
		render(<AddActivity />);
		const distanceInput = screen.getByPlaceholderText('0.000');
		const durationInput = screen.getByPlaceholderText('hh:mm:ss');
		const saveBTN = screen.getByText('save');

		fireEvent.change(distanceInput, {target: {value: '1.23'}});
		fireEvent.change(durationInput, {target: {value: '01:12:34'}});

		expect(saveBTN).not.toHaveAttribute('disabled');
	});
});
