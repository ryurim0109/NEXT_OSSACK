import React from "react";
import styled from "styled-components";
import { MyHeader, Bar } from "../../src/components/shared";
import {
  MyContent,
  MyLogout,
} from "../../src/components/containers/mypage/index";
import { Grid, Image, Text } from "../../src/elements/index";
import { NextPage } from "next";
import axios from "axios";

const Mypage: NextPage<Props> = ({ user_info }) => {
  //console.log(user_info, 'dlejre');
  return (
    <>
      <MyHeader>마이페이지</MyHeader>
      <Outter>
        <Inner>
          <Grid
            width="100%"
            margin="40px 0 0"
            height="180px"
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
          >
            <Grid
              width="100%"
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <Image
                border="2px solid #F3F3F3"
                type="circle"
                size="112"
                src={
                  user_info?.imageUrl
                    ? user_info?.imageUrl
                    : "/assets/default.png"
                }
              />
            </Grid>
            <Grid
              width="100%"
              display="flex"
              padding="12px 0"
              justifyContent="center"
            >
              <Text size="18px" bold>
                {user_info?.nickname ? user_info?.nickname : "게스트"}님
              </Text>
            </Grid>
            <Grid width="100%" display="flex" justifyContent="center">
              <Text size="12px" color="#666">
                {user_info?.userEmail ? user_info?.userEmail : "이메일 없음"}
              </Text>
            </Grid>
          </Grid>
        </Inner>
        <MyContent />
        <MyLogout />
      </Outter>
      <Bar />
    </>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 70px;
`;
const Inner = styled.div`
  position: relative;
  top: 80px;
`;
export interface userType {
  id: number;
  userEmail: string;
  nickname: string;
  imageUrl: string;
}

interface Props {
  user_info: userType;
}
export const getStaticProps = async () => {
  try {
    const response = await axios.get<userType>(
      "http://localhost:3000/api/userapi"
    );
    const data = response.data;
    return {
      props: {
        user_info: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
export default Mypage;
