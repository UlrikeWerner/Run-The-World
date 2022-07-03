import AddActivity from '../components/ActivityComponents/Form/index';
import MessageBox from '../components/MessageBox';
import {getDateDay, getDateMonth} from '../utils/date';

export function setModalContent(modalState, activeChallengeId, activity) {
	const text = `Do you want to delete the activity from ${getDateMonth(
		activity?.date
	)} ${getDateDay(activity?.date)}`;

	switch (modalState.activTyp) {
		case 'create':
			return <AddActivity challengeId={activeChallengeId} />;
		case 'edit':
			return (
				<AddActivity
					challengeId={activeChallengeId}
					id={modalState.idOfActivObject}
					date={activity.date}
					distance={activity.distance}
					duration={activity.duration}
				/>
			);
		case 'delete':
			return (
				<MessageBox
					challengeId={activeChallengeId}
					id={modalState.idOfActivObject}
					text={text}
				/>
			);
		default:
			break;
	}
}
