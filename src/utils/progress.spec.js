import {sumDuration, sumDistance, calculatePercent} from './progress';

const activities = [
	{
		id: 'P_bfsp9qN_5BQnTyPOwBF',
		challengeId: 'kt3ul4GvkqJpqDcgwBsXy',
		date: '2022-07-05',
		distance: 12800,
		duration: 2592,
	},
	{
		id: 'MAVr4-5xcswZ0KcF5iqd0',
		challengeId: 'kt3ul4GvkqJpqDcgwBsXy',
		date: '2022-07-05',
		distance: 10200,
		duration: 1883,
	},
];

describe('sumDuration', () => {
	it('should return the total duration', () => {
		expect(sumDuration(activities)).toBe('1h 14min ');
	});
});

describe('sumDistance', () => {
	it('should return the completed distance', () => {
		expect(sumDistance(activities, 1000)).toBe(23);
	});
});

describe('calculatePercent', () => {
	it('should return the completed in percent', () => {
		expect(calculatePercent(5000, 500)).toBe(10);
	});
});
