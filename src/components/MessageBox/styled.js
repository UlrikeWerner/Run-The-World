import styled from 'styled-components';

const MessageContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 1rem 0.5rem 0.75rem;
	padding: 0 1rem;

	div {
		display: flex;
		margin-bottom: 0.5rem;
	}

	p {
		margin: 0;
	}

	button {
		max-width: 5rem;
		margin-right: 0.25rem;
	}
`;

export {MessageContainer};
