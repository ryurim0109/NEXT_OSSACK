import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Button, Text, Image } from '../../../elements/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store/index';
import { SlickSlider } from '../../shared/index';
import { useRouter } from 'next/router';

const OfficeLike = (likeList: any) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const OfficeLikeList = likeList.likeList;

	if (OfficeLikeList?.length === 0) {
		return (
			<React.Fragment>
				<Grid
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'>
					<Grid display='flex' justifyContent='center' padding='91px 0 13px 0'>
						<Image src='/assets/ossack02.jpg' size='117' />
					</Grid>
					<Text size='14px' color='#808080'>
						찜한 오피스가 없네요 !
					</Text>
				</Grid>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				{OfficeLikeList &&
					OfficeLikeList.map((office: any, idx: number) => {
						return (
							<Grid key={idx}>
								<Grid
									width='100%'
									margin='16px 0'
									height='235px'
									borderRadius='8px'
									position='relative'
									overflow='hidden'>
									<Grid>
										<SlickSlider>
											{office.images &&
												office.images.map((image: string, idx: number) => {
													return (
														<Grid
															cursor='pointer'
															key={idx}
															_onClick={() => {
																router.push(
																	`/detail/${office.estateid}?query=${office.address}`,
																);
															}}>
															<Image
																padding='235px'
																bottom='0'
																src={image}
																shape='rectangle'
																position='absolute'
																radius='8px'
															/>
														</Grid>
													);
												})}
										</SlickSlider>
										<Grid
											width='33px'
											height='22px'
											position='absolute'
											right='8px'
											bottom='8px'></Grid>
										<Button
											position='absolute'
											right='8px'
											top='8px'
											color='#FF679E'
											fill_like
											// _onClick={() =>
											// 	appDispatch(unlikeOfficeDB(office.estateid))
											// }
										/>
									</Grid>
								</Grid>
								<Grid
									display='flex'
									flexDirection='column'
									justifyContent='center'
									width='100%'
									height='40px'
									_onClick={() => {
										router.push(
											`/detail/${office.estateid}?query=${office.address}`,
										);
									}}>
									<Text bold size='14px' cursor='pointer'>
										{office.type ? office.type : '트리플 역세권 사무실'}
									</Text>
									<Text bold size='14px' cursor='pointer'>
										<Span>월세</Span> {office.rent_fee ? office.rent_fee : 200}
										만<Span>보증금</Span>
										{office.deposit ? office.deposit : '3,000만'}만
									</Text>
								</Grid>
							</Grid>
						);
					})}
			</React.Fragment>
		);
	}
};

const Span = styled.span`
	font-size: 10px;
	font-weight: normal;
`;

export default OfficeLike;
