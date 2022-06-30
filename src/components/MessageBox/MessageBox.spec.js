import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MessageBox from './index';
import Modal from '../Modal/index';
import {setModalContent} from '../../utils/modal';

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
