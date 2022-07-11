import {Icon} from '@iconify/react';
import {Helmet} from 'react-helmet';
import {useNavigate} from 'react-router-dom';

import ActivityResult from '../components/ActivityComponents/Activity/index';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ModalBackdrop from '../components/Modal/ModalBackdrop';
import NavBar from '../components/NavBar/index';
import ProgressBox from '../components/ProgressBox';
import {useStore} from '../hooks/useStore';
import {sumDistance} from '../utils/progress';

import {StyledHeadLine} from './style/HeadLineStyle';
import {StyledSiteContent} from './style/SiteContent';
import {StyledSiteWrapper} from './style/SiteWrapper';

export default function ActiveChallengePage() {
	const navigate = useNavigate();

	const activeChallengeId = useStore(state =>
		state.challengeStatus.find(item => item.status === 'active')
	)?.challengeId;
	const challenge = useStore(state =>
		state.challenges?.find(item => item.id === activeChallengeId)
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
			<StyledSiteWrapper>
				<ModalBackdrop open={modalStatus} />
				<StyledSiteContent>
					{challenge ? (
						<>
							<StyledHeadLine>
								<div>
									<Icon
										icon={challenge?.logo}
										width={challenge?.logoSize}
										height={challenge?.logoSize}
									/>
								</div>
								<h1>{challenge?.title}</h1>
							</StyledHeadLine>
							<ProgressBox
								distance={challenge?.distance}
								activities={activeChallengeActivities}
							/>
							{sumActivitiesDistance >= challenge.distance ? (
								<div>
									<p>&#127881; Congratulations!</p>
									<p>
										You have conquered <span>{challenge?.title} </span>
										&#127881;
									</p>
									<Button
										variant="large"
										onClick={() => {
											navigate('/');
										}}
									>
										start a new challenge
									</Button>
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
				</StyledSiteContent>
				<NavBar />
			</StyledSiteWrapper>
		</Layout>
	);
}
