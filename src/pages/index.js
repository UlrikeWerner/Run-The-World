import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';
import Modal from '../components/Modal/index';
import ModalBackdrop from '../components/Modal/ModalBackdrop/index';
import NavBar from '../components/NavBar/index';
import {useStore} from '../hooks/useStore';

import {ChallengeList} from './style/IndexStyled';
import {ModalWrapper} from './style/ModalWrapper';
import {SiteContent} from './style/SiteContent';
import {SiteWrapper} from './style/SiteWrapper';

export default function ChallengesPage() {
	const [searchInput, setSearchInput] = useState('');
	const modalStatus = useStore(state => state.modalStatus);
	const challengeList = useStore(state => state.challenges);
	let filterChallengeList = [...challengeList];

	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<SiteWrapper>
				<form>
					<input
						type="text"
						id="searchBar"
						value={searchInput}
						placeholder="search.."
						required
						onChange={event => {
							setSearchInput(event.target.value);
							//console.log(event.target.value);
							filterChallengeList = challengeList.filter(challenge =>
								challenge.title.includes(searchInput)
							);
						}}
					/>
				</form>
				{console.log(filterChallengeList)}
				<ModalBackdrop open={modalStatus} />
				<ModalWrapper>
					<Modal open={modalStatus} />
				</ModalWrapper>
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
