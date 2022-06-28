import {Helmet} from 'react-helmet';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import {useStore} from '../hooks/useStore';
import {modalShow} from '../utils/modal';

export default function ResultsPage() {
	const activityList = useStore(state => state.activities);
	const setModal = useStore(state => state.setModal);

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
					setModal('create', '');
					modalShow('addActivityModal');
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
