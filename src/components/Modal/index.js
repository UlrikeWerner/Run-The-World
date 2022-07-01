import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	const challenge = useStore(state =>
		state.challenges.map(item => item.id === modalState.challengeId)
	);
	const activity = challenge.map(item => item.id_ === modalState.idOfActivObject);
	return <ModalContainer open={open}>{setModalContent(modalState, activity)}</ModalContainer>;
}
