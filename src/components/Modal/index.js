import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	return <ModalContainer open={open}>{setModalContent(modalState)}</ModalContainer>;
}
