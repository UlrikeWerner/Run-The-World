import styled from 'styled-components';

const ModalStateDesign = styled.div`
	position: absolute;
	inset: 0;
	z-index: 5;
	${props => `
	opacity: ${props.open === true ? '0.6' : '0'};
	pointer-events: ${props.open === true ? 'all' : 'none'};
	`};
	transition: opacity 0.5s ease;
	background-color: black;
`;

export default ModalStateDesign;
