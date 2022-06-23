import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Run the World</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
		</Layout>
	);
}
