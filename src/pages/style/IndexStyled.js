import styled from 'styled-components';

const StyledChallengeList = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100vw;
	padding: 0.8rem 1rem;
	column-gap: 1rem;
	row-gap: 0.8rem;

	div {
		position: relative;
		left: 50%;
		margin-top: 1rem;
		transform: translateX(-25%);
		color: darkred;
	}
`;

export {StyledChallengeList};
