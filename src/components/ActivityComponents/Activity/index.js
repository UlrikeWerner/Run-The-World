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
	const data = useStore(state => state.activities.find(item => item.id_ === id_));
	const durationData = createDurationString(secondToDurationData(data.duration));

	return (
		<ActivityContainer>
			<ActivityWrapper>
				<h2>{getDateWeekday(data.date) ? getDateWeekday(data.date) : ''}</h2>
				<span>
					{getDateMonth(data.date) ? getDateMonth(data.date) : ''}{' '}
					{getDateDay(data.date) ? getDateDay(data.date) : ''}
				</span>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>distance</h3>
				<p>{data.distance ? data.distance / 1000 + 'km' : ''}</p>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</ActivityWrapper>
		</ActivityContainer>
	);
}
