import styled from 'styled-components';

import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../utils/date';

export default function ActivityResult({activity}) {
	const durationData = secondToDurationData(activity.duration);
	return (
		<ActivityContainer>
			<section>
				<h2>{getDateWeekday(activity.date)}</h2>
				<p>{getDateDay(activity.date)}.</p>
				<p>{getDateMonth(activity.date)}</p>
			</section>
			<section>
				<p>distance</p>
				<p>{activity.distance / 1000}km</p>
			</section>
			<section>
				<p>duration</p>
				<p>{createDurationString(durationData)}</p>
			</section>
		</ActivityContainer>
	);
}

const ActivityContainer = styled.section`
	display: flex;
	border: 1px solid black;
	margin: 0.3rem;
`;
