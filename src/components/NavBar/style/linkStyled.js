import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkContainer = styled(NavLink)`
	position: relative;
	color: slategrey;

	&.active {
		transform: translateY(-1.5rem);
		color: var(--darkgreen);

		&::before {
			--circleSize: 3.75rem;

			content: '';
			position: absolute;
			z-index: -5;
			top: 50%;
			left: 50%;
			width: var(--circleSize);
			height: var(--circleSize);
			transform: translate(-50%, -50%);
			border-radius: 100vmax;
			background: var(--dlGreyGradient);
			box-shadow: var(--activeNavLinkShadow);
		}
	}
`;
export {StyledLinkContainer};
