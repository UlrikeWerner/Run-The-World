import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import {sumDuration, sumDistance, calculatePercent} from '../../utils/progress';

import {StyledDoughnutContainer} from './Styled/StyledDoughnutContainer';
import {StyledProgressContainer} from './Styled/StyledProgressContainer';
import {StyledProgressUl} from './Styled/StyledProgressUl';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressBox({distance, activities}) {
	const completedKM = sumDistance(activities, distance);
	const completed = calculatePercent(distance, completedKM);
	const openDistance = distance - completedKM;
	const totalDuration = sumDuration(activities);
	//labels: ['completed', 'still to go'],

	const data = {
		datasets: [
			{
				data: [completedKM, openDistance],
				backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)'],
				borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
				borderWidth: 1,
			},
		],
	};

	return (
		<StyledProgressContainer>
			<StyledDoughnutContainer>
				<Doughnut data={data} />
			</StyledDoughnutContainer>
			<p>{completed}%</p>
			<StyledProgressUl>
				<li>distance: {distance}km</li>
				<li>completed: {completedKM}km</li>
				<li>total duration:</li>
				<li>{totalDuration}</li>
			</StyledProgressUl>
		</StyledProgressContainer>
	);
}
