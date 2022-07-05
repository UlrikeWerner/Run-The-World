import {secondToDurationData, createDurationString} from '../../utils/date';

function sumDuration(activities) {
	let sum = 0;
	if (activities.length <= 0) {
		return sum;
	}

	activities.forEach(element => {
		sum += element.duration;
	});

	return createDurationString(secondToDurationData(sum));
}

function sumDistance(activities) {
	let sum = 0;
	if (activities.length <= 0) {
		return '0,00';
	}

	activities.forEach(element => {
		sum += element.distance;
	});

	return sum / 1000;
}

function calculatePercent(totalSum, partSum) {
	let percent = 0;
	if (partSum === '0,00') {
		return percent;
	}
	percent = Math.round((partSum * 100) / totalSum);
	return percent;
}

export default function ProgressBox({distance, activities}) {
	let completedKM = sumDistance(activities);
	let completed = calculatePercent(distance, completedKM);
	let totalDuration = sumDuration(activities);
	return (
		<section>
			<ul>
				<li>total distance: {distance}km</li>
				<li>completed distance: {completedKM}km</li>
				<li>{completed}% completed</li>
				<li>total duration: {totalDuration}</li>
			</ul>
		</section>
	);
}
