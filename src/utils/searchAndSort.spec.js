import {
	searchList,
	findFinishChallenges,
	sortByStatus,
	sortList,
	sortAndFilter,
} from './searchAndSort';

const list = [
	{
		id: 'IFSHJmPJEmB1C6k81MWrv',
		title: 'Historic Route 66',
		distance: '3945',
	},
	{
		id: 'IygyGrSVBm6Zb9l8OJt7d',
		title: 'The Great Wall of China',
		distance: '5000',
	},
	{
		id: 'Ko4rz4z1xey7bE8i7ZFKf',
		title: 'Camino de Santiago',
		distance: '800',
	},
	{
		id: 'DNZPt-9k0_0X5P85LmVm_',
		title: 'New York City Marathon',
		distance: '42.2',
	},
	{
		id: 'U1LAyg6UreXUwUG7z_h6M',
		title: 'Amazonas',
		distance: '6800',
	},
	{
		id: 'OEqClfdYkQzFSRaPzuRcH',
		title: 'Lauf zwischen den Meeren',
		distance: '96.6',
	},
	{
		id: 'tPHuEz94x14BqmCvflRug',
		title: 'Sparthathlon',
		distance: '246',
	},
];

const statusList = [
	{challengeId: 'IygyGrSVBm6Zb9l8OJt7d', status: 'paused'},
	{challengeId: 'DNZPt-9k0_0X5P85LmVm_', status: 'paused'},
	{challengeId: 'tPHuEz94x14BqmCvflRug', status: 'active'},
];
const activitiesList = [
	{
		id: 'URxVL1hN84y7kGNT_Z5g6',
		challengeId: 'DNZPt-9k0_0X5P85LmVm_',
		date: '2022-07-18',
		distance: 5000,
		duration: 2004,
	},
	{
		id: 'J2BGziP5hsEdMLuzxuyi-',
		challengeId: 'DNZPt-9k0_0X5P85LmVm_',
		date: '2022-07-07',
		distance: 42000,
		duration: 4104,
	},
	{
		id: 'tPHuEz94x14BqmCvflRug',
		challengeId: 'tPHuEz94x14BqmCvflRug',
		date: '2022-07-06',
		distance: 46,
		duration: 2104,
	},
	{
		id: 'q6G9rfulXuvHSioLvwjZp',
		challengeId: 'IygyGrSVBm6Zb9l8OJt7d',
		date: '2022-07-18',
		distance: 5005000,
		duration: 2973145,
	},
];

describe('sortAndFilter', () => {
	it('should return the sorted and filtered challengeList called by onChange from searchInput', () => {
		expect(
			sortAndFilter('search', 'th', '', 'status', list, statusList, activitiesList)
		).toStrictEqual([
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
		]);
	});

	it('should return the sorted and filtered challengeList called by onChange from sortInput', () => {
		expect(
			sortAndFilter('sort', 'status', 'th', '', list, statusList, activitiesList)
		).toStrictEqual([
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
		]);
	});
});

describe('searchList', () => {
	it('should return a searched list by a search value', () => {
		expect(searchList('search', 'st', '', list)).toStrictEqual([
			{
				distance: '3945',
				id: 'IFSHJmPJEmB1C6k81MWrv',
				title: 'Historic Route 66',
			},
		]);
	});

	it('should return a searched list by stored search input', () => {
		expect(searchList('sort', 'status', 'st', list)).toStrictEqual([
			{
				distance: '3945',
				id: 'IFSHJmPJEmB1C6k81MWrv',
				title: 'Historic Route 66',
			},
		]);
	});
});

describe('sortList', () => {
	it('should return a sorted list by sortValue: "alphabetically"', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(sortList('alphabetically', shortList, statusList, activitiesList)).toStrictEqual([
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
		]);
	});

	it('should return a sorted list by sortValue: "status"', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(sortList('status', shortList, statusList, activitiesList)).toStrictEqual([
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
		]);
	});

	it('should return a sorted list by sortValue: "ascending"', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(sortList('ascending', shortList, statusList, activitiesList)).toStrictEqual([
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
		]);
	});

	it('should return a sorted list by sortValue: "descending"', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(sortList('descending', shortList, statusList, activitiesList)).toStrictEqual([
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
		]);
	});
});

describe('findFinishChallenges', () => {
	it('should return a list with finished challenges and a the statusList without the finished challenges', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(findFinishChallenges(shortList, statusList, activitiesList)).toStrictEqual([
			[
				{
					distance: '5000',
					id: 'IygyGrSVBm6Zb9l8OJt7d',
					title: 'The Great Wall of China',
				},
				{
					distance: '42.2',
					id: 'DNZPt-9k0_0X5P85LmVm_',
					title: 'New York City Marathon',
				},
			],
			[
				{
					challengeId: 'tPHuEz94x14BqmCvflRug',
					status: 'active',
				},
			],
		]);
	});
});

describe('sortByStatus', () => {
	it('should return the challengeList sorted by their status', () => {
		const shortList = [{...list[3]}, {...list[6]}, {...list[1]}];
		expect(sortByStatus(shortList, statusList, activitiesList)).toStrictEqual([
			{
				distance: '246',
				id: 'tPHuEz94x14BqmCvflRug',
				title: 'Sparthathlon',
			},
			{
				distance: '5000',
				id: 'IygyGrSVBm6Zb9l8OJt7d',
				title: 'The Great Wall of China',
			},
			{
				distance: '42.2',
				id: 'DNZPt-9k0_0X5P85LmVm_',
				title: 'New York City Marathon',
			},
		]);
	});
});
