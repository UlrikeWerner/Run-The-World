import styled from 'styled-components';

const StyledActivityDivider = styled.div`
	--spacing: 1.25rem;

	width: calc(100% - 2 * var(--spacing));
	height: 2px;
	transform: translateX(var(--spacing));
	background-color: silver;
	&:last-child {
		display: none;
	}
`;

export {StyledActivityDivider};
