/**
 * Return day from the date
 *
 * @param {string} date || @param {Date object} date
 * @return {string}
 * @example
 * getDateWeekday('2022-05-13') // 'Fri'
 */
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

/**
 * Return day from the date
 *
 * @param {string} date || @param {Date object} date
 * @return {number}
 * @example
 * getDateDay('2022-05-13') // 13
 */
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

/**
 * Return day from the date
 *
 * @param {string} date || @param {Date object} date
 * @return {string}
 * @example
 * getDateMonth('2022-05-13') // 'May'
 */
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

/**
 * Converts seconds to hh:mm:ss
 *
 * @param {number} seconds
 * @return {object}
 * @example
 * secondToDurationData(3696) // "1:01:36"
 */
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

/**
 * Converts seconds to a string with
 *
 * @param {object} duration
 * @return {string}
 * @example
 * createDurationString({day: null, hour: null, minute: 54, second: 29}) // "54min 29sec"
 */
export function createDurationString(duration) {
	if (typeof duration !== 'object') {
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

/**
 * Converts a string(hh:mm:ss) to a number(sec) with
 *
 * @param {string} duration
 * @return {number}
 * @example
 * calculateDuration(1:23:04) // 4984
 */
export function calculateDuration(duration) {
	if (typeof duration !== 'string') {
		return null;
	}

	duration = duration.split(' ').join('').split('.').join('');

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

/**
 * Converts a string(km) to a number(m) with
 *
 * @param {string} distance
 * @return {number}
 * @example
 * calculateDistance(12,8) // 12800
 */
export function calculateDistance(distance) {
	if (typeof distance !== 'string') {
		return null;
	}

	const result = distance * 1000;

	const resultIsANumber = !!result;
	if (!resultIsANumber) {
		return null;
	}

	return Math.round(result);
}
