import {useNavigate} from 'react-router-dom';

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
	const setChallengeStatus = useStore(state => state.setChallengeStatus);

	const activities = useStore(state => state.activities).filter(activity => {
		return activity.challengeId === challengeId;
	});
	let activityDistance = 0;
	activities.forEach(activity => {
		activityDistance += activity.distance;
	});

	const isFinished = distance <= activityDistance;

	return (
		<ChallengeContainer>
			<img src={image} aria-label={title} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			{isFinished ? (
				<div>*finished</div>
			) : (
				<Button
					onClick={() => {
						setChallengeStatus(challengeId);
						navigate('/ActiveChallenge');
					}}
				>
					Start
				</Button>
			)}
		</ChallengeContainer>
	);
}
