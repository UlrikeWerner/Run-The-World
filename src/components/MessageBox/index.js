import {useNavigate} from 'react-router-dom';

import {useStore} from '../../hooks/useStore';
import Button from '../Button';

import {StyledButtonWrapper} from './Styled/StyledButtonWrapper';
import {StyledMessageContainer} from './Styled/StyledMessageContainer';
import {StyledTextWrapper} from './Styled/StyledTextWrapper';

export default function MessageBox({id = '', type, text}) {
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);
	const deleteActivity = useStore(state => state.deleteActivity);
	const setChallengeStatus = useStore(state => state.setChallengeStatus);

	const navigate = useNavigate();

	return (
		<StyledMessageContainer>
			<StyledTextWrapper>{text}</StyledTextWrapper>
			<StyledButtonWrapper>
				{type === 'delete' ? (
					<>
						<Button
							variant="cancel"
							role="cancel"
							onClick={() => {
								setModal('', '', '');
								setModalStatus(false);
							}}
						>
							cancel
						</Button>
						<Button
							variant="medium"
							role="ok"
							type="button"
							onClick={() => {
								deleteActivity(id);
								setModal('', '', '');
								setModalStatus(false);
							}}
						>
							ok
						</Button>
					</>
				) : type === 'start' ? (
					<>
						<Button
							variant="cancel"
							role="cancel"
							onClick={() => {
								setModal('', '', '');
								setModalStatus(false);
							}}
						>
							cancel
						</Button>
						<Button
							variant="medium"
							role="ok"
							type="button"
							onClick={() => {
								setChallengeStatus(id);
								setModal('', '', '');
								setModalStatus(false);
								navigate('/ActiveChallenge');
							}}
						>
							ok
						</Button>
					</>
				) : (
					<Button
						variant="medium"
						role="ok"
						type="button"
						onClick={() => {
							setModal('', '', '');
							setModalStatus(false);
						}}
					>
						ok
					</Button>
				)}
			</StyledButtonWrapper>
		</StyledMessageContainer>
	);
}
