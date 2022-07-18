import React from "react";
import { Grid, Text } from "../../elements/index";
import { useNavigate } from "react-router-dom";
import officeImg from "../../assets/office.png";
import shareImg from "../../assets/share.png";
const SaleList = () => {
  const navigate = useNavigate();
  const officeClick = (name:string) => {
    navigate(`/officemap/${name}`);
  };

  return (
    <React.Fragment>
      <Grid margin="0 0 32px 0">
        <Grid
          display="flex"
          justifyContent="space-between"
          margin="16px 0"
          cursor="pointer"
        >
          <Grid
            id="office"
            width="47.4%"
            height="160px"
            border="1px solid #E5E5EC"
            borderRadius="8px"
            position="relative"
            boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)"
            padding="12px"
            _onClick={() => {
              officeClick("office");
            }}
          >
            <Text size="16px" bold>
              오피스
            </Text>
            <Grid
              width="118px"
              height="118px"
              position="absolute"
              right="0"
              bottom="0"
            >
              <img src={officeImg} alt="오피스이미지" />
            </Grid>
          </Grid>
          <Grid
            id="officetell"
            width="47.4%"
            height="160px"
            position="relative"
            border="1px solid #E5E5EC"
            borderRadius="8px"
            cursor="pointer"
            _onClick={() => {
              officeClick("share");
            }}
            boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)"
            padding="12px"
          >
            <Text size="16px" bold>
              공유 오피스
            </Text>
            <Grid
              width="90px"
              height="108px"
              position="absolute"
              right="8px"
              bottom="12px"
            >
              <img src={shareImg} alt="공유오피스이미지" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SaleList;
