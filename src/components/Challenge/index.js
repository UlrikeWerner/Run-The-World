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
	return (
		<ChallengeContainer>
			<img src={image} aria-label={title} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			<Button
				onClick={() => {
					setChallengeStatus(challengeId, 'active');
					navigate('/ActiveChallenge');
				}}
			>
				Start
			</Button>
		</ChallengeContainer>
	);
}
