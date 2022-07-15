import {StyledLabel} from './Styled/StyledLabel';
import {StyledSortContainer} from './Styled/StyledSortContainer';

export default function SortBar({sortChallenges}) {
	return (
		<StyledSortContainer>
			<StyledLabel htmlFor="sortBar">sort by</StyledLabel>
			<select id="sortBar" onChange={event => sortChallenges('sort', event.target.value)}>
				<option value="none">none</option>
				<option value="status">challenge status</option>
				<option value="alphabetically">alphabetically</option>
				<option value="ascending">km ascending</option>
				<option value="descending">km descending</option>
			</select>
		</StyledSortContainer>
	);
}
