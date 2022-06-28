import {
	getDateWeekday,
	getDateDay,
	getDateMonth,
	secondToDurationData,
	createDurationString,
	calculateDuration,
	calculateDistance,
} from './date';

describe('getDateWeekday', () => {
	it('should return a string of the weekday', () => {
		expect(getDateWeekday('2022-06-27T07:26:30.599Z')).toBe('Mon');
	});
	it('should return the object into a string of the weekday', () => {
		expect(getDateWeekday(new Date('2022-06-27T07:26:30.599Z'))).toBe('Mon');
	});
});

describe('getDateDay', () => {
	it('should return a number of the day', () => {
		expect(getDateDay('2022-06-27T07:26:30.599Z')).toBe(27);
	});
	it('should return the object into a number of the day', () => {
		expect(getDateDay(new Date('2022-06-27T07:26:30.599Z'))).toBe(27);
	});
});

describe('getDateMonth', () => {
	it('should return a string of the month', () => {
		expect(getDateMonth('2022-06-27T07:26:30.599Z')).toBe('Jun');
	});
	it('should return the object into a string of the month', () => {
		expect(getDateMonth(new Date('2022-06-27T07:26:30.599Z'))).toBe('Jun');
	});
});

describe('secondToDurationData', () => {
	it('should return an array of the duration', () => {
		expect(secondToDurationData(2592)).toStrictEqual({
			day: null,
			hour: null,
			minute: '43',
			second: '12',
		});
	});
});

describe('createDurationString', () => {
	it('should return a string of the duration', () => {
		expect(
			createDurationString({
				day: null,
				hour: null,
				minute: '43',
				second: '12',
			})
		).toBe('43min 12sec ');
	});
});

describe('calculateDuration', () => {
	it('should return a number of the duration', () => {
		expect(calculateDuration('43:12')).toBe(2592);
	});
});

describe('calculateDistance', () => {
	it('should return a number of the distance', () => {
		expect(calculateDistance('12.8')).toBe(12800);
	});
});
