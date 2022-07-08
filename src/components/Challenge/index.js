import Modal from '../../components/Modal/index';
import {useStore} from '../../hooks/useStore';
import Button from '../Button/index';
import {ChallengeContainer} from '../Challenge/styled';

export default function Challenge({
	challengeId,
	image,
	title,
	startingPoint,
	endingPoint,
	distance,
}) {
	const navigate = useNavigate();

	const modalStatus = useStore(state => state.modalStatus);
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);
	const setChallengeStatus = useStore(state => state.setChallengeStatus);

	const activities = useStore(state => state.activities).filter(activity => {
		return activity.challengeId === challengeId;
	});
	let activityDistance = 0;
	activities.forEach(activity => {
		activityDistance += activity.distance;
	});
	const isFinished = activityDistance / 1000 >= distance;

	const challengeStatus = useStore(state => state.challengeStatus);
	const status = challengeStatus.find(challenge => challenge.challengeId === challengeId);

	return (
		<ChallengeContainer>
			<Modal open={modalStatus} />
			<img src={image} aria-label={title} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			{isFinished ? (
				<div>*finished</div>
			) : status?.status === 'paused' ? (
				<Button
					onClick={() => {
						setModal('start Challenge', '', challengeId);
						setModalStatus(true);
					}}
				>
					resume
				</Button>
			) : status?.status === 'active' ? (
				<Button
					onClick={() => {
						setModal('start Challenge', '', challengeId);
						setModalStatus(true);
					}}
				>
					open
				</Button>
			) : (
				<Button
					onClick={() => {
						setModal('start Challenge', '', challengeId);
						setModalStatus(true);
					}}
				>
					start
				</Button>
			)}
		</ChallengeContainer>
	);
}
