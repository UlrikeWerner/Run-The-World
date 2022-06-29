import AddActivity from '../components/ActivityComponents/Form/index';
import MessageBox from '../components/MessageBox';
import {getDateDay, getDateMonth} from '../utils/date';

export function setModalContent(modalState, activity) {
	const text = `Do you want to delete the activity from ${getDateMonth(
		activity?.date
	)} ${getDateDay(activity?.date)}`;

	switch (modalState.activTyp) {
		case 'create':
			return <AddActivity />;
		case 'edit':
			return (
				<AddActivity
					id={modalState.idOfActivObject}
					distance={activity.distance}
					duration={activity.duration}
				/>
			);
		case 'delete':
			return <MessageBox id={modalState.idOfActivObject} text={text} />;
		default:
			break;
	}
}
