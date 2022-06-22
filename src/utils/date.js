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
	// typ contoll
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
