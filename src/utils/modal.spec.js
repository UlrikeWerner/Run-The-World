import {setModalContent} from './modal';

describe('setModalContent', () => {
	const params = [
		{
			activTyp: 'edit',
			challengeId: '7vg0G0SQV6ID-iGTIuLCx',
			idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j',
		},
		{id: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592},
	];
	const paramsDelete = [
		{
			activTyp: 'delete',
			challengeId: '7vg0G0SQV6ID-iGTIuLCx',
			idOfActivObject: 'seQHNm0PmGGoHQfQV5o9j',
		},
		{id: 'seQHNm0PmGGoHQfQV5o9j', date: '2021-06-12', distance: 12800, duration: 2592},
	];

	const paramsStart = [
		{activTyp: 'start Challenge', challengeId: '7vg0G0SQV6ID-iGTIuLCx', idOfActivObject: ''},
		'',
		'Test Challenge',
	];

	it('should return the form component without props', () => {
		expect(setModalContent({activTyp: 'create', idOfActivObject: ''}, '').type.name).toBe(
			'AddActivity'
		);
	});

	it('should return the form component with props', () => {
		expect(setModalContent(params[0], params[1], '').type.name).toBe('AddActivity');

		expect(setModalContent(params[0], params[1], '').props.id).toBe('seQHNm0PmGGoHQfQV5o9j');

		expect(setModalContent(params[0], params[1], '').props.date).toBe('2021-06-12');

		expect(setModalContent(params[0], params[1], '').props.distance).toBe(12800);

		expect(setModalContent(params[0], params[1], '').props.duration).toBe(2592);
	});

	it('should return the MessageBox component with props', () => {
		expect(setModalContent(paramsDelete[0], paramsDelete[1], '').props.id).toBe(
			'seQHNm0PmGGoHQfQV5o9j'
		);

		expect(setModalContent(paramsDelete[0], paramsDelete[1], '').props.text).toBe(
			'Do you want to delete the activity from Jun 12?'
		);
	});

	it('should return the MessageBox component with props', () => {
		expect(setModalContent(paramsStart[0], paramsStart[1], paramsStart[2]).props.id).toBe(
			'7vg0G0SQV6ID-iGTIuLCx'
		);

		expect(setModalContent(paramsStart[0], paramsStart[1], paramsStart[2]).props.text).toBe(
			"Do you want to pause your active challenge to start 'Test Challenge' challenge?"
		);
	});
});
