import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text, Button } from '../../src/elements/index';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Heart from '../../public/assets/favourite.svg';
import { Bar } from '../../src/components/shared/index';

const DetailOffice = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<React.Fragment>
			<Header>
				<Grid width='28px' display='flex' alignItems='center'>
					<Button
						is_back
						_onClick={() => {
							router.back();
						}}
					/>
				</Grid>
				<Grid
					width='248px'
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<Text size='18px' bold cursor='pointer'>
						매물번호 {id}
					</Text>
				</Grid>
				<Grid
					width='28px'
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<Button
						backgroundColor='none'
						// _onClick={() => {
						//   appDispatch(oneClickLikeDB(getOneOffice.estateId));
						// }}
					>
						<Heart stroke='#111' fill='none' />
					</Button>
				</Grid>
			</Header>
			<Bar />
		</React.Fragment>
	);
	// }
};
const Header = styled.div`
	width: 100%;
	height: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
`;
const Outter = styled.div`
	width: 100%;
	position: relative;
	top: 56px;
	padding-bottom: 60px;
`;

const Sp = styled.p`
	width: 60%;
	color: #000;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Bp = styled.p`
	font-weight: bold;
	width: 60%;
	color: #000;
	font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const Div = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
`;

export default DetailOffice;
