import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Challenge from '../components/Challenge/index';
import Header from '../components/Header/index';
import Layout from '../components/Layout';
import Modal from '../components/Modal/index';
import ModalBackdrop from '../components/Modal/ModalBackdrop/index';
import NavBar from '../components/NavBar/index';
import SearchBar from '../components/SearchBar';
import SortBar from '../components/SortBar';
import {useStore} from '../hooks/useStore';
import {sortAndFilter} from '../utils/searchAndSort';

import {StyledSearchAndSortWrapper} from './style/Home/SearchAndSortWrapper';
import {StyledChallengeList} from './style/Home/StyledChallengeList';
import {StyledModalWrapper} from './style/SiteWrapper/ModalWrapper';
import {StyledSiteContent} from './style/SiteWrapper/SiteContent';
import {StyledSiteWrapper} from './style/SiteWrapper/SiteWrapper';

export default function ChallengesPage() {
	const modalStatus = useStore(state => state.modalStatus);
	const challengeList = useStore(state => state.challenges);
	const activityList = useStore(state => state.activities);
	const statusList = useStore(state => state.challengeStatus);

	const [searchInput, setSearchInput] = useState('');
	const [sortInput, setSortInput] = useState('alphabetically');
	const [filterResult, setFilterResult] = useState(
		sortAndFilter('sort', sortInput, '', sortInput, challengeList, statusList, activityList)
	);

	function sortAndFilterChallenges(type, value) {
		if (type === 'search') {
			setSearchInput(value);
		} else {
			setSortInput(value);
		}

		const resultData = sortAndFilter(
			type,
			value,
			searchInput,
			sortInput,
			challengeList,
			statusList,
			activityList
		);
		setFilterResult(resultData);
	}

	return (
		<Layout>
			<Helmet>
				<title key="title">Challenges</title>
				<meta key="description" name="description" content="Challenges" />
			</Helmet>
			<StyledSiteWrapper>
				<Header />
				<StyledSearchAndSortWrapper>
					<SearchBar
						searchChallenges={sortAndFilterChallenges}
						searchInput={searchInput}
					/>
					<SortBar sortChallenges={sortAndFilterChallenges} />
				</StyledSearchAndSortWrapper>
				<ModalBackdrop open={modalStatus} />
				<StyledModalWrapper>
					<Modal open={modalStatus} />
				</StyledModalWrapper>
				<StyledSiteContent>
					{
						<StyledChallengeList>
							{filterResult.map(item => {
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
