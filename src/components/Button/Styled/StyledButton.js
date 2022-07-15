import styled from 'styled-components';

const buttonState = {
	width: {
		small: '1rem',
		medium: '5rem',
		large: '95vw',
	},
	height: {
		small: '1.5rem',
		medium: '2.5rem',
		large: '2rem',
	},
	marginTop: {
		small: '0.25rem',
		medium: '0.5rem',
		large: '0.5rem',
	},
	marginLeft: {
		small: '0',
		medium: '0',
		large: '0.75rem',
	},
	background: {
		small: '--dlGreyGradient',
		medium: '--greenGradientDiagonal',
		cancel: '--dlGreyGradient',
		large: '--greenReverseGradient',
	},
};

const StyledButton = styled.button`
	margin-top: 0.5rem;
	padding: 0.5em 0.5em;
	border-width: 2px;
	border-style: solid;
	border-radius: 0.4rem;
	border-color: var(--buttonBorderColor);
	${props => `
	background: var(${buttonState.background[props.variant] ?? buttonState.background.medium});
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
