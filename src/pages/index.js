import {Helmet} from 'react-helmet';

import ActivityResult from '../components/Activity/index';
import Layout from '../components/Layout';
import {useStore} from '../hooks/useStore';

export default function ResultsPage() {
	/*const activityList2 = [
		{id_: 1, date: '2022-05-13', distance: 15600, duration: 3269},
		{id_: 2, date: '2022-06-18', distance: 10000, duration: 3704},
		{id_: 3, date: '2022-06-21', distance: 20450, duration: 3945},
	];*/
	const activityList = useStore(state => state.activities);

	return (
		<Layout>
			<Helmet>
				<title key="title">Results</title>
				<meta key="description" name="description" content="Results" />
			</Helmet>
			<h1>Results of the Runs</h1>
			{activityList.length > 0 ? (
				activityList.map(item => {
					return <ActivityResult key={item.id_} id_={item.id_} />;
				})
			) : (
				<p>no results</p>
			)}
		</Layout>
	);
}
