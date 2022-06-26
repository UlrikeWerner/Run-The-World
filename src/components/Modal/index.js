import AddActivity from '../ActivityComponents/Form';

import ModalContainer from './styled';

export default function Modal({id}) {
	return (
		<ModalContainer id={id}>
			<AddActivity />
		</ModalContainer>
	);
}
