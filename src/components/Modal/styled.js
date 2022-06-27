import styled from 'styled-components';

const ModalContainer = styled.dialog`
	max-width: 80%;
	padding: 0.25rem;
	border-radius: 15px;

	&::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export default ModalContainer;
