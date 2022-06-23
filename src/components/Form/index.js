import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function AddActivityForm() {
	//const [distance, setDistance] = useState({distance: ''});
	//const [duration, setDuration] = useState({duration: ''});
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
						setNewValues({...newValues, distance: event.target.value * 1000});
					}}
				/>
			</label>
			<label htmlFor="activityDuration" aria-label="Enter your duration">
				duration
				<input
					type="number"
					id="activityDuration"
					min="0"
					max="99"
					step="1"
					placeholder="hh"
					required
					onChange={event => {
						setNewValues({
							...newValues,
							duration: Number(newValues.duration) + event.target.value * 60 * 60,
						});
					}}
				/>{' '}
				:{' '}
				<input
					type="number"
					id="activityDuration"
					min="0"
					max="59"
					step="1"
					placeholder="mm"
					required
					onChange={event => {
						setNewValues({
							...newValues,
							duration: Number(newValues.duration) + event.target.value * 60,
						});
					}}
				/>{' '}
				:{' '}
				<input
					type="number"
					id="activityDuration"
					min="0"
					max="59"
					step="1"
					placeholder="ss"
					required
					onChange={event => {
						setNewValues({
							...newValues,
							duration: Number(newValues.duration) + Number(event.target.value),
						});
					}}
				/>
				<input
					type="submit"
					value="submit"
					disabled={newValues.distance === '' || newValues.duration === ''}
				/>
			</label>
			{console.log(newValues.distance, newValues.duration, newActivity)}
		</form>
	);
}
