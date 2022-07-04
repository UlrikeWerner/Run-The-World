import {useStore} from '../../hooks/useStore';
import Button from '../Button';

import {MessageContainer} from './styled';

export default function MessageBox({challengeId, id, text}) {
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);
	const deleteActivity = useStore(state => state.deleteActivity);

	return (
		<MessageContainer>
			<p>{text}</p>
			<div>
				<Button
					variant="medium"
					role="cancel"
					onClick={() => {
						setModal('', '');
						setModalStatus(false);
					}}
				>
					cancel
				</Button>
				<Button
					variant="medium"
					role="ok"
					type="button"
					onClick={() => {
						deleteActivity(id);
						setModal('', '');
						setModalStatus(false);
					}}
				>
					ok
				</Button>
			</div>
		</MessageContainer>
	);
}
