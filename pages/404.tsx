import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../src/elements';

const NotFound = () => {
	return (
		<React.Fragment>
			<Outter>
				<div>
					<Grid width='276px' height='98px' bg='#fff'>
						<img src='/assets/404.png' alt='404이미지' />
					</Grid>
				</div>
				<div>
					<P>Ooops, looks like a ghost</P>
					<SP>The page you are looking for can’t be found.</SP>
				</div>
				<div>
					<Text color='#666' size='12px'>
						죄송합니다, 요청하신 페이지를 찾을 수 없습니다.
					</Text>
				</div>
			</Outter>
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	height: 100vh;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 8px 0;
	}
`;
const P = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.titleSize};
	font-weight: bold;
`;
const SP = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: bold;
`;
export default NotFound;
