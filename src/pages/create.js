import {useState} from 'react';
import {Helmet} from 'react-helmet';

import AddActivity from '../components/ActivityComponents/Form/index';
import Layout from '../components/Layout';

export default function CreatePage() {
	const [added, isAdded] = useState(false);
	return (
		<Layout>
			<Helmet>
				<title key="title">Add Activity</title>
				<meta key="description" name="description" content="Create" />
			</Helmet>
			<h1>Add a new Activity</h1>
			<AddActivity isAdded={isAdded} added={added} />
			{added ? <p>new activity is added!</p> : ''}
		</Layout>
	);
}
