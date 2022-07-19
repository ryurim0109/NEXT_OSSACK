import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Next from '../../../public/assets/next.svg';
import Prev from '../../../public/assets/prev.svg';
//import MagicSliderDots from "react-magic-slider-dots";
interface SlickSliderProps {
	children: React.ReactNode | JSX.Element;
}
const SlickSlider = (props: SlickSliderProps) => {
	const { children } = props;

	const settings = {
		infinite: true,
		speed: 500,
		slideToShow: 1,
		slideToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		nextArrow: (
			<Div>
				<Next />
			</Div>
		),
		prevArrow: (
			<DivPre>
				<Prev />
			</DivPre>
		),
		/*     appendDots: (dots:any) => {
      return (
        <MagicSliderDots
          dots={dots}
          numDotsToShow={4}
          dotWidth={30}
          dotContainerClassName="dotContainer"
        />
      );
    }, */
	};
	return (
		<React.Fragment>
			<StyledSlider {...settings}>{children}</StyledSlider>
		</React.Fragment>
	);
};
const StyledSlider = styled(Slider)`
	height: 260px;
	width: 100%;
	position: relative;
	.slick-prev::before,
	.slick-next::before {
		opacity: 0;
		display: none;
	}
	.slick-slide div {
		//슬라이더  컨텐츠
		cursor: pointer;
	}
	.dotContainer {
		top: -35px;
		display: flex;
		width: 180px;
	}
	.dotContainer ul {
		padding: 0;
		display: flex;
		transition: all 0.2s;
		position: relative;
		margin: 0;
	}
	.dotContainer li {
		padding-left: 25px;
	}
	.dotContainer li button {
		font-size: 0px;
	}
	.dotContainer li button::before {
		display: block;
		content: '';
		width: 4px;
		height: 4px;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.5);
		transition: 0.35s;
	}
	.dotContainer li.slick-active button::before {
		background-color: #fff;
		transform: scale(2);
		border-radius: 4px;
	}
	.dotContainer li.small button:before {
		font-size: 8px;
		line-height: 20px;
	}
`;
const Div = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	right: 16px;
	z-index: 99;
	text-align: right;
	line-height: 30px;
`;
const DivPre = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	left: 16px;
	z-index: 99;
	text-align: left;
	line-height: 30px;
`;
export default SlickSlider;
