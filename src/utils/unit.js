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
export function secondToDurationData(seconds) {
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
