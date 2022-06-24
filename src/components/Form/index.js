import {nanoid} from 'nanoid';
import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import {calculateDistance, calculateDuration} from '../../utils/date';

export default function AddActivity() {
	/*onst [newValues, setNewValues] = useState([]);
	const [newActivity, setNewActivity] = useState([]);*/

	return (
		/*<>
			<form
				onSubmit={event => {
					event.preventDefault();
					setNewActivity({
						...newActivity,
						id_: nanoid(),
						date: new Date(),
						distance: newValues.distance,
						duration: newValues.duration,
					});
					//setActivity(...activity, newActivity);
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
			{
				console.log(newActivity) /* newActivity.length > 0 ? (
					<p>newActivity[0]</p>
				) : (
					''
				)
			}
		</>
	*/
		''
	);
}
