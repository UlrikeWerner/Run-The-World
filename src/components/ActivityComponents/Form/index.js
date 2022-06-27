import {useState} from 'react';

import {useStore} from '../../../hooks/useStore';
import {calculateDistance, calculateDuration} from '../../../utils/date';
import {modalClose} from '../../../utils/modal';
import Button from '../../Button/index';

import {FormContainer} from './style';

export default function AddActivity() {
	const [newActivity, setNewActivity] = useState('');
	const [inputValues, setInputValues] = useState({distance: '', duration: ''});
	const addActivity = useStore(state => state.addActivity);

	return (
		<FormContainer
			onSubmit={event => {
				event.preventDefault();
				addActivity(newActivity.distance, newActivity.duration);
				setNewActivity('');
				setInputValues({distance: '', duration: ''});
				modalClose('addActivityModal');
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
						setNewActivity({
							...newActivity,
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
					setNewActivity({
						...newActivity,
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
						modalClose('addActivityModal');
					}}
				/>
				<Button
					value="save"
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
