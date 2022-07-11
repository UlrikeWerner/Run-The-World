import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';
import Modal from '../components/Modal/index';
import ModalBackdrop from '../components/Modal/ModalBackdrop/index';
import NavBar from '../components/NavBar/index';
import SearchBar from '../components/SearchBar';
import {useStore} from '../hooks/useStore';

import {StyledChallengeList} from './style/IndexStyled';
import {StyledModalWrapper} from './style/ModalWrapper';
import {StyledSiteContent} from './style/SiteContent';
import {StyledSiteWrapper} from './style/SiteWrapper';

export default function ChallengesPage() {
	const [searchInput, setSearchInput] = useState('');
	const [filterResult, setFilterResult] = useState([]);

	const modalStatus = useStore(state => state.modalStatus);
	const challengeList = useStore(state => state.challenges);

	function searchChallenges(searchInput) {
		setSearchInput(searchInput);
		if (searchInput !== '') {
			const filterChallengeList = challengeList.filter(challenge => {
				return challenge.title.toLowerCase().includes(searchInput.toLowerCase());
			});
			setFilterResult(filterChallengeList);
		} else {
			setFilterResult(challengeList);
		}
	}

	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<StyledSiteWrapper>
				<SearchBar searchChallenges={searchChallenges} searchInput={searchInput} />
				<ModalBackdrop open={modalStatus} />
				<StyledModalWrapper>
					<Modal open={modalStatus} />
				</StyledModalWrapper>
				<StyledSiteContent>
					{
						<StyledChallengeList>
							{searchInput.length >= 1
								? filterResult.map(item => {
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
								  })
								: challengeList.map(item => {
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
						</StyledChallengeList>
					}
				</StyledSiteContent>
				<NavBar />
			</StyledSiteWrapper>
		</Layout>
	);
}
