import styled from 'styled-components';

const ModalContainer = styled.dialog`
	z-index: 20;
	max-width: 70%;
	padding: 0.75rem 1rem;
	border: none;
	border-radius: 15px;
	background-color: var(--offWhite);
	box-shadow: 5px 5px 4px var(--blackTransparent);
`;

export default ModalContainer;
