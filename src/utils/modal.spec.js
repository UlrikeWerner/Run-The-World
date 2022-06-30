import {setModalContent} from './modal';

import {AddActivity} from '../components/ActivityComponents/Form/index';

describe('setModalContent', () => {
	const params = [
		{activTyp: 'edit', idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j'},
		{id_: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592},
	];

	it('should return the form component without props', () => {
		expect(setModalContent({activTyp: 'create', idOfActivObject: ''}, '').type.name).toBe(
			'AddActivity'
		);
	});
	it('should return the form component with props', () => {
		expect(setModalContent(params[0], params[1]).type.name).toBe('AddActivity');

		expect(setModalContent(params[0], params[1]).props.id).toBe('seQHNm0PmGGoHQfQV5o9j');

		expect(setModalContent(params[0], params[1]).props.date).toBe('2021-06-12');

		expect(setModalContent(params[0], params[1]).props.distance).toBe(12800);

		expect(setModalContent(params[0], params[1]).props.duration).toBe(2592);
	});
});
