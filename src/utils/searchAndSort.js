export function sortActivitiesByChallengeId(activitiesList) {
	activitiesList.sort(function (a, b) {
		if (a.challengeId < b.challengeId) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	});
	return activitiesList;
}

export function searchList(type, value, searchInput, list) {
	if (type === 'search') {
		if (value !== '') {
			list = list.filter(challenge => {
				return challenge.title.toLowerCase().includes(value.toLowerCase());
			});
		}
	} else {
		if (searchInput !== '') {
			list = list.filter(challenge => {
				return challenge.title.toLowerCase().includes(searchInput.toLowerCase());
			});
		}
	}
	return list;
}

export function sortByStatus(list, statusList, activitiesList) {
	sortActivitiesByChallengeId(activitiesList);
	const activeId = statusList.find(element => element.status === 'active')?.challengeId;
	let active = list.find(challenge => challenge.id === activeId);

	const pausedList = statusList.filter(elements => elements.status === 'paused');
	let paused = [];
	pausedList.forEach((element, index) => {
		const challengePaused = list.find(challenge => challenge.id === element.challengeId);
		paused[index] = challengePaused;
	});

	let resultList = [active, ...paused];
	let notStarted = [...list];
	resultList.forEach(element => {
		notStarted = notStarted.filter(challenges => challenges.id !== element.id);
	});

	resultList = [...resultList, ...notStarted];

	let finish;
	console.log(list);
	console.log(activitiesList);

	console.log('result', resultList);
	return resultList;
}

export function sortList(sortValue, list, statusList = '', activitiesList = '') {
	if (sortValue !== 'none') {
		switch (sortValue) {
			case 'status':
				list = sortByStatus(list, statusList, activitiesList);
				console.log('list', list);
				break;
			case 'alphabetically':
				list.sort(function (a, b) {
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
				list.sort(function (a, b) {
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
				list.sort(function (a, b) {
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
	return list;
}

export function sortAndFilter(
	type,
	value,
	searchInput,
	sortInput,
	list,
	statusList = '',
	activitiesList = ''
) {
	let sortValue = 'none';

	if (type === 'search') {
		sortValue = sortInput;
	} else {
		sortValue = value;
	}

	let resultList = searchList(type, value, searchInput, list);
	resultList = sortList(sortValue, resultList, statusList, activitiesList);

	return resultList;
}
