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

import {StyledActivitiesSection} from './style/ActivitiesSection';
import {StyledHeadLine} from './style/HeadLineStyle';
import {StyledSiteContent} from './style/SiteContent';
import {StyledSiteWrapper} from './style/SiteWrapper';
import {StyledHeadLineH1} from './style/StyledHeadLineH1';
import {StyledNoChallengeText} from './style/StyledNoChallengeText';
import {StyledText} from './style/StyledText';
import {StyledTextBold} from './style/StyledTextBold';
import {StyledTextBoldInText} from './style/StyledTextBoldInText';

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
								<StyledHeadLineH1>{challenge?.title}</StyledHeadLineH1>
							</StyledHeadLine>
							<ProgressBox
								distance={challenge?.distance}
								activities={activeChallengeActivities}
							/>
							{sumActivitiesDistance >= challenge.distance ? (
								<div>
									<StyledTextBold>
										&#127881; Congratulations! &#127881;
									</StyledTextBold>
									<StyledText>
										You have completed{' '}
										<StyledTextBoldInText>
											{challenge?.title}
										</StyledTextBoldInText>
									</StyledText>
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
							<StyledActivitiesSection>
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
									<StyledText>no activites yet</StyledText>
								)}
							</StyledActivitiesSection>
						</>
					) : (
						<>
							<StyledNoChallengeText>
								You have no active challenge
							</StyledNoChallengeText>
							<Button
								variant="large"
								onClick={() => {
									navigate('/');
								}}
							>
								start a new challenge
							</Button>
						</>
					)}
				</StyledSiteContent>
				<NavBar />
			</StyledSiteWrapper>
		</Layout>
	);
}
