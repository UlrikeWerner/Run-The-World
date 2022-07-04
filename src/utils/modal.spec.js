import {setModalContent} from './modal';

describe('setModalContent', () => {
	const params = [
		{activTyp: 'edit', idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j'},
		'b4FSIZoXFT5AR3omblJSQ',
		{id_: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592},
	];
	const paramsDelete = [
		{activTyp: 'delete', idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j'},
		'b4FSIZoXFT5AR3omblJSQ',
		{id_: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592},
	];

	it('should return the form component without props', () => {
		expect(setModalContent({activTyp: 'create', idOfActivObject: ''}, '').type.name).toBe(
			'AddActivity'
		);
	});

	it('should return the form component with props', () => {
		expect(setModalContent(params[0], params[1], params[2]).type.name).toBe('AddActivity');

		expect(setModalContent(params[0], params[1], params[2]).props.id).toBe(
			'seQHNm0PmGGoHQfQV5o9j'
		);

		expect(setModalContent(params[0], params[1], params[2]).props.date).toBe('2021-06-12');

		expect(setModalContent(params[0], params[1], params[2]).props.distance).toBe(12800);

		expect(setModalContent(params[0], params[1], params[2]).props.duration).toBe(2592);
	});

	it('should return the MessageBox component with props', () => {
		expect(setModalContent(paramsDelete[0], paramsDelete[1], paramsDelete[2]).props.id).toBe(
			'seQHNm0PmGGoHQfQV5o9j'
		);

		expect(setModalContent(paramsDelete[0], paramsDelete[1], paramsDelete[2]).props.text).toBe(
			'Do you want to delete the activity from Jun 12'
		);
	});
});
