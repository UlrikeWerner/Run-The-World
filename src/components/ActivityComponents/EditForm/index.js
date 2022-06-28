import {useStore} from '../../../hooks/useStore';
import {createDurationInputValue, secondToDurationData} from '../../../utils/date';
import AddActivity from '../Form';

export default function EditActivity({objectId}) {
	const activity = useStore(state => state.activities.find(item => item.id_ === objectId));

	const distance = activity?.distance / 1000;
	const duration = createDurationInputValue(secondToDurationData(activity?.duration));
	console.log('editActivity', distance, duration);

	return <AddActivity inputDistance={distance} inputDuration={duration} id={objectId} />;
}
