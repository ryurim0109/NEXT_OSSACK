import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../../../elements/index";

interface PropsType {
  showPopUp: boolean;
  setShowPopUp: () => void;
}
const PopUp = ({ showPopUp, setShowPopUp }: PropsType) => {
  return (
    <React.Fragment>
      {showPopUp ? (
        <Outter>
          <Grid width="100%" height="80px" padding="0 16px" margin="32px 0 0">
            <P>오싹 입장 완료</P>
            <PopUpTitle>오피스 매물 확인 서비스</PopUpTitle>
            <PopUpTitle>
              <Text color="#3E00FF" bold>
                오싹
              </Text>
              에 오신 것을 환영합니다.
            </PopUpTitle>
          </Grid>
          <Grid width="100%" height="195px" position="absolute" bottom="0">
            <img src="/assets/wel.jpg" alt="오싹 환영 이미지" />
          </Grid>
          <Button
            _onClick={setShowPopUp}
            is_close
            position="absolute"
            top="16px"
            right="16px"
          />
        </Outter>
      ) : null}
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 328px;
  background: ${({ theme }) => theme.colors.buttonTitle};
  z-index: 9999;
  position: fixed;
  bottom: 0;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.subTitle};
  margin-bottom: 8px;
`;
const PopUpTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxlg};
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;
export default PopUp;
