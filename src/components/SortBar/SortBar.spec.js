import {userEvent} from '@storybook/testing-library';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import SortBar from './index';

describe('SortBar component', () => {
	it('should correctly set default option', () => {
		const handleChange = jest.fn();
		render(<SortBar sortChallenges={handleChange} />);

		const defaultOption = screen.getByRole('option', {name: 'alphabetically'});

		expect(defaultOption.selected).toBe(true);
	});

	it('should display the correct number of options', () => {
		const handleChange = jest.fn();
		render(<SortBar sortChallenges={handleChange} />);

		expect(screen.getAllByRole('option').length).toBe(4);
	});

	it('should allow user to change the sort value', () => {
		const handleChange = jest.fn();
		render(<SortBar sortChallenges={handleChange} />);

		userEvent.selectOptions(
			screen.getByRole('combobox'),
			screen.getByRole('option', {name: 'km ascending'})
		);

		const newSelection = screen.getByRole('option', {name: 'km ascending'});
		const otherOption = screen.getByRole('option', {name: 'km descending'});

		expect(newSelection.selected).toBe(true);
		expect(otherOption.selected).not.toBe(true);
	});
});
