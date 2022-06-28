import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import AddActivity from './index';

describe('AddActivity component', () => {
	it('should render children', () => {
		render(<AddActivity />);
		const distanceLabel = screen.getByLabelText('distance (km)');
		const distanceInput = screen.getByPlaceholderText('0.000');
		const durationLabel = screen.getByLabelText('duration');
		const durationInput = screen.getByPlaceholderText('hh:mm:ss');
		const cancelBTN = screen.getByText('cancel');
		const saveBTN = screen.getByText('save');

		expect(distanceLabel).toBeInTheDocument();
		expect(distanceInput).toBeInTheDocument();
		expect(durationLabel).toBeInTheDocument();
		expect(durationInput).toBeInTheDocument();
		expect(cancelBTN).toBeInTheDocument();
		expect(saveBTN).toBeInTheDocument();
	});
});
