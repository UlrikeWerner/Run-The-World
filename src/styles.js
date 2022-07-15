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
		--green: #68CF57;
		--darkgreen: #53A646;
		--ldGreenGradient: linear-gradient(272.38deg, #53A646 4.69%, #94F284 85.74%);
		--dlGreenGradient: linear-gradient(272.38deg, #94F284 4.69%, #53A646 85.74%);
		--ldGreyGradient: linear-gradient(274.25deg, #D4D5D4 13.83%, #F4F4F4 86.17%);
		--dlGreyGradient: linear-gradient(274.25deg, #F4F4F4 13.83%, #D4D5D4 86.17%);
		--textGradientHeadline: linear-gradient(0deg, #53A646 0%, #94F284 100%);
		--textGradient: linear-gradient(0deg, #53A646 0%, #68CF57 100%);
		--bgShadow: 5px 5px 4px rgba(0, 0, 0, 0.25), -5px -5px 4px white;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color: var(--bgColor);
		font-family: sans-serif;
		font-size: 1rem;
	}
`;
