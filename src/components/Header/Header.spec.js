import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Header from './index';

describe('Header component', () => {
	it('should render children', () => {
		render(<Header testIcon />);

		const title = screen.getByRole('heading', {level: 1});

		expect(title).toBeInTheDocument();
	});
});
