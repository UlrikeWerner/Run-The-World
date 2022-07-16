import {StyledIcon} from './style/iconStyle';
import {LinkContainer} from './style/linkStyled';
import {StyledNavBar} from './style/navStyled';

export default function NavBar() {
	const iconSize = '2.75rem';
	return (
		<StyledNavBar>
			<LinkContainer to="/" role="LinkToList">
				<StyledIcon
					icon="bi:card-list"
					width={iconSize}
					height={iconSize}
					color=""
					alt="list of challenges"
				/>
			</LinkContainer>
			<LinkContainer to="/ActiveChallenge">
				<StyledIcon
					icon="icon-park-solid:sport"
					width={iconSize}
					height={iconSize}
					color=""
					alt="active challenge"
				/>
			</LinkContainer>
		</StyledNavBar>
	);
}
