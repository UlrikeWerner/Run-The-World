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
	const setActivChallengeId = useStore(state => state.setActivChallengeId);
	return (
		<ChallengeContainer>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			<Button
				onClick={() => {
					setActivChallengeId(challengeId);
					navigate('/ActiveChallenge');
				}}
			>
				Start
			</Button>
		</ChallengeContainer>
	);
}
