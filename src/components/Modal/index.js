import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({id}) {
	const modalState = useStore(state => state.modal);
	console.log(modalState);
	return <ModalContainer id={id}>{setModalContent(modalState)}</ModalContainer>;
}
