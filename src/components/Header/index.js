import {StyledH1} from './Styled/StyledH1';
import {StyledHeader} from './Styled/StyledHeader';
import {StyledIcon} from './Styled/StyledIcon';

export default function Header() {
	return (
		<StyledHeader>
			<StyledIcon icon="subway:world-1" alt="world" />
			<StyledH1>Run The World</StyledH1>
		</StyledHeader>
	);
}
