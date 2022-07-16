import styled from 'styled-components';

const buttonState = {
	width: {
		small: '1rem',
		medium: '5rem',
		large: '95vw',
	},
	height: {
		small: '1.5rem',
		medium: '2rem',
		large: '2rem',
	},
	marginTop: {
		small: '0',
		medium: '0',
		large: '0.5rem',
	},
	marginLeft: {
		small: '0',
		medium: '0',
		large: '0.75rem',
	},
	padding: {
		small: '0.5em 0.8em',
		medium: '0.25em 0.5em',
		large: '0.5em 0.5em',
	},
	background: {
		small: 'var(--dlGreyGradient)',
		medium: 'var(--greenGradientDiagonal)',
		cancel: 'var(--dlGreyGradient)',
		large: 'var(--greenReverseGradient)',
	},
};

const StyledButton = styled.button`
	${props => `
	padding: ${buttonState.padding[props.variant] ?? buttonState.padding.medium};
	`};
	border-width: 2px;
	border-style: solid;
	border-radius: 0.4rem;
	border-color: var(--buttonBorderColor);
	${props => `
	background: ${buttonState.background[props.variant] ?? buttonState.background.medium};
	`};
	color: #000;
	font-size: 1em;
	${props => `
	width: ${buttonState.width[props.variant] ?? buttonState.width.medium};
	height: ${buttonState.height[props.variant] ?? buttonState.height.medium};
	margin-top: ${buttonState.marginTop[props.variant] ?? buttonState.marginTop.medium};
	margin-left: ${buttonState.marginLeft[props.variant] ?? buttonState.marginLeft.medium};
	`};

	&:focus {
		background: var(--palegreen);
	}
	&:hover {
		background: var(--palegreen);
	}
	&:active {
		border-color: var(--buttonBorderColorInverted);
	}
`;

export default StyledButton;
