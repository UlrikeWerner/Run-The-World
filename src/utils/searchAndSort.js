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

export function findFinishChallenges(challenges, statusList, activities) {
	let newStatusList = statusList;
	let finish = [];

	statusList.forEach(status => {
		const examineChallenge = challenges?.find(
			challenge => challenge?.id === status?.challengeId
		);
		const examineActivities = activities?.filter(
			activity => activity?.challengeId === examineChallenge?.id
		);

		let activitiesDistance = 0;
		examineActivities?.forEach(activity => {
			activitiesDistance += activity?.distance;
		});

		if (activitiesDistance / 1000 >= examineChallenge?.distance) {
			finish = [...finish, examineChallenge];
			newStatusList = newStatusList?.filter(
				challenge => challenge?.challengeId !== examineChallenge?.id
			);
		}
	});
	return [finish, newStatusList];
}

export function sortByStatus(list, statusList, activitiesList) {
	let finishReturn = [];
	let finish = [];
	let newStatusList = [];

	if (statusList.length > 0) {
		finishReturn = findFinishChallenges(list, statusList, activitiesList);
		finish = [...finishReturn[0]];
		newStatusList = [...finishReturn[1]];
	}

	const activeId = newStatusList.find(element => element.status === 'active')?.challengeId;
	const activeChallenge = list?.find(challenge => challenge.id === activeId);

	let resultList;
	activeChallenge ? (resultList = [activeChallenge]) : (resultList = []);

	const pausedList = newStatusList?.filter(elements => elements?.status === 'paused');
	let paused = [];
	pausedList.forEach((element, index) => {
		const challengePaused = list.find(challenge => challenge.id === element.challengeId);
		paused[index] = challengePaused;
	});

	paused
		? resultList
			? (resultList = [...resultList, ...paused])
			: (resultList = [...paused])
		: (resultList = resultList);

	let notStarted = [...list];
	resultList.forEach(element => {
		notStarted = notStarted.filter(challenges => challenges.id !== element.id);
	});
	finish.forEach(element => {
		notStarted = notStarted.filter(challenges => challenges.id !== element.id);
	});

	notStarted
		? resultList
			? (resultList = [...resultList, ...notStarted])
			: (resultList = [...notStarted])
		: (resultList = resultList);

	finish
		? resultList
			? (resultList = [...resultList, ...finish])
			: (resultList = [...finish])
		: (resultList = resultList);

	return resultList;
}

export function sortList(sortValue, list, statusList = '', activitiesList = '') {
	if (sortValue !== 'none') {
		switch (sortValue) {
			case 'status':
				list = sortByStatus(list, statusList, activitiesList);
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
