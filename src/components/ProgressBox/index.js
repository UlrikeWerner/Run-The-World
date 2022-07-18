import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import {sumDuration, sumDistance, calculatePercent} from '../../utils/progress';

import {StyledDoughnutContainer} from './Styled/StyledDoughnutContainer';
import {StyledPercent} from './Styled/StyledPercent';
import {StyledProgressCaption} from './Styled/StyledProgressCaption';
import {StyledProgressContainer} from './Styled/StyledProgressContainer';
import {StyledProgressUl} from './Styled/StyledProgressUl';
import {StyledProgressValue} from './Styled/StyledProgressValue';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressBox({distance, activities}) {
	const completedKM = sumDistance(activities, distance);
	const completed = calculatePercent(distance, completedKM);
	const openDistance = distance - completedKM;
	const totalDuration = sumDuration(activities);

	const data = {
		datasets: [
			{
				data: [completedKM, openDistance],
				backgroundColor: ['rgba(83, 166, 70, 0.2)', 'rgba(255, 159, 64, 0.2)'],
				borderColor: ['rgba(83, 166, 70, 1)', 'rgba(255, 159, 64, 1)'],
				borderWidth: 1,
			},
		],
	};

	return (
		<StyledProgressContainer>
			<StyledDoughnutContainer>
				<Doughnut data={data} />
				<StyledPercent>{completed}%</StyledPercent>
			</StyledDoughnutContainer>
			<StyledProgressUl>
				<StyledProgressCaption>distance</StyledProgressCaption>
				<StyledProgressValue>{distance}km</StyledProgressValue>
				<StyledProgressCaption>completed</StyledProgressCaption>
				<StyledProgressValue>{completedKM}km</StyledProgressValue>
				<StyledProgressCaption>total duration</StyledProgressCaption>
				<StyledProgressValue>{totalDuration}</StyledProgressValue>
			</StyledProgressUl>
		</StyledProgressContainer>
	);
}
