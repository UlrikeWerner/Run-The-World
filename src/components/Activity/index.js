import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../utils/date';

import {ActivityContainer, DateContainer, DistanceContainer, DurationContainer} from './styled';

export default function ActivityResult({date, distance, duration}) {
	const durationData = createDurationString(secondToDurationData(duration));
	return (
		<ActivityContainer>
			<DateContainer>
				<h2>{getDateWeekday(date) ? getDateWeekday(date) : ''}</h2>
				<span>
					{getDateMonth(date) ? getDateMonth(date) : ''}{' '}
					{getDateDay(date) ? getDateDay(date) : ''}
				</span>
			</DateContainer>
			<DistanceContainer>
				<h3>distance</h3>
				<p>{distance ? distance / 1000 + 'km' : ''}</p>
			</DistanceContainer>
			<DurationContainer>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</DurationContainer>
		</ActivityContainer>
	);
}
