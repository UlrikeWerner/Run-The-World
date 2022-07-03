export function getDateWeekday(date) {
	let day = null;

	if (typeof date === 'string') {
		day = new Date(date).getDay();
	} else if (typeof date === 'object') {
		try {
			day = date.getDay();
		} catch (ignore) {
			return null;
		}
	} else {
		return null;
	}

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return days[day];
}

export function getDateDay(date) {
	let day = null;

	if (typeof date === 'string') {
		day = new Date(date).getDate();
	} else if (typeof date === 'object') {
		try {
			day = date.getDate();
		} catch (ignore) {
			return null;
		}
	} else {
		return null;
	}

	return day;
}

export function getDateMonth(date) {
	let month = null;

	if (typeof date === 'string') {
		month = new Date(date).getMonth();
	} else if (typeof date === 'object') {
		try {
			month = date.getMonth();
		} catch (ignore) {
			return null;
		}
	} else {
		return null;
	}

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	return months[month];
}

export function getDateForForm(date) {
	let dateStringForForm = '';

	if (typeof date === 'object') {
		try {
			dateStringForForm += `${date.getFullYear()}-`;
			const month = date.getMonth() + 1;
			if (month < 10) {
				dateStringForForm += `0${month}-`;
			} else {
				dateStringForForm += `${month}-`;
			}

			if (date.getDate() < 10) {
				dateStringForForm += `0${date.getDate()}`;
			} else {
				dateStringForForm += `${date.getDate()}`;
			}

			return dateStringForForm;
		} catch (ignore) {
			return null;
		}
	}

	return null;
}

export function secondToDurationData(seconds) {
	if (typeof seconds !== 'number') {
		return null;
	}

	const sec = seconds % 60;
	const min = ((seconds - sec) / 60) % 60;
	const h = ((seconds - min * 60 - sec) / 60 / 60) % 24;
	const d = (seconds - h * 3600 - min * 60 - sec) / 24 / 60 / 60;

	const result = {
		day: d > 0 ? `${d}` : null,
		hour: h > 0 ? `${h}` : null,
		minute: min > 0 ? `${min}` : null,
		second: sec > 0 ? `${sec}` : null,
	};
	return result;
}

export function createDurationString(duration) {
	if (typeof duration !== 'object' || !duration) {
		return null;
	}

	let result = '';
	result += duration.day ? `${duration.day}days ` : '';
	result += duration.hour ? `${duration.hour}h ` : '';
	result += duration.minute ? (duration.day ? '' : `${duration.minute}min `) : '';
	result += duration.second
		? duration.day || duration.hour
			? ''
			: `${duration.second}sec `
		: '';

	return result;
}

export function createDurationInputValue(duration) {
	if (typeof duration !== 'object') {
		return null;
	}
	const hour = duration.day * 24 + duration.hour * 1;

	let result = '';
	result += duration.hour ? `${hour}:` : '';
	result += duration.minute !== null ? `${duration.minute}` : `00`;
	result += duration.second !== null ? `:${duration.second}` : `:00`;

	return result;
}

export function calculateDuration(duration) {
	if (typeof duration !== 'string') {
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

export function calculateDistance(distance) {
	if (typeof distance !== 'string' && typeof distance !== 'number') {
		return null;
	}

	if (typeof distance === 'number') {
		distance = distance.toString();
	}

	const result = distance * 1000;

	if (!result) {
		return null;
	}

	return Math.round(result);
}
