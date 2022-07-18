import React, { useEffect } from "react";
import { Grid, Button, Text, Image } from "../../../elements/index";
import styled from "styled-components";
// import {
//   getMainOfficeDB,
//   mainDeleteLikeDB,
//   mainClickLikeDB,
// } from "../../redux/modules/office";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../../../store/index";

const NearStation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const stationOfficeList = useSelector(
  //   (state: RootState) => state.office.main_list
  // );

  useEffect(() => {
    // dispatch(getMainOfficeDB("역"));
  }, []);

  return (
    <React.Fragment>
      {stationOfficeList &&
        stationOfficeList.map((o, idx) => {
          return (
            <Grid
              key={idx}
              width="320px"
              margin="20px 0 0 0"
              height="235px"
              bg="#999"
              borderRadius="8px"
              position="relative"
              overflow="hidden"
            >
              <Image
                padding="235px"
                bottom="0"
                src={o.images[0]}
                shape="rectangle"
                position="absolute"
              />
              <Grid
                width="100%"
                height="235px"
                bottom="0"
                position="absolute"
                cursor="pointer"
                _onClick={() => {
                  router.push(`/detail/${o.estateid}?query=${o.title}`);
                }}
                bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 5.74%, rgba(108, 108, 108, 0.0421707) 86.75%, rgba(118, 118, 118, 0) 93.49%)"
              ></Grid>
              {o.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#FF0000"
                  // _onClick={() => dispatch(mainDeleteLikeDB(o.estateid))}
                />
              ) : (
                <Button
                  is_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  //_onClick={() => dispatch(mainClickLikeDB(o.estateid))}
                />
              )}

              <Grid
                position="absolute"
                bottom="0"
                padding="0 16px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                height="60px"
                cursor="pointer"
                _onClick={() => {
                  router.push(`/detail/${o.estateid}?query=${o.title}`);
                }}
              >
                <Text color="#fff" size="14px">
                  {o.type ? o.type : "트리플 역세권 사무실"}
                </Text>
                <Text color="#fff" size="14px">
                  <Span>월세</Span> {o.rent_fee ? o.rent_fee : 200}만{" "}
                  <Span>보증금</Span> {o.deposit ? o.deposit : "3000만"}
                </Text>
              </Grid>
            </Grid>
          );
        })}
    </React.Fragment>
  );
};
const Span = styled.span`
  font-size: 10px;
`;
export default NearStation;
