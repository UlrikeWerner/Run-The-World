import {useState} from 'react';

import {useStore} from '../../../hooks/useStore';
import {
	createDurationInputValue,
	secondToDurationData,
	calculateDistance,
	calculateDuration,
} from '../../../utils/date';
import Button from '../../Button/index';

import {FormContainer} from './style';

export default function AddActivity({id = ''}) {
	const activity = useStore(state => state.activities.find(item => item.id_ === id));
	const addActivity = useStore(state => state.addActivity);
	const setModalStatus = useStore(state => state.setModalStatus);
	const setModal = useStore(state => state.setModal);

	const inputDistance = activity ? activity.distance / 1000 : '';
	const inputDuration = activity
		? createDurationInputValue(secondToDurationData(activity?.duration))
		: '';
	const [inputValues, setInputValues] = useState({
		distance: inputDistance,
		duration: inputDuration,
	});

	return (
		<FormContainer
			onSubmit={event => {
				event.preventDefault();
				addActivity(
					id,
					calculateDistance(inputValues.distance),
					calculateDuration(inputValues.duration)
				);
				setInputValues({distance: '', duration: ''});
				setModal('', '');
				setModalStatus(false);
			}}
		>
			<label htmlFor="activityDistance" aria-label="Enter your distance">
				distance (km)
			</label>
			<div>
				<input
					type="number"
					id="activityDistance"
					step="0.001"
					placeholder="0.000"
					value={inputValues.distance}
					required
					onChange={event => {
						setInputValues({
							...inputValues,
							distance: event.target.value,
						});
					}}
				/>
			</div>
			<label htmlFor="activityDuration" aria-label="Enter your duration">
				duration
			</label>
			<input
				type="text"
				id="activityDuration"
				pattern="^(?:[0-9]{1,2}:){0,2}[0-9]{1,2}$"
				placeholder="hh:mm:ss"
				value={inputValues.duration}
				required
				onChange={event => {
					setInputValues({
						...inputValues,
						duration: event.target.value,
					});
				}}
			/>
			<div>
				<Button
					value="cancel"
					onClick={() => {
						setModal('', '');
						setModalStatus(false);
					}}
				/>
				<Button
					value={id ? 'edit' : 'save'}
					type="submit"
					id="submit"
					disabled={inputValues.distance === '' || inputValues.duration === ''}
				/>
			</div>
		</FormContainer>
	);
}
