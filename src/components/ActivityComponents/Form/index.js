import {useState} from 'react';

import {useStore} from '../../../hooks/useStore';
import {calculateDistance, calculateDuration} from '../../../utils/date';
import Button from '../../Button/index';

import {FormContainer} from './style';

export default function AddActivity({inputDistance = '', inputDuration = '', id = ''}) {
	const edit = id ? true : false;

	const addActivity = useStore(state => state.addActivity);
	const setModalStatus = useStore(state => state.setModalStatus);
	const setModal = useStore(state => state.setModal);

	const [newActivity, setNewActivity] = useState('');
	const [inputValues, setInputValues] = useState({
		distance: inputDistance,
		duration: inputDuration,
	});
	console.log('start', inputValues);

	return (
		<FormContainer
			onSubmit={event => {
				event.preventDefault();
				console.log('save', inputValues);
				console.log('distance:', newActivity.distance, 'duration:', newActivity.duration);
				addActivity(id, newActivity);
				setNewActivity('');
				setInputValues({distance: '', duration: ''});
				console.log('end', newActivity);
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
						console.log('calcDistance', calculateDistance(event.target.value));
						setNewActivity({
							...newActivity,
							/*distance: event.target.value
								? calculateDistance(event.target.value)
								: calculateDistance(inputValues.distance),*/
							distance: calculateDistance(event.target.value),
						});
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
					console.log(event.target.value);
					setNewActivity({
						...newActivity,
						/*duration: event.target.value
							? calculateDuration(event.target.value)
							: calculateDuration(inputValues.duration),*/
						duration: calculateDuration(event.target.value),
					});
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
					value={edit ? 'edit' : 'save'}
					type="submit"
					id="submit"
					disabled={
						newActivity.distance === null ||
						inputValues.distance === '' ||
						newActivity.duration === null ||
						inputValues.duration === ''
					}
				/>
			</div>
		</FormContainer>
	);
}
