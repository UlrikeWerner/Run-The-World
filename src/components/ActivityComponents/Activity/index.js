import {useStore} from '../../../hooks/useStore';
import {
	secondToDurationData,
	createDurationString,
	getDateWeekday,
	getDateDay,
	getDateMonth,
} from '../../../utils/date';
import Button from '../../Button/index';
import {StyledButtonSVG} from '../../Button/Styled/ButtonSVG';

import {StyledActivityDivider} from './Style/ActivityDivider';
import {StyledActivityContainer} from './Style/container';
import {StyledHeadlineSubtitle} from './Style/HeadlineSubtitle';
import {StyledHeadlineTitle} from './Style/HeadlineTitle';
import {StyledTextContaint} from './Style/TextContaint';

export default function ActivityResult({challengeId, activityId, date, duration, distance}) {
	const setModal = useStore(state => state.setModal);
	const setModalStatus = useStore(state => state.setModalStatus);

	const durationData = createDurationString(secondToDurationData(duration));

	return (
		<>
			<StyledActivityContainer>
				<div>
					<StyledHeadlineTitle>
						{getDateWeekday(date) ? getDateWeekday(date) : ''}
					</StyledHeadlineTitle>
					<span>
						{getDateMonth(date) ? getDateMonth(date) : ''}{' '}
						{getDateDay(date) ? getDateDay(date) : ''}
					</span>
				</div>
				<div>
					<StyledHeadlineSubtitle>distance</StyledHeadlineSubtitle>
					<StyledTextContaint>
						{distance ? distance / 1000 + 'km' : ''}
					</StyledTextContaint>
				</div>
				<div>
					<StyledHeadlineSubtitle>duration</StyledHeadlineSubtitle>
					<StyledTextContaint>{durationData ? durationData : ''}</StyledTextContaint>
				</div>
				<div>
					<Button
						variant="small"
						role="edit"
						onClick={() => {
							setModal('edit', activityId, challengeId);
							setModalStatus(true);
						}}
					>
						<StyledButtonSVG
							icon="entypo:edit"
							width="1rem"
							height="1rem"
							color="var(--darkgreen)"
							alt="edit"
						/>
					</Button>
					<Button
						variant="small"
						role="delete"
						onClick={() => {
							setModal('delete', activityId, '');
							setModalStatus(true);
						}}
					>
						<StyledButtonSVG
							icon="fluent:delete-12-filled"
							width="1rem"
							height="1rem"
							color="var(--darkgreen)"
							alt="edit"
						/>
					</Button>
				</div>
			</StyledActivityContainer>
			<StyledActivityDivider />
		</>
	);
}
