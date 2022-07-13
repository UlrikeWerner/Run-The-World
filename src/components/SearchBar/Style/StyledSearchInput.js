import styled from 'styled-components';

const StyledSearchInput = styled.input`
	width: 65%;
	padding: 0.2rem 0 0.2rem 1.5rem;
	border: 1px solid black;
	border-radius: 25px;

	&:where(:focus, :not([value=''])) + label {
		opacity: 0;
		pointer-events: none;
	}
`;

export {StyledSearchInput};
