import {LinkContainer} from './style/linkStyled';
import {StyledNavBar} from './style/navStyled';

export default function NavBar() {
	return (
		<header>
			<StyledNavBar>
				<LinkContainer to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="link"
						width="3rem"
						height="3rem"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 16 16"
					>
						<g fill="black">
							<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
							<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z" />
						</g>
					</svg>
				</LinkContainer>
				<LinkContainer to="/ActiveChallenge">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="link"
						width="3rem"
						height="3rem"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 48 48"
					>
						<mask id="svgIDa">
							<g fill="black" stroke="#fff" strokeWidth="4">
								<path fill="#fff" d="M36 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643l2.682 1.459L44 17.466M16.849 31.545l-2.97 3.912l-9.875 5.54"
								/>
							</g>
						</mask>
						<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
					</svg>
				</LinkContainer>
			</StyledNavBar>
		</header>
	);
}
