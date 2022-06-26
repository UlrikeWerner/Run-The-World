import ActivityResult from './';

export const Default = args => <ActivityResult {...args} />;

const story = Default.bind({});
story.args = {
	date: '2022-05-13',
	distance: 15600,
	duration: 3269,
};

export default story;
