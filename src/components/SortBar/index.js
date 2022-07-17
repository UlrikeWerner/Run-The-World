import {StyledSortContainer} from './Styled/StyledSortContainer';
import {StyledSortIcon} from './Styled/StyledSortIcon';
import {StyledSortInput} from './Styled/StyledSortInput';

export default function SortBar({sortChallenges}) {
	return (
		<StyledSortContainer>
			<StyledSortIcon icon="clarity:sort-by-line" />
			<StyledSortInput
				id="sortBar"
				aria-label="sort by"
				onChange={event => sortChallenges('sort', event.target.value)}
			>
				{/*<option value="none">none</option>*/}
				<option value="alphabetically">alphabetically</option>
				<option value="status">challenge status</option>
				<option value="ascending">km ascending</option>
				<option value="descending">km descending</option>
			</StyledSortInput>
		</StyledSortContainer>
	);
}
