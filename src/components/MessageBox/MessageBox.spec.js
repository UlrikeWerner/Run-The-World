import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import MessageBox from './index';

describe('MessageBox component', () => {
	it('should render children', () => {
		render(<MessageBox text="hey" />);
		const msg = screen.getByText('hey');
		const cancelBTN = screen.getByText('cancel');
		const okBTN = screen.getByText('ok');

		expect(msg).toBeInTheDocument();
		expect(cancelBTN).toBeInTheDocument();
		expect(okBTN).toBeInTheDocument();
	});
});
