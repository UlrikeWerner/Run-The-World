import {Helmet} from 'react-helmet';

import AddActivity from '../components/Form/index';
import Layout from '../components/Layout';

export default function CreatePage({setActivity}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">Add Activity</title>
				<meta key="description" name="description" content="Create" />
			</Helmet>
			<AddActivity setActivity={setActivity} />
		</Layout>
	);
}
