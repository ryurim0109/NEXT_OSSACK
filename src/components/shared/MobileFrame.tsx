import React from 'react';
import styled from 'styled-components';

interface MobileFrameProps {
	children: React.ReactNode | JSX.Element;
	className: string;
}
const MobileFrame = ({ children, className }: MobileFrameProps) => {
	return (
		<React.Fragment>
			<WebFrame>
				<Mobile>
					<Container id='scroll'>
						<>{children}</>
					</Container>
				</Mobile>
			</WebFrame>
		</React.Fragment>
	);
};
const WebFrame = styled.div`
	position: relative;
	top: 50%;
	left: 60%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-height: 100%;
	height: 100vh;
	z-index: 999;
	overflow: hidden;

	@media screen and (min-width: 2000px) {
		width: 100%;
		top: 50%;
		transform: translate(50%, -50%);
	}
	@media screen and (min-width: 1700px) {
		top: 50%;
		transform: translate(30%, -50%);
	}
	@media screen and (min-width: 1120px) {
		top: 50%;
		transform: translate(-5%, -50%);
	}

	@media screen and (min-width: 900px) {
		top: 50%;
		transform: translate(-15%, -50%);
	}

	@media screen and (min-width: 500px) {
		top: 50%;
		transform: translate(-40%, -50%);
		max-width: 375px;
	}
	@media screen and (max-width: 500px) {
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
const Mobile = styled.div`
	position: absolute;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	vertical-align: middle;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 375px;
	height: 100%;
	margin: 0 auto;
	background-color: #fff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
	z-index: 999;
	@media screen and (max-width: 500px) {
		position: inherit;
		width: 100%;
		height: 100vh;
		min-width: 340px;
	}
`;
const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	z-index: 999;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export default MobileFrame;
