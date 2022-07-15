import styled from 'styled-components';

const StyledActivityContainer = styled.section`
	display: grid;
	grid-template-columns: 2fr 1.6fr 2.25fr 1fr;
	margin: 0 0.5rem 0 0.5rem;
	& :first-child {
		justify-self: center;
	}
`;

export {StyledActivityContainer};
