import {useStore} from '../../hooks/useStore';
import {setModalContent} from '../../utils/modal';

import ModalContainer from './styled';

export default function Modal({open}) {
	const modalState = useStore(state => state.modal);
	const activity = useStore(state =>
		state.activities.find(item => item.id_ === modalState.idOfActivObject)
	);
	console.log(
		setModalContent(
			{activTyp: 'edit', idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j'},
			{id_: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592}
		).props
	);
	return <ModalContainer open={open}>{setModalContent(modalState, activity)}</ModalContainer>;
}
