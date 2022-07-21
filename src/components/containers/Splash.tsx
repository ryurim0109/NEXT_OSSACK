import React, { useEffect } from 'react';
import { Grid } from '../../elements/index';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Splash = () => {
	const router = useRouter();
	let timeout: NodeJS.Timeout;
	useEffect(() => {
		timeout = setTimeout(() => {
			router.push('/start');
		}, 2000);
	}, []);

	useEffect(() => {
		return () => {
			global.clearTimeout(timeout);
		};
	});
	return (
		<React.Fragment>
			<Grid
				width='100%'
				padding='38px 0'
				display='flex'
				flexDirection='column'
				bg='#3E00FF'>
				<Grid width='100%' margin='118px 0' height='237px' position='relative'>
					<img src='/assets/logo02.png' alt='오싹 이미지' />
					<Grid
						width='217px'
						height='14px'
						position='absolute'
						top='37px'
						right='10%'>
						<P>오피스 구할 땐 오싹으로 싹가능</P>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
const P = styled.p`
	font-weight: 900;
	color: ${({ theme }) => theme.colors.buttonTitle};
`;
export default Splash;
