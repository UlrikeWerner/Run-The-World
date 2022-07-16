import {StyledIcon} from './style/iconStyle';
import {StyledLinkContainer} from './style/linkStyled';
import {StyledNavBar} from './style/navStyled';

export default function NavBar() {
	const iconSize = '2.75rem';
	return (
		<StyledNavBar>
			<StyledLinkContainer to="/" role="LinkToList">
				<StyledIcon
					icon="bi:card-list"
					width={iconSize}
					height={iconSize}
					color=""
					alt="list of challenges"
				/>
			</StyledLinkContainer>
			<StyledLinkContainer to="/ActiveChallenge">
				<StyledIcon
					icon="icon-park-solid:sport"
					width={iconSize}
					height={iconSize}
					color=""
					alt="active challenge"
				/>
			</StyledLinkContainer>
		</StyledNavBar>
	);
}
