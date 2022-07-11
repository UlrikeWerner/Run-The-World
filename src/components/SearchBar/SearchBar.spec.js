import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import SearchBar from './index';

describe('SearchBar component', () => {
	it('should render children', () => {
		const handleChange = jest.fn();
		render(<SearchBar searchChallenges={handleChange} searchInput="the" />);
		const form = screen.getByTestId('form');
		const svg = screen.getByTestId('img-search');
		//const searchInput = screen.getByTestId('search-input');

		expect(form).toBeInTheDocument();
		expect(svg).toBeInTheDocument();
		//expact(searchInput).toBeInTheDocument();
	});

	/*it('the save button should be disabled', () => {
		render(<AddActivity />);
		const distanceInput = screen.getByPlaceholderText('0.000');
		const durationInput = screen.getByPlaceholderText('hh:mm:ss');
		const saveBTN = screen.getByText('save');

		fireEvent.change(distanceInput, {target: {value: ''}});

		expect(saveBTN).toHaveAttribute('disabled');

		fireEvent.change(durationInput, {target: {value: ''}});

		expect(saveBTN).toHaveAttribute('disabled');
	});*/
});
