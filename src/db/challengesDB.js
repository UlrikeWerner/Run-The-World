import {nanoid} from 'nanoid';

const challengesDB = [
	{
		id: nanoid(),
		status: '',
		title: 'Route 66',
		img: 'https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80',
		distance: '3945',
		startingPoint: 'Chicago',
		endingPoint: 'Santa Monica',
		activities: [],
	},
	{
		id: nanoid(),
		status: '',
		title: 'Great Wall of China',
		img: 'https://images.unsplash.com/photo-1509624780899-f812439647e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		distance: '5000',
		startingPoint: 'Jiayuguan Pass',
		endingPoint: 'Shanhai Pass',
		activities: [],
	},
	{
		id: nanoid(),
		status: '',
		title: 'Camino de Santiago',
		img: 'https://cdn.pixabay.com/photo/2018/04/10/10/01/nature-3306920_960_720.jpg',
		distance: '800',
		startingPoint: 'Saint-Jean-Pied-de-Port',
		endingPoint: 'Santiago de Compostela',
		activities: [],
	},
];

export default challengesDB;
