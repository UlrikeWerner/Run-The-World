import {StyledHeader} from './Styled/StyledHeader';
import {StyledHeaderH1} from './Styled/StyledHeaderH1';
import {StyledHeaderIcon} from './Styled/StyledHeaderIcon';

export default function Header() {
	return (
		<StyledHeader>
			<StyledHeaderIcon icon="subway:world-1" />
			<StyledHeaderH1>Run The World</StyledHeaderH1>
		</StyledHeader>
	);
}
