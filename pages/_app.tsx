import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import MobileFrame from "../src/components/shared/MobileFrame";
import theme from "../styles/theme";
import { gsap } from "gsap";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => remove(), 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => show(), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const remove = () => {
    const ani = gsap.to(textRef.current, {
      x: -773,
      display: "none",
      duration: 1,
      ease: "strong.inOut",
      onComplete: () => setActive(false),
    });
    return () => {
      ani.kill();
    };
  };
  const show = () => {
    const ani2 = gsap.to(text2Ref.current, {
      x: 863,
      duration: 1,
      ease: "strong.inOut",
    });
    return () => {
      ani2.kill();
    };
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="오피스 구할 땐 오싹으로 싹가능!" />
        <title>OSSACK</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Wrap>
            <Background>
              <TextImg ref={textRef} />
              {!active && <Text02Img ref={text2Ref} />}
            </Background>
            <MobileFrame className="MobileFramePage">
              <Component {...pageProps} />
            </MobileFrame>
          </Wrap>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  .MobileFramePage {
    z-index: 999;
    background-color: #fff;
  }
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(/assets/bg.jpg);
  background-size: cover;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const TextImg = styled.div`
  width: 683px;
  height: 373px;
  background-image: url(/assets/bg02.png);
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: 90px;
`;
const Text02Img = styled.div`
  width: 690px;
  height: 373px;
  background-image: url(/assets/bg03.png);
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: -773px;
`;
