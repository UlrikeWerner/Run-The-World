import {Icon} from '@iconify/react';
import {Helmet} from 'react-helmet';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ModalBackdrop from '../components/Modal/ModalBackdrop';
import NavBar from '../components/NavBar/index';
import {useStore} from '../hooks/useStore';

import {HeadLine} from './style/HeadLineStyle';
import {SiteContent} from './style/SiteContent';
import {SiteWrapper} from './style/SiteWrapper';

export default function ActiveChallengePage() {
	const activeChallengeId = useStore(state => state.activeChallengeId);
	const challenge = useStore(state =>
		state.challenges.filter(item => item.id === activeChallengeId)
	);
	const activityList = useStore(state => state.activities);
	const activeChallengeActivities = activityList.filter(
		item => item.challengeId === activeChallengeId
	);
	activeChallengeActivities.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	const setModal = useStore(state => state.setModal);
	const modalStatus = useStore(state => state.modalStatus);
	const setModalStatus = useStore(state => state.setModalStatus);

	return (
		<Layout>
			<Helmet>
				<title key="title">activeCallenge</title>
				<meta key="description" name="description" content="activeChallenge" />
			</Helmet>
			<SiteWrapper>
				<ModalBackdrop open={modalStatus} />
				<SiteContent>
					{challenge.length > 0 ? (
						<>
							<HeadLine>
								<Icon
									icon={challenge[0]?.logo}
									width={challenge[0]?.logoSize}
									height={challenge[0]?.logoSize}
								/>
								<h1>{challenge[0]?.title}</h1>
							</HeadLine>
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
							{activeChallengeActivities.length > 0 ? (
								activeChallengeActivities.map(item => {
									return (
										<ActivityResult
											key={item.id}
											challengeId={activeChallengeId}
											activityId={item.id}
											date={item.date}
											duration={item.duration}
											distance={item.distance}
										/>
									);
								})
							) : (
								<p>no results</p>
							)}
						</>
					) : (
						<p>You have no active challenge</p>
					)}
				</SiteContent>
				<NavBar />
			</SiteWrapper>
		</Layout>
	);
}
