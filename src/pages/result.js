import {Helmet} from 'react-helmet';

import ActivityResult from '../components/Activity/index';
import Layout from '../components/Layout';

export default function ResultsPage() {
	const activityList = [
		{id_: 1, date: '2022-05-13', distance: 15600, duration: 3269},
		{id_: 2, date: '2022-06-18', distance: 10000, duration: 3704},
		{id_: 3, date: '2022-06-21', distance: 20450, duration: 3945},
	];
	return (
		<Layout>
			<Helmet>
				<title key="title">Results</title>
				<meta key="description" name="description" content="Results" />
			</Helmet>
			<h1>Results of the Runs</h1>
			<ActivityResult activity={activityList[0]} />
		</Layout>
	);
}