import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ActivityResult from './index';

describe('ActivityResult component', () => {
	it('should render children', () => {
		render(<ActivityResult date="2022-05-13" distance={15600} duration={3269} />);
		const weekday = screen.getByText('Fri');
		const dayAndMonth = screen.getByText('May 13');
		const distance = screen.getByText('distance');
		const distanceValue = screen.getByText('15.6km');
		const duration = screen.getByText('duration');
		const durationValue = screen.getByText('54min 29sec');
		const editBTN = screen.getByRole('edit');
		const deleteBTN = screen.getByRole('delete');

		expect(weekday).toBeInTheDocument();
		expect(dayAndMonth).toBeInTheDocument();
		expect(distance).toBeInTheDocument();
		expect(distanceValue).toBeInTheDocument();
		expect(duration).toBeInTheDocument();
		expect(durationValue).toBeInTheDocument();
		expect(editBTN).toBeInTheDocument();
		expect(deleteBTN).toBeInTheDocument();
	});
});
