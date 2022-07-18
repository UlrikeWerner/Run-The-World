import styled from 'styled-components';

const StyledChallengeImage = styled.img`
	max-width: calc(100% + 2 * var(--challengeContainerPadding));
	max-height: 10rem;
	margin: calc(var(--challengeContainerPadding) * -1);
	margin-bottom: 0;
	border-bottom: 2px solid slategrey;
`;

export {StyledChallengeImage};
