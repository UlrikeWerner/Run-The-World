import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	const activities = useStore(state => state.activities);
	const activity = activities.find(item => item.id === modalState.idOfActivObject);
	const challenge = useStore(state => state.challenges);
	const challengeTitle = challenge.find(
		challenge => challenge.id === modalState.challengeId
	)?.title;

	return (
		<ModalContainer open={open}>
			{setModalContent(
				modalState,
				activity ? activity : null,
				challengeTitle ? challengeTitle : ''
			)}
		</ModalContainer>
	);
}
