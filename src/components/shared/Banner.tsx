import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Text } from "../../elements/index";
import { useRouter } from "next/router";
import styled from "styled-components";

const Banner = () => {
  const router = useRouter();
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };
  return (
    <React.Fragment>
      <StyledSlider {...settings}>
        {/* 배너1번 */}
        <Grid
          height="151px"
          display="flex"
          alignItems="center"
          position="relative"
          cursor="pointer"
          _onClick={() => {
            router.push("/event");
          }}
        >
          <BannerBlue>
            <Div>
              <SP>설문조사에 참여하시면,</SP>
              <P>
                <Text color="#2759F5" bold>
                  추첨
                </Text>
                을 통해
                <br />
                <Text color="#2759F5" bold>
                  스벅 기프티콘을{" "}
                </Text>
                보내드려요!
              </P>
            </Div>
          </BannerBlue>
          <Grid
            width="123px"
            height="123px"
            position="absolute"
            right="13px"
            bottom="25px"
          >
            <img src="/assets/banner01.png" alt="설문조사 이미지" />
          </Grid>
        </Grid>
        {/* 배너2번 */}
        <Grid
          height="151px"
          display="flex"
          alignItems="center"
          position="relative"
          cursor="pointer"
          _onClick={() => {
            router.push("/event");
          }}
        >
          <BannerGreen>
            <Div>
              <SP>오싹 오픈기념 EVENT</SP>
              <P>
                버그찾고
                <br />
                <Text color="#FF6868" bold>
                  치킨🍗{" "}
                </Text>
                받으러 가자!
              </P>
            </Div>
          </BannerGreen>
          <Grid
            width="134px"
            height="118px"
            position="absolute"
            right="13px"
            bottom="30px"
          >
            <img src="/assets/banner02.png" alt="선물 이미지" />
          </Grid>
        </Grid>
      </StyledSlider>
    </React.Fragment>
  );
};
const StyledSlider = styled(Slider)`
  height: 151px;
  width: 100%;
  position: relative;
`;
const BannerBlue = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.blueBanner};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const BannerGreen = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.banner};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  width: 100%;
`;
const SP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  width: 100%;
`;
const Div = styled.div`
  width: 60%;
  height: 65px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export default Banner;
