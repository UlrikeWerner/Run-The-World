import {Icon} from '@iconify/react';

import {useStore} from '../../../hooks/useStore';
import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../../utils/date';
import Button from '../../Button/index';

import {ActivityContainer} from './Style/container';
import {ActivityWrapper} from './Style/wrapper';

export default function ActivityResult({challengeId, activityId, date, duration, distance}) {
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);

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
			<ActivityWrapper>
				<Button
					variant="small"
					role="edit"
					onClick={() => {
						setModal('edit', activityId, challengeId);
						setModalStatus(true);
					}}
				>
					<Icon icon="entypo:edit" width="1rem" height="1rem" color="black" alt="edit" />
				</Button>
				<Button
					variant="small"
					role="delete"
					onClick={() => {
						setModal('delete', activityId, challengeId);
						setModalStatus(true);
					}}
				>
					<Icon
						icon="fluent:delete-12-filled"
						width="1rem"
						height="1rem"
						color="black"
						alt="edit"
					/>
				</Button>
			</ActivityWrapper>
		</ActivityContainer>
	);
}
