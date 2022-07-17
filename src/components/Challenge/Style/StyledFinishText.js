import styled from 'styled-components';

const StyledFinishText = styled.div`
	position: absolute;
	right: 0;
	bottom: calc(var(--challengeContainerPadding) * 2.5);
	left: 0;
	margin-top: 1rem;
	color: var(--orange);
	text-align: center;
	text-transform: uppercase;

	&::before {
		content: '* completed *';
	}
`;

export {StyledFinishText};
