/**
 * Return day from the date
 *
 * @param {string} ||
 * @param {Date object} date
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
		} catch (err) {
			return null;
		}
	} else {
		return day;
	}

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return days[day];
}

/**
 * Return day from the date
 *
 * @param {string} ||
 * @param {Date object} date
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
		} catch (err) {
			return null;
		}
	} else {
		return day;
	}

	return day;
}

/**
 * Return day from the date
 *
 * @param {string} ||
 * @param {Date object} date
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
		} catch (err) {
			return null;
		}
	} else {
		return month;
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
 * Converts seconds to hh:mm:ss
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

	try {
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
	} catch (err) {
		return null;
	}
}
