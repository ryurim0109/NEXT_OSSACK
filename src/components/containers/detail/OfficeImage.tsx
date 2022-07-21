import React from 'react';
import { Grid, Image } from '../../../elements/index';
import { SlickSlider } from '../../shared/index';

const OfficeImage = (oneProduct: any) => {
	const oneImg = oneProduct.oneProduct.oneProduct.images;
	return (
		<React.Fragment>
			<Grid
				width='100%'
				margin='0 0 16px 0'
				height='251px'
				bg='#999'
				position='relative'
				overflow='hidden'>
				<Grid>
					<SlickSlider>
						{oneImg.map((image: any, idx: number) => {
							return (
								<Image
									key={idx}
									padding='251px'
									bottom='0'
									src={image}
									shape='rectangle'
									position='absolute'
								/>
							);
						})}
					</SlickSlider>
					<Grid
						width='33px'
						height='22px'
						position='absolute'
						right='8px'
						bottom='8px'></Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default OfficeImage;
