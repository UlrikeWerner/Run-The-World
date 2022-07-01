import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';

import {ChallengeList} from './indexStyled';

export default function ChallengesPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<ChallengeList>
				<Challenge
					image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
					title="Route 66"
					startingPoint="Chicago"
					endingPoint="Santa Monica"
					distance="3945"
				/>
				<Challenge
					image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
					title="Route 66"
					startingPoint="Chicago"
					endingPoint="Santa Monica"
					distance="3945"
				/>
				<Challenge
					image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
					title="Route 66"
					startingPoint="Chicago"
					endingPoint="Santa Monica"
					distance="3945"
				/>
				<Challenge
					image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
					title="Route 66"
					startingPoint="Chicago"
					endingPoint="Santa Monica"
					distance="3945"
				/>
				<Challenge
					image="https://images.unsplash.com/photo-1589830258006-f91b5cb1eab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80"
					title="Route 66"
					startingPoint="Chicago"
					endingPoint="Santa Monica"
					distance="3945"
				/>
			</ChallengeList>
		</Layout>
	);
}
