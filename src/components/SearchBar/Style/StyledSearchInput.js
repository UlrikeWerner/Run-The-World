import styled from 'styled-components';

const StyledSearchInput = styled.input`
	height: 1.75rem;
	padding: 0.2rem 0 0.2rem 1.5rem;
	border-width: 2px;
	border-style: solid;
	border-radius: 25px;
	border-color: var(--buttonBorderColorInverted);

	&:where(:focus, :not([value=''])) + label {
		opacity: 0;
		pointer-events: none;
	}
`;

export {StyledSearchInput};
