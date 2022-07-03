import AddActivity from '../components/ActivityComponents/Form/index';
import MessageBox from '../components/MessageBox';
import {getDateDay, getDateMonth} from '../utils/date';

export function setModalContent(modalState, activity) {
	const text = `Do you want to delete the activity from ${getDateMonth(
		activity?.date
	)} ${getDateDay(activity?.date)}`;

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
			return (
				<MessageBox
					challengeId={modalState.challengeId}
					id={modalState.idOfActivObject}
					text={text}
				/>
			);
		default:
			break;
	}
}
