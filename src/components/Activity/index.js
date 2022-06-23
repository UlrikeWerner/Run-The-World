import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../utils/date';

import {ActivityContainer} from './Style/container';
import {ActivityWrapper} from './Style/wrapper';

export default function ActivityResult({date, distance, duration}) {
	const durationData = createDurationString(secondToDurationData(duration));
	return (
		<ActivityContainer>
			<ActivityWrapper>
				<h2>{getDateWeekday(date) ? getDateWeekday(date) : ''}</h2>
				<span>
					{getDateMonth(date) ? getDateMonth(date) : ''}{' '}
					{getDateDay(date) ? getDateDay(date) : ''}
				</span>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>distance</h3>
				<p>{distance ? distance / 1000 + 'km' : ''}</p>
			</ActivityWrapper>
			<ActivityWrapper>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</ActivityWrapper>
		</ActivityContainer>
	);
}
