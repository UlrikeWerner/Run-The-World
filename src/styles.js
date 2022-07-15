import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root{
		--bgColor: #F6F6F6;
		--lightgreen: #94F284;
		--darkgreen: #68CF57;
		--ldGreenGradient: linear-gradient(272.38deg, #68CF57 4.69%, #94F284 85.74%);
		--dlGreenGradient: linear-gradient(272.38deg, #94F284 4.69%, #68CF57 85.74%);
		--ldGreyGradient: linear-gradient(274.25deg, #D4D5D4 13.83%, #F4F4F4 86.17%);
		--dlGreyGradient: linear-gradient(274.25deg, #F4F4F4 13.83%, #D4D5D4 86.17%);
		--shadow: 5px 5px 4px rgba(0, 0, 0, 0.25), -5px -5px 4px white;
	}

	html {
		font-size: 16px;
	}

	body {
		background-color: var(--bgColor);
		margin: 0;
		font-family: sans-serif;
		font-size: 1rem;
	}
`;
