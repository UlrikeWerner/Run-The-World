import AddActivity from '../components/ActivityComponents/Form/index';
import MessageBox from '../components/MessageBox';
import {getDateDay, getDateMonth} from '../utils/date';

export function setModalContent(modalState, activity, challengeTitle = '') {
	let text = '';

	switch (modalState.activTyp) {
		case 'create':
			return <AddActivity challengeId={modalState.challengeId} />;
		case 'edit':
			return (
				<AddActivity
					challengeId={modalState.challengeId}
					id={modalState.idOfActivObject}
					date={activity.date}
					distance={activity.distance}
					duration={activity.duration}
				/>
			);
		case 'delete':
			text = `Do you want to delete the activity from ${getDateMonth(
				activity?.date
			)} ${getDateDay(activity?.date)}`;
			return <MessageBox id={modalState.idOfActivObject} type="delete" text={text} />;
		case 'start Challenge':
			text = `Do you want to pause your active challenge to start '${challengeTitle}' challenge?`;
			return <MessageBox id={modalState.challengeId} type="start" text={text} />;
		default:
			break;
	}
}
