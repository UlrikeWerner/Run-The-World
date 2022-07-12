import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ProgressBox from './index';

const activities = [
	{
		id: 'P_bfsp9qN_5BQnTyPOwBF',
		challengeId: 'kt3ul4GvkqJpqDcgwBsXy',
		date: '2022-07-05',
		distance: 12800,
		duration: 2592,
	},
	{
		id: 'MAVr4-5xcswZ0KcF5iqd0',
		challengeId: 'kt3ul4GvkqJpqDcgwBsXy',
		date: '2022-07-05',
		distance: 10200,
		duration: 1883,
	},
];

describe('ProgressBox component', () => {
	it('should render children', () => {
		render(<ProgressBox distance="5000" activities={activities} />);
		const totalDistance = screen.getByText(/distance/);
		const distance = screen.getByText(/completed/);
		const percent = screen.getByText(/%/);
		const duration = screen.getByText(/duration/);

		expect(totalDistance).toBeInTheDocument();
		expect(distance).toBeInTheDocument();
		expect(percent).toBeInTheDocument();
		expect(duration).toBeInTheDocument();
	});
});
