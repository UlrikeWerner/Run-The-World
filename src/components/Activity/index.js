import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../utils/date';

import {
	ActivityContainer,
	DateContainer,
	DayContainer,
	DistanceContainer,
	DurationContainer,
} from './styled';

export default function ActivityResult({activity}) {
	const durationData = createDurationString(secondToDurationData(activity.duration));
	return (
		<ActivityContainer>
			<DateContainer>
				<h2>{getDateWeekday(activity.date) ? getDateWeekday(activity.date) : ''}</h2>
				<DayContainer>
					<p>{getDateDay(activity.date) ? getDateDay(activity.date) : ''}. </p>
					<p>{getDateMonth(activity.date) ? getDateMonth(activity.date) : ''}</p>
				</DayContainer>
			</DateContainer>
			<DistanceContainer>
				<h3>distance</h3>
				<p>{activity.distance ? activity.distance / 1000 + 'km' : ''}</p>
			</DistanceContainer>
			<DurationContainer>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</DurationContainer>
		</ActivityContainer>
	);
}
