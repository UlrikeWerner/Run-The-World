import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`
	padding: 0.5em 1em;
	margin-top: 0.5rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #fff;
	color: #000;
	font-size: 1em;
	&:hover {
		background: lightgreen;
	}
	&:active {
		background: #bad;
	}
`;

export default StyledButton;
