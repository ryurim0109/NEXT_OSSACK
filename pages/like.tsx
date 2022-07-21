import React, { useState } from 'react';
import styled from 'styled-components';
import { Bar, MyHeader } from '../src/components/shared/index';
import { useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import { Grid, Text } from '../src/elements/index';
import { OfficeLike } from '../src/components/containers/like';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';

const Like: NextPage<any> = ({ likeList }) => {
	const tabTitle: string[] = ['오피스', '공유오피스'];
	const [activeTab, setActiveTab] = useState<number | string>(0);
	const onClickTab = (idx: number) => {
		setActiveTab(idx);
	};
	return (
		<React.Fragment>
			<MyHeader>찜리스트</MyHeader>
			<Outter>
				<Tabs
					value={activeTab}
					textColor='primary'
					TabIndicatorProps={{ style: { background: '#3E00FF', top: '0px' } }}>
					{/* tab 메뉴 */}
					{tabTitle.map((title, idx) => {
						return (
							<Grid
								key={idx}
								width='100%'
								height='50px'
								textAlign='center'
								fontWeight='bold'
								fontSize='14px'
								display='flex'
								alignItems='center'
								justifyContent='center'
								_onClick={() => onClickTab(idx)}>
								<Text
									bold
									cursor='pointer'
									color={activeTab === idx ? '#3E00FF' : '#E5E5EC'}>
									찜한{title}
								</Text>
							</Grid>
						);
					})}
				</Tabs>
				<div>
					{/* 해당 콘텐츠 */}
					{activeTab === 0 ? (
						<OfficeLike likeList={likeList} />
					) : (
						<OfficeLike likeList={likeList} />
					)}
				</div>
			</Outter>
			<Bar />
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	padding: 0 16px 68px 16px;
	position: relative;
	top: 80px;
`;

export default Like;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data } = await axios.get<any>('http://localhost:3000/api/likeapi');
		//console.log('data in next mypage', data);
		return {
			props: {
				likeList: data,
			},
		};
	} catch (err) {
		//console.log('err in next mypage', err);
		return { props: { err } };
	}
};
