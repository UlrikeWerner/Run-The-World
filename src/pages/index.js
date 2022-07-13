import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Layout from '../components/Layout';
import Modal from '../components/Modal/index';
import ModalBackdrop from '../components/Modal/ModalBackdrop/index';
import NavBar from '../components/NavBar/index';
import SearchBar from '../components/SearchBar';
import SortBar from '../components/SortBar';
import {useStore} from '../hooks/useStore';

import {StyledChallengeList} from './style/IndexStyled';
import {StyledModalWrapper} from './style/ModalWrapper';
import {StyledSiteContent} from './style/SiteContent';
import {StyledSiteWrapper} from './style/SiteWrapper';

export default function ChallengesPage() {
	const [searchInput, setSearchInput] = useState('');
	const [sortInput, setSortInput] = useState('');
	const [filterResult, setFilterResult] = useState([]);

	const modalStatus = useStore(state => state.modalStatus);
	const challengeList = useStore(state => state.challenges);

	/*function searchChallenges(searchInput) {
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

	function sortChallenges(sortInput) {
		console.log(sortInput, 'sortInput');
		let challenges = challengeList;
		if (filterResult.length > 0) {
			challenges = filterResult;
		}
		if (sortInput !== 'none') {
			switch (sortInput) {
				case 'alphabetically':
					challenges.sort(function (a, b) {
						if (a.title < b.title) {
							return -1;
						}
						if (a.title > b.title) {
							return 1;
						}
						return 0;
					});
					break;
				case 'ascending':
					challenges.sort(function (a, b) {
						if (Number(a.distance) < Number(b.distance)) {
							return -1;
						}
						if (Number(a.distance) > Number(b.distance)) {
							return 1;
						}
						return 0;
					});
					break;
				case 'descending':
					challenges.sort(function (a, b) {
						if (Number(a.distance) < Number(b.distance)) {
							return 1;
						}
						if (Number(a.distance) > Number(b.distance)) {
							return -1;
						}
						return 0;
					});
					break;
				default:
					break;
			}
			setFilterResult(challenges);
		} else {
			setFilterResult(challenges);
		}
	}*/

	function filterChallenges(type, value) {
		if (type === 'search') {
			setSearchInput(value);
		} else {
			setSortInput(value);
		}
	}

	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<StyledSiteWrapper>
				<SearchBar searchChallenges={filterChallenges} searchInput={searchInput} />
				<SortBar sortChallenges={filterChallenges} />
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
