import styled from 'styled-components';

const ModalContainer = styled.dialog`
	padding: 0.25rem;
	max-width: 80%;
	border-radius: 15px;

	&::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export default ModalContainer;
