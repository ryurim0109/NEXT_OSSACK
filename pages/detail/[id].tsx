import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text, Button } from '../../src/elements/index';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Heart from '../../public/assets/favourite.svg';
import { Bar } from '../../src/components/shared/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { testinstance } from '../../src/shared/api';
import {
	OfficeImage,
	OfficeBottomInfo,
} from '../../src/components/containers/detail';

const DetailOffice = (oneProduct: any) => {
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
			<Div>
				<Outter>
					<Grid bg='#F5F5F5' minHeight='1540px' paddingBottom='90px'>
						<Grid height='400px' bg='#fff'>
							<OfficeImage oneProduct={oneProduct} />
							<OfficeBottomInfo />
						</Grid>
						{/* 상세정보 */}
						{/* <OfficeBasicInfo /> */}
						{/* 중개사 코멘트 */}
						{/* <OfficeCmntInfo /> */}
						{/* 위치 */}
						<Grid
							bottom='0'
							//padding="0 16px"
							display='flex'
							flexDirection='column'
							justifyContent='center'
							width='100%'
							height='340px'
							bg='#fff'>
							<Grid
								display='flex'
								flexDirection='column'
								justifyContent='center'
								padding='16px 0'
								bg='#fff'
								minHeight='330px'>
								<Grid margin='0 0 10px' height='55px'>
									<Bp style={{ padding: '3px 16px' }}>위치</Bp>
									<Sp style={{ padding: '0 16px' }}> {oneProduct?.stock} </Sp>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Outter>
			</Div>
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
`;

export default DetailOffice;

export const getStaticPaths: GetStaticPaths = async (context) => {
	const res = await testinstance.get('/products');
	const products = await res.data;
	const paths = products.products.map((p: any) => ({
		params: { id: p.id.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const { id } = context.params as any;
		const res = await testinstance.get(`/products/${id}`);
		const data = res.data;
		return { props: { oneProduct: data } };
	} catch (e) {
		return { props: { e } };
	}
};
