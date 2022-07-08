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
	const modalStatus = useStore(state => state.modalStatus);
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);

	return (
		<ChallengeContainer>
			<Modal open={modalStatus} />
			<img src={image} aria-label={title} alt={title} />
			<h2>{title}</h2>
			<p>
				{startingPoint} to {endingPoint}
			</p>
			<p>{distance} km</p>
			<Button
				onClick={() => {
					setModal('start Challenge', '', challengeId);
					setModalStatus(true);
				}}
			>
				Start
			</Button>
		</ChallengeContainer>
	);
}
