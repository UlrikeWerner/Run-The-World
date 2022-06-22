import styled from 'styled-components';

const ActivityContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border: 1px solid black;
	border-radius: 15px;
	margin: 0.3rem;
`;

const DateContainer = styled.section`
	justify-self: center;
	margin: 0.25rem 0;
	h2 {
		margin: 0;
	}
`;

const DayContainer = styled.div`
	display: flex;
	p {
		margin: 0;
	}
`;

const DistanceContainer = styled.section`
	margin: 0.75rem 0 0.5rem;

	h3 {
		margin: 0;
		font-size: 0.85rem;
	}

	p {
		margin: 0.25rem 0 0;
	}
`;

const DurationContainer = styled.section`
	margin: 0.75rem 0 0.5rem;

	h3 {
		margin: 0;
		font-size: 0.85rem;
	}

	p {
		margin: 0.25rem 0 0;
	}
`;

export {ActivityContainer, DateContainer, DayContainer, DistanceContainer, DurationContainer};
