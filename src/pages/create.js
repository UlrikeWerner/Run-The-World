import {Helmet} from 'react-helmet';

import AddActivityForm from '../components/Form/index';
import Layout from '../components/Layout';

export default function CreatePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Add Activity</title>
				<meta key="description" name="description" content="Create" />
			</Helmet>
			<AddActivityForm />
		</Layout>
	);
}
