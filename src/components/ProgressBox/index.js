import {sumDuration, sumDistance, calculatePercent} from '../../utils/progress';

import {ProgressContainer} from './styled';

export default function ProgressBox({distance, activities}) {
	let completedKM = sumDistance(activities);
	let completed = calculatePercent(distance, completedKM);
	let totalDuration = sumDuration(activities);
	return (
		<ProgressContainer>
			<ul>
				<li>total distance: {distance}km</li>
				<li>completed distance: {completedKM}km</li>
				<li>{completed}% completed</li>
				<li>total duration: {totalDuration}</li>
			</ul>
		</ProgressContainer>
	);
}
