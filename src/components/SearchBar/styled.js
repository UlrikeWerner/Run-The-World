import styled from 'styled-components';

const SearchContainer = styled.section`
	margin: 0.8rem 0.25rem 0 0;
	form {
		input {
			width: 65%;
			border: 1px solid black;
			border-radius: 25px;
			text-align: center;
		}
		svg {
			position: relative;
			top: 0.25rem;
			left: 1.2rem;
			font-size: 0.8rem;
		}
	}
`;

export {SearchContainer};
