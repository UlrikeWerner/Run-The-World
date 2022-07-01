import {Link} from 'react-router-dom';

import {ChallengeContainer} from '../Challenge/styled';

export default function Challenge({image, title, startingPoint, endingPoint, distance}) {
	return (
		<ChallengeContainer>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			<Link to="/ActiveChallenge">start</Link>
		</ChallengeContainer>
	);
}
