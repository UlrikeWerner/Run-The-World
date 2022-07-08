import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	const activities = useStore(state => state.activities);
	const activity = activities.filter(item => item.id === modalState.idOfActivObject);
	const challenge = useStore(state => state.challenges);
	const challengeTitle = challenge.find(
		challenge => challenge.id === modalState.challengeId
	)?.title;

	return (
		<ModalContainer open={open}>
			{setModalContent(
				modalState,
				activity.length > 0 ? activity[0] : null,
				challengeTitle ? challengeTitle : ''
			)}
		</ModalContainer>
	);
}
