import styled from 'styled-components';

const ActivityContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 0.3rem;
	border: 1px solid black;
	border-radius: 15px;

	& :first-child {
		justify-self: center;
		margin: 0.25rem 0;
	}
`;

export {ActivityContainer};
