import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	const activities = useStore(state => state.activities);
	const activity = activities.filter(item => item.id === modalState.idOfActivObject);

	return (
		<ModalContainer open={open}>
			{setModalContent(modalState, activity.length > 0 ? activity[0] : null)}
		</ModalContainer>
	);
}
