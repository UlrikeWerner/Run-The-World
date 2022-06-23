import {nanoid} from 'nanoid';
import {useState} from 'react';

function calculateDuration(duration) {
	if (typeof duration !== 'string') {
		return null;
	}

	const pattern = new RegExp('^(?:[0-9]{1,2}:){0,2}[0-9]{1,2}$');
	if (!pattern.test(duration)) {
		return null;
	}

	const durationParts = duration.split(':');
	const length = durationParts.length;

	if (durationParts[length - 1] > 59 || (length >= 2 && durationParts[length - 2] > 59)) {
		return null;
	}

	let value = 0;
	for (let i = length - 1; i >= 0; i--) {
		switch (i) {
			case length - 1:
				value = durationParts[i] * 1;
				break;
			case length - 2:
				value += durationParts[i] * 60;
				break;
			case length - 3:
				value += durationParts[i] * 3600;
				break;
			default:
				break;
		}
	}

	return value;
}

function calculateDistance(distance) {
	if (typeof distance !== 'string') {
		return null;
	}

	let result = distance.replace(',', '.').replace(' ', '');
	result = distance * 1000;

	const resultIsANumber = !!result;
	if (!resultIsANumber) {
		return null;
	}

	return result;
}

export default function AddActivity() {
	const [newValues, setNewValues] = useState({distance: '', duration: ''});
	const [newActivity, setNewActivity] = useState({id_: '', date: '', distance: '', duration: ''});

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				setNewActivity({
					id_: nanoid(),
					date: new Date(),
					distance: newValues.distance,
					duration: newValues.duration,
				});
			}}
		>
			<label htmlFor="activityDistance" aria-label="Enter your distance">
				distance
				<input
					type="text"
					id="activityDistance"
					required
					onChange={event => {
						setNewValues({
							...newValues,
							distance: calculateDistance(event.target.value),
						});
					}}
				/>{' '}
				km
			</label>
			<label htmlFor="activityDuration" aria-label="Enter your duration">
				duration
				<input
					type="text"
					id="activityDuration"
					placeholder="hh:mm:ss"
					required
					onChange={event => {
						setNewValues({
							...newValues,
							duration: calculateDuration(event.target.value),
						});
					}}
				/>
				<input
					type="submit"
					value="add"
					disabled={
						newValues.distance <= 0 ||
						newValues.distance === null ||
						newValues.duration <= 0 ||
						newValues.duration === null
					}
				/>
			</label>
		</form>
	);
}
