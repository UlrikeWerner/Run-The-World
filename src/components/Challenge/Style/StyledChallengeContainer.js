import styled from 'styled-components';

const StyledChallengeContainer = styled.section`
	position: relative;
	max-width: 10rem;
	max-height: 20rem;
	padding: var(--challengeContainerPadding);
	padding-bottom: 2.5rem;
	overflow: hidden;
	border-radius: 15px;
	background: var(--dlGreyGradient);
	box-shadow: var(--bgShadow);

	button {
		position: absolute;
		bottom: calc(var(--challengeContainerPadding) * 1.5);
		left: 50%;
		transform: translateX(-50%);
	}
`;

export {StyledChallengeContainer};
