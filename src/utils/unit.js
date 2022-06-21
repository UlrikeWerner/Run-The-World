/**
 * Appends the rem unit suffix to a number
 * @param {number} n
 * @return {string}
 * @example
 * rem(10) // "10rem"
 */
export function rem(n) {
	return `${n}rem`;
}

/**
 * Converts a number from pixel to rem and adds the unit suffix.
 *
 * @param {number} pixel
 * @param {number} rootFontSize
 * @return {string}
 * @example
 * pxToRem(16) // "1rem"
 */
export function pxToRem(pixel, rootFontSize = 16) {
	return rem(pixel / rootFontSize);
}

/**
 * Converts seconds to hh:mm:ss
 *
 * @param {number} seconds
 * @return {string}
 * @example
 * secondToDurationData(3696) // "1:01:36"
 */
export function secondToDurationData(second) {
	let sec = second % 60;
	let min = ((second - sec) / 60) % 60;
	const h = (second - min * 60 - sec) / 60 / 60;
	sec = sec < 10 ? `0${sec}` : `${sec}`;
	min = min < 10 ? `0${min}` : `${min}`;
	return `${h}:${min}:${sec}`;
}
