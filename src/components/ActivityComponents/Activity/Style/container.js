import styled from 'styled-components';

const StyledActivityContainer = styled.section`
	display: grid;
	justify-self: center;
	grid-template-columns: 2fr 2fr 2fr 1fr;
	margin: 0 0.8rem 0 0.8rem;
	& :first-child {
		justify-self: center;
	}
`;

export {StyledActivityContainer};
