import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../../elements/index';
import { useRouter } from 'next/router';
import { ReactComponent as Search } from '../../../../public/assets/search.svg';
import { SaleList, HotPlaceList, Office } from './index';
import { Banner } from '../../shared/index';

import { useSelector } from 'react-redux';

function Sale() {
	//const user_info = useSelector((state) => state.user.user);

	const router = useRouter();

	return (
		<React.Fragment>
			<Outter>
				<Grid width='100%' margin='50px 0 0'>
					<Text size='24px' bold>
						<Text color='#3E00FF' bold>
							게스트님
						</Text>{' '}
						어떤 🏢오피스를 <br />
						찾고 계시나요?
					</Text>
				</Grid>
				<Grid width='100%' margin='12px 0 16px 0' position='relative'>
					<Grid width='50px' position='absolute' top='12px' left='10px'>
						<Search fill='none' stroke='#AFB4BE' />
					</Grid>
					<Grid
						width='100%'
						height='48px'
						textIn='40px'
						display='flex'
						bg='#F5F5F5'
						cursor='pointer'
						alignItems='center'
						color='#999'
						borderRadius='4px'
						_onClick={() => {
							router.push('/search');
						}}>
						시, 구, 동으로 검색어를 입력하세요.
					</Grid>
				</Grid>
				{/* 오피스구해요 박스 */}
				<SaleList />
				<Grid
					width='100%'
					margin='16px 0'
					display='flex'
					justifyContent='space-between'>
					<Text bold size='1.250rem' cursor='pointer'>
						이런 오피스는 어때요?📍
					</Text>
				</Grid>
				<Office />
			</Outter>
			<Banner />
			{/* 핫한 오피스 */}
			<Outter>
				<Grid width='100%' display='flex' justifyContent='space-between'>
					<Text bold size='1.250rem' cursor='pointer'>
						지금 가장 HOT한 지역 🔥
					</Text>
				</Grid>
				<HotPlaceList />
			</Outter>
		</React.Fragment>
	);
}
const Outter = styled.div`
	width: 100%;
	position: relative;
	padding: 0 16px 0px 16px;
`;
export default Sale;
