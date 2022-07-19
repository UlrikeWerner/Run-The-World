import {
	searchList,
	findFinishChallenges,
	sortByStatus,
	sortList,
	sortAndFilter,
} from './searchAndSort';

//const typeSearch = 'search';
//const typeSort = 'sort';
//const valueSearch = 'at';
//const valueSort = 'status';
const searchInput = 'at';
const sortInput = 'status';
const list = [
	{
		id: 'IFSHJmPJEmB1C6k81MWrv',
		title: 'Historic Route 66',
		logo: 'map:route',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/210112/pexels-photo-210112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '3945',
		startingPoint: 'Chicago',
		endingPoint: 'Santa Monica',
	},
	{
		id: 'IygyGrSVBm6Zb9l8OJt7d',
		title: 'The Great Wall of China',
		logo: 'icon-park-outline:great-wall',
		logoSize: '1.8rem',
		img: 'https://images.unsplash.com/photo-1509624780899-f812439647e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		distance: '5000',
		startingPoint: 'Jiayuguan Pass',
		endingPoint: 'Shanhai Pass',
	},
	{
		id: 'Ko4rz4z1xey7bE8i7ZFKf',
		title: 'Camino de Santiago',
		logo: 'cib:shell',
		logoSize: '1.8rem',
		img: 'https://cdn.pixabay.com/photo/2018/04/10/10/01/nature-3306920_960_720.jpg',
		distance: '800',
		startingPoint: 'Saint-Jean-Pied-de-Port',
		endingPoint: 'Santiago de Compostela',
	},
	{
		id: 'DNZPt-9k0_0X5P85LmVm_',
		title: 'New York City Marathon',
		logo: 'emojione-monotone:statue-of-liberty',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/7729432/pexels-photo-7729432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '42.2',
		startingPoint: 'Fort Wadsworth',
		endingPoint: 'Central Park',
	},
	{
		id: 'U1LAyg6UreXUwUG7z_h6M',
		title: 'Amazonas',
		logo: 'iconoir:sea-waves',
		logoSize: '2rem',
		img: 'https://images.unsplash.com/photo-1585926494452-3bbf4064af50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		distance: '6800',
		startingPoint: 'Mount Mismi',
		endingPoint: 'Atlanic Ocean',
	},
	{
		id: 'OEqClfdYkQzFSRaPzuRcH',
		title: 'Lauf zwischen den Meeren',
		logo: 'mdi:lighthouse',
		logoSize: '1.8rem',
		img: 'https://images.unsplash.com/photo-1558366761-abbf5fee4cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		distance: '96.6',
		startingPoint: 'Husum',
		endingPoint: 'Damp',
	},
	{
		id: 'tPHuEz94x14BqmCvflRug',
		title: 'Sparthathlon',
		logo: 'emojione-monotone:amphora',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '246',
		startingPoint: 'Akropolis',
		endingPoint: 'Sparta',
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

/*describe('sortAndFilter', () => {
	it('should return the completed sort and filtered list', () => {
		expect(sumDuration(activities)).toBe('1h 14min ');
	});
});*/

describe('searchList', () => {
	it('should return a searched list by a search value', () => {
		expect(searchList('search', 'st', '', list)).toStrictEqual([
			{
				distance: '3945',
				endingPoint: 'Santa Monica',
				id: 'IFSHJmPJEmB1C6k81MWrv',
				img: 'https://images.pexels.com/photos/210112/pexels-photo-210112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				logo: 'map:route',
				logoSize: '1.8rem',
				startingPoint: 'Chicago',
				title: 'Historic Route 66',
			},
		]);
	});

	it('should return a searched list by stored search input', () => {
		expect(searchList('sort', 'status', 'st', list)).toStrictEqual([
			{
				distance: '3945',
				endingPoint: 'Santa Monica',
				id: 'IFSHJmPJEmB1C6k81MWrv',
				img: 'https://images.pexels.com/photos/210112/pexels-photo-210112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				logo: 'map:route',
				logoSize: '1.8rem',
				startingPoint: 'Chicago',
				title: 'Historic Route 66',
			},
		]);
	});
});

describe('sortList', () => {
	it('should return a sorted list', () => {
		expect(sumDuration(activities)).toBe('1h 14min ');
	});
});
