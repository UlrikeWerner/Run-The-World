import styled from 'styled-components';

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem 2rem;
	padding: 1rem 3rem;
	border: 1px solid black;
	border-radius: 15px;

	div {
		display: flex;
		margin-bottom: 0.5rem;
	}

	p {
		margin: 0;
		max-width: 2rem;
	}

	input {
		text-align: center;
		max-width: 9.5rem;
	}

	input#submit {
		max-width: 5rem;
		margin-top: 0.25rem;
	}
`;

export {FormContainer};
