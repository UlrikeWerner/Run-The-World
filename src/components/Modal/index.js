import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open, id}) {
	const modalState = useStore(state => state.modal);
	console.log(modalState);
	return <ModalContainer open={open}>{setModalContent(modalState)}</ModalContainer>;
}
