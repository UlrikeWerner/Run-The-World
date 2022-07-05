import {Icon} from '@iconify/react';

import {LinkContainer} from './style/linkStyled';
import {StyledNavBar} from './style/navStyled';

export default function NavBar() {
	return (
		<header>
			<StyledNavBar>
				<LinkContainer to="/">
					<Icon icon="bi:card-list" width="3rem" height="3rem" color="black" />
				</LinkContainer>
				<LinkContainer to="/ActiveChallenge">
					<Icon icon="icon-park-solid:sport" width="3rem" height="3rem" color="black" />
				</LinkContainer>
			</StyledNavBar>
		</header>
	);
}
