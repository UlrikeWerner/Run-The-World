export function sortAndFilter(type, value, searchInput, sortInput, challengeList) {
	let filterChallengeList = challengeList;
	let sortValue = 'none';

	if (type === 'search') {
		sortValue = sortInput;
	} else {
		sortValue = value;
	}

	if (type === 'search') {
		if (value !== '') {
			filterChallengeList = filterChallengeList.filter(challenge => {
				return challenge.title.toLowerCase().includes(value.toLowerCase());
			});
		}
	} else {
		if (searchInput !== '') {
			filterChallengeList = filterChallengeList.filter(challenge => {
				return challenge.title.toLowerCase().includes(searchInput.toLowerCase());
			});
		}
	}

	if (sortValue !== 'none') {
		switch (sortValue) {
			case 'alphabetically':
				filterChallengeList.sort(function (a, b) {
					if (a.title < b.title) {
						return -1;
					}
					if (a.title > b.title) {
						return 1;
					}
					return 0;
				});
				break;
			case 'ascending':
				filterChallengeList.sort(function (a, b) {
					if (Number(a.distance) < Number(b.distance)) {
						return -1;
					}
					if (Number(a.distance) > Number(b.distance)) {
						return 1;
					}
					return 0;
				});
				break;
			case 'descending':
				filterChallengeList.sort(function (a, b) {
					if (Number(a.distance) < Number(b.distance)) {
						return 1;
					}
					if (Number(a.distance) > Number(b.distance)) {
						return -1;
					}
					return 0;
				});
				break;
			default:
				break;
		}
	}
	return filterChallengeList;
}
