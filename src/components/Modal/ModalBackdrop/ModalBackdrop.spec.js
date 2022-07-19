import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ModalBackdrop from './';

describe('ModalBackdrop component', () => {
	it('should be visible', () => {
		render(<ModalBackdrop data-testid="backdrop" open={true} />);
		const backdrop = screen.getByTestId('backdrop');

		expect(backdrop).toBeVisible();
	});
});
