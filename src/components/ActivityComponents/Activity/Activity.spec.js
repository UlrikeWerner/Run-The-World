import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ActivityResult from './';

describe('ActivityResult component', () => {
	it('should render children', () => {
		render(<ActivityResult date="2022-05-13" distance={15600} duration={3269} />);
		const weekday = screen.getByText('Fri');
		const day = screen.getByText('13.');
		const month = screen.getByText('May');
		const distance = screen.getByText('distance');
		const distanceValue = screen.getByText('15.6km');
		const duration = screen.getByText('duration');
		const durationValue = screen.getByText('54min 29sec');

		expect(weekday).toBeInTheDocument();
		expect(day).toBeInTheDocument();
		expect(month).toBeInTheDocument();
		expect(distance).toBeInTheDocument();
		expect(distanceValue).toBeInTheDocument();
		expect(duration).toBeInTheDocument();
		expect(durationValue).toBeInTheDocument();
	});
});
