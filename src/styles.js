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
		--palegreen: #e3ffde;
		--lightgrey: #F4F4F4;
		--darkgrey: #D4D5D4;
		--blackTransparent: rgba(0, 0, 0, 0.25); 
		--greenGradientDiagonal: linear-gradient(274.25deg, var(--lightgreen) 13.83%, var(--darkgreen) 86.17%);
		--greenReverseGradient: linear-gradient(0deg, var(--lightgreen) 0%, var(--darkgreen) 100%);
		--dlGreyGradient: linear-gradient(274.25deg, var(--lightgrey) 13.83%, var(--darkgrey) 86.17%);
		--textGradient: linear-gradient(0deg, var(--darkgreen) 0%, var(--green) 100%);
		--bgShadow: 5px 5px 4px var(--blackTransparent), -5px -5px 4px white;
		--activeNavLinkShadow: 3px 3px 4px var(--blackTransparent), -3px -3px 4px white;
		--buttonBorderColor: white var(--blackTransparent) var(--blackTransparent) white; 
		--buttonBorderColorInverted:  var(--blackTransparent) white white var(--blackTransparent); 
	}
	
	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-family: sans-serif;
		font-size: 1rem;
	}
`;
