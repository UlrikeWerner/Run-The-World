import styled from 'styled-components';

import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../utils/date';

export default function ActivityResult({activity}) {
	const durationData = createDurationString(secondToDurationData(activity.duration));
	return (
		<ActivityContainer>
			<section>
				<h2>{getDateWeekday(activity.date) ? getDateWeekday(activity.date) : ''}</h2>
				<p>{getDateDay(activity.date) ? getDateDay(activity.date) : ''}.</p>
				<p>{getDateMonth(activity.date) ? getDateMonth(activity.date) : ''}</p>
			</section>
			<section>
				<p>distance</p>
				<p>{activity.distance ? activity.distance / 1000 + 'km' : ''}</p>
			</section>
			<section>
				<p>duration</p>
				<p>{durationData ? durationData : ''}</p>
			</section>
		</ActivityContainer>
	);
}

const ActivityContainer = styled.section`
	display: flex;
	border: 1px solid black;
	margin: 0.3rem;
`;
