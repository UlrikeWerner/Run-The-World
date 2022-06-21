import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import {secondToDurationData} from '../utils/unit';

export default function ResultsPage() {
	const activityList = [
		{id_: 1, date: '2022-06-20', distance: 15.6, duration: 3269},
		{id_: 2, date: '2022-06-18', distance: 10, duration: 3704},
		{id_: 1, date: '2022-06-21', distance: 20.45, duration: 3945},
	];
	return (
		<Layout>
			<Helmet>
				<title key="title">Results</title>
				<meta key="description" name="description" content="Results" />
			</Helmet>
			<h1>Results of the Runs</h1>
			{console.log(secondToDurationData(3696))}
		</Layout>
	);
}
