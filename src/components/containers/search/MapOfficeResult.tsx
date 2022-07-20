import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Image, Button, Text } from '../../../elements/index';
import { SlickSlider } from '../../shared/index';
import ossack from '../../assets/ossack02.jpg';
import { useRouter } from 'next/router';
import { RootState } from '../../../../store/index';

const MapOfficeResult = (test1: any) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const product = test1.test1.test1.products;
	//console.log(test1.test1.test1.products);
	return (
		<React.Fragment>
			{product.map((o: any, idx: number) => {
				return (
					<Grid key={idx}>
						<Grid
							width='100%'
							margin='16px 0'
							height='235px'
							bg='#999'
							borderRadius='8px'
							position='relative'
							overflow='hidden'>
							<SlickSlider>
								{o?.images?.map((image: string, idx: number) => {
									return (
										<Div
											key={idx}
											onClick={() => {
												router.push(`/detail/${o.id}`);
											}}>
											<Image
												padding='235px'
												src={image}
												shape='rectangle'
												radius='8px'
												position='absolute'
												bottom='0'
											/>
										</Div>
									);
								})}
							</SlickSlider>
							<Grid
								width='33px'
								height='22px'
								position='absolute'
								right='8px'
								bottom='8px'>
								{/* <ImageCnt>{o?.images.length}</ImageCnt> */}
							</Grid>
							{o.mylike ? (
								<Button
									position='absolute'
									right='8px'
									top='8px'
									fill_like
									color='#FF0000'
									// _onClick={() => appDispatch(deleteLikeDB(o.estateid))}
								/>
							) : (
								<Button
									position='absolute'
									right='8px'
									top='8px'
									is_like
									color='#fff'
									// _onClick={() => appDispatch(clickLikeDB(o.estateid))}
								/>
							)}
						</Grid>
						<Grid
							_onClick={() => {
								router.push(`/detail/${o.id}`);
							}}
							cursor='pointer'
							width='100%'
							height='76px'
							display='flex'
							flexDirection='column'
							justifyContent='space-between'>
							<Grid display='flex' height='12px' alignItems='center'>
								<Text size='10px' bold color='#666'>
									{o?.brand} ∙ {o?.category}
								</Text>
							</Grid>
							<Grid display='flex' height='17px' alignItems='center'>
								{' '}
								<Text size='14px'>{o?.description}</Text>
							</Grid>

							<Grid display='flex' height='12px' alignItems='center'>
								<Text size='10px'>{o.discountPercentage}</Text>
							</Grid>
							<Grid display='flex' height='17px' alignItems='center'>
								<Text size='14px' bold>
									<Span>{o.price}</Span>
								</Text>
								<Text size='14px' bold>
									<Span>{o?.rating}</Span>
								</Text>
							</Grid>
						</Grid>
					</Grid>
				);
			})}
			{/* {!is_loaded && <LoadSpinner />} */}
		</React.Fragment>
	);
};
const Div = styled.div`
	cursor: pointer;
`;

const Span = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: normal;
	margin-left: 2px;
`;
export default MapOfficeResult;
