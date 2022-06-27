import {useStore} from '../../../hooks/useStore';
import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../../utils/date';

import {ActivityContainer} from './Style/container';
import {ActivityWrapper} from './Style/wrapper';

export default function ActivityResult({id_}) {
	const activity = useStore(state => state.activities.find(item => item.id_ === id_));
	const durationData = createDurationString(secondToDurationData(activity.duration));

	return (
		<ActivityContainer>
			<ActivityWrapper>
				<h2>{getDateWeekday(activity.date) ? getDateWeekday(activity.date) : ''}</h2>
				<span>
					{getDateMonth(activity.date) ? getDateMonth(activity.date) : ''}{' '}
					{getDateDay(activity.date) ? getDateDay(activity.date) : ''}
				</span>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>distance</h3>
				<p>{activity.distance ? activity.distance / 1000 + 'km' : ''}</p>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</ActivityWrapper>
		</ActivityContainer>
	);
}
