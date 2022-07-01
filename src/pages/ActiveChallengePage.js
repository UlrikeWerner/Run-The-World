import {Helmet} from 'react-helmet';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ModalBackdrop from '../components/Modal/ModalBackdrop';
import {useStore} from '../hooks/useStore';

export default function ActiveChallengePage() {
	const activityList = useStore(state => state.activities);
	const setModal = useStore(state => state.setModal);
	const modalStatus = useStore(state => state.modalStatus);
	const setModalStatus = useStore(state => state.setModalStatus);

	return (
		<Layout>
			<Helmet>
				<title key="title">activeCallenge</title>
				<meta key="description" name="description" content="activeChallenge" />
			</Helmet>
			<ModalBackdrop open={modalStatus} />
			<h1>Results of the Runs</h1>
			<Button
				variant="large"
				onClick={() => {
					setModal('create', '');
					setModalStatus(true);
				}}
			>
				add your activity
			</Button>
			<Modal open={modalStatus} />
			{activityList.length > 0 ? (
				activityList.map(item => {
					return (
						<ActivityResult
							key={item.id_}
							activityId={item.id_}
							date={item.date}
							duration={item.duration}
							distance={item.distance}
						/>
					);
				})
			) : (
				<p>no results</p>
			)}
		</Layout>
	);
}
