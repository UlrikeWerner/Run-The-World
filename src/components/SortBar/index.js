export default function SortBar({sortChallenges}) {
	return (
		<section>
			<label htmlFor="sortBar">sort by</label>
			<select id="sortBar" onChange={event => sortChallenges('sort', event.target.value)}>
				<option value="none">none</option>
				<option value="alphabetically">alphabetically</option>
				<option value="ascending">km ascending</option>
				<option value="descending">km descending</option>
			</select>
		</section>
	);
}
