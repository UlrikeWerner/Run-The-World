import styled from 'styled-components';

const StyledNavBar = styled.div`
	--radius: 1.5rem;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 0.2rem;
	padding: 0.25rem 1rem 0;
	border-top-left-radius: var(--radius);
	border-top-right-radius: var(--radius);
	background: var(--dlGreyGradient);
	box-shadow: 0 -3px 8px var(--blackTransparent);
`;

export {StyledNavBar};
