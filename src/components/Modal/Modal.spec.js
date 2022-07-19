import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Modal from './';

describe('Modal component', () => {
	it('should be visible', () => {
		render(<Modal open={true} />);
		const dialog = screen.getByRole('dialog');

		expect(dialog).toBeVisible();
	});
});
