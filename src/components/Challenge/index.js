import {useNavigate} from 'react-router-dom';

import Button from '../Button/index';
import {ChallengeContainer} from '../Challenge/styled';

export default function Challenge({id, image, title, startingPoint, endingPoint, distance}) {
	const navigate = useNavigate();
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
					navigate('/ActiveChallenge');
				}}
			>
				Start
			</Button>
		</ChallengeContainer>
	);
}
