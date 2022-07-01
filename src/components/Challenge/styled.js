import styled from 'styled-components';

const ChallengeContainer = styled.section`
	max-width: 10rem;
	max-height: 20rem;
	overflow: hidden;
	border: 1px solid black;
	border-radius: 15px;

	img {
		max-width: 10rem;
		max-height: 10rem;
	}

	h2,
	p {
		margin: 0 0.25rem;
	}

	h2 {
		font-size: 1.25rem;
	}

	p {
		font-size: 0.9rem;
	}

	a {
		display: inline-block;
		width: 3rem;
		margin: 0.5rem 0.25rem;
		border: 1px solid black;
		border-radius: 15px;
		color: black;
		font-size: 0.9rem;
		text-align: center;
		text-decoration: none;

		&:hover {
			background: lightgreen;
		}

		&:active {
			background: #bad;
		}
	}
`;

export {ChallengeContainer};