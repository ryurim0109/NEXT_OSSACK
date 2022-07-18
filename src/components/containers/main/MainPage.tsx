import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Sale, PopUp } from "./index";
import { Bar } from "../../shared/index";
import { useSelector, useDispatch } from "react-redux";

function MainPage() {
  //const appDispatch = useAppDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const HAS_VISITED_BEFORE = localStorage.getItem("hasVisitedBefore");
  // const login = useSelector((state) => state.user.is_login);
  // const is_session = localStorage.getItem("token");
  // useEffect(() => {
  //   dispatch(userActions.loginCheckApi());
  // }, [dispatch]);

  useEffect(() => {
    const handleShowModal = () => {
      if (HAS_VISITED_BEFORE && (HAS_VISITED_BEFORE as any) > new Date()) {
        return;
      }

      if (!HAS_VISITED_BEFORE) {
        setShowPopUp(true);
        let expires: any = new Date();
        expires = expires.setHours(expires.getHours() + 24);
        localStorage.setItem("hasVisitedBefore", expires);
      }
    };

    const timeout = window.setTimeout(handleShowModal, 200);
    return () => clearTimeout(timeout);
  }, [HAS_VISITED_BEFORE]);
  const handleClose = () => setShowPopUp(false);

  // if (!login || !is_session) {
  //   return (
  //     <React.Fragment>
  //       <NotUser />
  //     </React.Fragment>
  //   );
  // } else {
  return (
    <React.Fragment>
      <Outter>
        <Sale />
      </Outter>
      <Bar />
      {showPopUp ? (
        <>
          <ModalBackdrop onClick={handleClose}></ModalBackdrop>
          <PopUp showPopUp={showPopUp} setShowPopUp={handleClose} />
        </>
      ) : null}
    </React.Fragment>
  );
}
// }
const Outter = styled.div`
  width: 100%;
  padding-bottom: 90px;
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background: rgba(153, 153, 153, 0.77);
`;
export default MainPage;
