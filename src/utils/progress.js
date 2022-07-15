import {secondToDurationData, createDurationString} from './date';

export function sumDuration(activities) {
	let sum = 0;
	if (activities.length <= 0) {
		return sum;
	}

	activities.forEach(element => {
		sum += element.duration;
	});

	return createDurationString(secondToDurationData(sum));
}

export function sumDistance(activities, distance) {
	let sum = 0;
	if (activities.length <= 0) {
		return 0.0;
	}

	activities.forEach(element => {
		sum += element.distance;
	});

	return Math.min(sum / 1000, distance);
}

export function calculatePercent(totalSum, partSum) {
	let percent = 0;
	if (partSum === '0,00') {
		return percent;
	}
	percent = Math.floor((partSum * 100) / totalSum);
	return Math.min(percent, 100);
}
