import {Helmet} from 'react-helmet';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import {useStore} from '../hooks/useStore';

export default function ResultsPage() {
	const activityList = useStore(state => state.activities);

	return (
		<Layout>
			<Helmet>
				<title key="title">Results</title>
				<meta key="description" name="description" content="Results" />
			</Helmet>
			<h1>Results of the Runs</h1>
			<Button
				value="add your activity"
				onClick={() => {
					const modal = document.querySelector('#addActivityModal');
					modal.showModal();
				}}
			/>
			<Modal id={'addActivityModal'} />
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
