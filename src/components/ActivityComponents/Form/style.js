import styled from 'styled-components';

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem 0.5rem 0.75rem;
	padding: 0 1rem;

	div {
		display: flex;
		margin-bottom: 0.5rem;
	}

	p {
		max-width: 2rem;
		margin: 0;
	}

	input {
		max-width: 9.5rem;
		text-align: center;
	}

	button#submit {
		max-width: 5rem;
		margin-left: 0.25rem;
	}
`;

export {FormContainer};