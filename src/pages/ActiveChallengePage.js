import {Icon} from '@iconify/react';
import {Helmet} from 'react-helmet';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ModalBackdrop from '../components/Modal/ModalBackdrop';
import NavBar from '../components/NavBar/index';
import ProgressBox from '../components/ProgressBox';
import {useStore} from '../hooks/useStore';
import {sumDistance} from '../utils/progress';

import {HeadLine} from './style/HeadLineStyle';
import {SiteContent} from './style/SiteContent';
import {SiteWrapper} from './style/SiteWrapper';

export default function ActiveChallengePage() {
	const activeChallengeId = useStore(state => state.activeChallengeId);
	const challenge = useStore(state =>
		state.challenges.find(item => item.id === activeChallengeId)
	);
	const activityList = useStore(state => state.activities);
	const activeChallengeActivities = activityList.filter(
		item => item.challengeId === activeChallengeId
	);
	activeChallengeActivities.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date);
	});
	const sumActivitiesDistance = sumDistance(activeChallengeActivities, challenge?.distance);

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
					{challenge ? (
						<>
							<HeadLine>
								<div>
									<Icon
										icon={challenge?.logo}
										width={challenge?.logoSize}
										height={challenge?.logoSize}
									/>
								</div>
								<h1>{challenge?.title}</h1>
							</HeadLine>
							<ProgressBox
								distance={challenge?.distance}
								activities={activeChallengeActivities}
							/>
							{sumActivitiesDistance >= challenge.distance ? (
								<div>
									<p>&#127881; Congratulation!</p>
									<p>
										You have conquered the <span>{challenge?.title} </span>
										&#127881;
									</p>
								</div>
							) : (
								<Button
									variant="large"
									onClick={() => {
										setModal('create', '', challenge.id);
										setModalStatus(true);
									}}
								>
									add your activity
								</Button>
							)}
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
								<div>
									<p>no results</p>
								</div>
							)}
						</>
					) : (
						<div>
							<p>You have no active challenge</p>
						</div>
					)}
				</SiteContent>
				<NavBar />
			</SiteWrapper>
		</Layout>
	);
}
