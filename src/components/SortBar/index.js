import {StyledContainer} from './Styled/StyledContainer';
import {StyledIcon} from './Styled/StyledIcon';
import {StyledInput} from './Styled/StyledInput';

export default function SortBar({sortChallenges}) {
	return (
		<StyledContainer>
			<StyledIcon icon="clarity:sort-by-line" />
			<StyledInput
				id="sortBar"
				aria-label="sort by"
				onChange={event => sortChallenges('sort', event.target.value)}
			>
				{/*<option value="none">none</option>*/}
				<option value="alphabetically">alphabetically</option>
				<option value="status">challenge status</option>
				<option value="ascending">km ascending</option>
				<option value="descending">km descending</option>
			</StyledInput>
		</StyledContainer>
	);
}
