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

	/*it('should render children', () => {
		const handleChange = jest.fn();
		render(<SortBar sortChallenges={handleChange} />);

		const select = screen.getByRole('combobox');
		//const ascending = screen.getAllByRole('combobox', {value: 'ascending'});
		//const descending = screen.getAllByRole('combobox', {value: 'descending'});

		expect(select).toBeInTheDocument();
		expect(select.value).toBe('alphabetically');

		const selectField = screen.getByText(/status/);
		expect(selectField).toBeInTheDocument;
		/*fireEvent.click(selectField);
		select = screen.getAllByRole('combobox');

		expect(select.value).toBe('status');
	});*/
});

/*describe('SearchBar component', () => {
	it('should let type into an input field', async () => {
		const handleChange = jest.fn();

		render(<SearchBar searchChallenges={handleChange} searchInput="" />);

		const searchInput = screen.getByLabelText('search...');

		await userEvent.type(searchInput, 'Bye');

		expect(handleChange).toHaveBeenCalledWith('B');
		expect(handleChange).toHaveBeenCalledWith('y');
		expect(handleChange).toHaveBeenCalledWith('e');
	});
});*/
