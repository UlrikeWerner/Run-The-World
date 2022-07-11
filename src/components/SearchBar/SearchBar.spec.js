import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import SearchBar from './index';

describe('SearchBar component', () => {
	it('should render children', () => {
		const handleChange = jest.fn();

		render(<SearchBar searchChallenges={handleChange} searchInput="the" />);

		const form = screen.getByTestId('form');
		const svg = screen.getByTestId('img-search');
		const searchInput = screen.getByPlaceholderText('search...');

		expect(form).toBeInTheDocument();
		expect(svg).toBeInTheDocument();
		expect(searchInput).toBeInTheDocument();

		expect(searchInput.value).toBe('the');
	});
});
