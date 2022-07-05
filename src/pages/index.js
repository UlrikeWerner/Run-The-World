import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar/index';
import {useStore} from '../hooks/useStore';

import {ChallengeList} from './style/IndexStyled';
import {SiteContent} from './style/SiteContent';
import {SiteWrapper} from './style/SiteWrapper';

export default function ChallengesPage() {
	const challengeList = useStore(state => state.challenges);
	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<SiteWrapper>
				<SiteContent>
					{
						<ChallengeList>
							{challengeList.map(item => {
								return (
									<Challenge
										key={item.id}
										challengeId={item.id}
										image={item.img}
										title={item.title}
										startingPoint={item.startingPoint}
										endingPoint={item.endingPoint}
										distance={item.distance}
									/>
								);
							})}
						</ChallengeList>
					}
				</SiteContent>
				<NavBar />
			</SiteWrapper>
		</Layout>
	);
}
