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

import {StyledActivityContainer} from './Style/container';
import {StyledHeadlineTitle} from './Style/HeadlineTitle';
import {StyledActivityWrapper} from './Style/wrapper';

export default function ActivityResult({challengeId, activityId, date, duration, distance}) {
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);

	const durationData = createDurationString(secondToDurationData(duration));

	return (
		<StyledActivityContainer>
			<StyledActivityWrapper>
				<StyledHeadlineTitle>
					{getDateWeekday(date) ? getDateWeekday(date) : ''}
				</StyledHeadlineTitle>
				<span>
					{getDateMonth(date) ? getDateMonth(date) : ''}{' '}
					{getDateDay(date) ? getDateDay(date) : ''}
				</span>
			</StyledActivityWrapper>
			<StyledActivityWrapper>
				<h3>distance</h3>
				<p>{distance ? distance / 1000 + 'km' : ''}</p>
			</StyledActivityWrapper>
			<StyledActivityWrapper>
				<h3>duration</h3>
				<p>{durationData ? durationData : ''}</p>
			</StyledActivityWrapper>
			<StyledActivityWrapper>
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
						setModal('delete', activityId, '');
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
			</StyledActivityWrapper>
		</StyledActivityContainer>
	);
}
