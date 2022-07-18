import React from 'react';
import { Grid, Button, Text } from '../src/elements/index';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { TalkTalk } from '../src/components/shared/index';

const Start = () => {
	const router = useRouter();
	return (
		<React.Fragment>
			<Grid
				width='100%'
				display='flex'
				height='600px'
				flexDirection='column'
				bg='#fff'
				position='relative'>
				<Outter>
					<Grid width='100%' height='412px' margin='24px 0' position='relative'>
						<Grid
							width='240px'
							top='152px'
							right='0'
							height='154px'
							position='absolute'>
							<img src='/assets/logo03.svg' alt='오싹 이미지' />
						</Grid>
					</Grid>

					<Grid width='100%' height='172px' position='relative'>
						<Grid
							width='70px'
							height='34px'
							position='absolute'
							top='-34px'
							right='0'>
							<img src='/assets/ossacke.svg' alt='오싹 캐릭터' />
						</Grid>
						<Grid
							display='flex'
							justifyContent='space-around'
							flexDirection='column'
							alignItems='center'>
							<Button
								width='100%'
								height='48px'
								backgroundColor='#fff'
								borderRadius='8px'
								display='flex'
								border='2px solid #3E00FF'
								alignItems='center'
								justifyContent='center'
								_onClick={() => {
									router.push('/login');
								}}>
								<Text size='14px' color='#3E00FF'>
									{' '}
									로그인
								</Text>
							</Button>
							{/* 회원가입 */}
							<Grid
								width='100%'
								textAlign='center'
								margin='8px 0 0'
								_onClick={() => {
									router.push('/signup');
								}}>
								<P>
									오싹이 처음이신가요?
									<span>회원가입</span>
								</P>
							</Grid>
							{/* 소셜로그인 */}
							<TalkTalk />
							{/* 소셜로그인 */}
						</Grid>
					</Grid>
				</Outter>
			</Grid>
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	padding: 0 16px;
	position: relative;
`;
const P = styled.p`
	color: ${({ theme }) => theme.colors.darkgray1};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.small};

	& span {
		color: ${({ theme }) => theme.colors.main};
		border-bottom: 1px solid ${({ theme }) => theme.colors.main};
		font-weight: bold;
	}
`;

export default Start;
