import ActivityResult from './';

export function Default() {
	const item = [{id_: 1, date: '2022-05-13', distance: 15600, duration: 3269}];
	return <ActivityResult key={item.id_} activity={item} />;
}

const story = {
	title: 'Activities',
	component: ActivityResult,
};

export default story;
