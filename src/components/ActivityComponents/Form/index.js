import {useState} from 'react';

import {useStore} from '../../../hooks/useStore';
import {calculateDistance, calculateDuration} from '../../../utils/date';
import Button from '../../Button/index';

import {FormContainer} from './style';

export default function AddActivity() {
	const [newValues, setNewValues] = useState('');
	const [fieldValue, setFieldValue] = useState({distance: '', duration: ''});
	const addActivity = useStore(state => state.addActivity);

	return (
		<FormContainer
			onSubmit={event => {
				event.preventDefault();
				addActivity(newValues.distance, newValues.duration);
				setNewValues('');
				setFieldValue({distance: '', duration: ''});
				const modal = document.querySelector('#addActivityModal');
				modal.close();
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
					value={fieldValue.distance}
					required
					onChange={event => {
						setNewValues({
							...newValues,
							distance: calculateDistance(event.target.value),
						});
						setFieldValue({
							...fieldValue,
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
				value={fieldValue.duration}
				required
				onChange={event => {
					setNewValues({
						...newValues,
						duration: calculateDuration(event.target.value),
					});
					setFieldValue({
						...fieldValue,
						duration: event.target.value,
					});
				}}
			/>
			<div>
				<Button
					value="cancel"
					onClick={() => {
						const modal = document.querySelector('#addActivityModal');
						modal.close();
					}}
				/>
				<Button
					value="save"
					type="submit"
					id="submit"
					disabled={
						newValues.distance === null ||
						fieldValue.distance === '' ||
						newValues.duration === null ||
						fieldValue.duration === ''
					}
				/>
			</div>
		</FormContainer>
	);
}
