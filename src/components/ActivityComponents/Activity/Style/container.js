import styled from 'styled-components';

const ActivityContainer = styled.section`
	display: grid;
	justify-self: center;
	grid-template-columns: 2fr 2fr 2fr 1fr;
	margin: 0.3rem;
	border: 1px solid black;
	border-radius: 15px;
	& :first-child {
		justify-self: center;
	}
`;

export {ActivityContainer};
