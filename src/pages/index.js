import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';
import {useStore} from '../hooks/useStore';

import {ChallengeList} from './indexStyled';

export default function ChallengesPage() {
	const challengeList = useStore(state => state.challenges);
	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<ChallengeList>
				{challengeList.map(item => {
					return (
						<Challenge
							key={item.id}
							id={item.id}
							image={item.img}
							title={item.title}
							startingPoint={item.startingPoint}
							endingPoint={item.endingPoint}
							distance={item.distance}
						/>
					);
				})}
			</ChallengeList>
		</Layout>
	);
}
