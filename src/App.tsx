import styled from "styled-components";
import GlobalStyle from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmInfo from "./components/FarmInfo";
import DateInfo from "./components/DateInfo";
import Graph from "./components/Graph";
import { temperature, humidity, scheduledDate } from "./lib/farmInfo";
import { wateredDate } from "./lib/wateredDate";
import { compliments } from "./lib/compliments";
import { useMediaQuery } from "react-responsive";
import { logo } from "./assets/images";
import { useRef } from "react";

const App = () => {
  const titleRef = useRef<HTMLDivElement[]>([]);

  const isNotSupported = useMediaQuery({
    query: "(max-width:359px)",
  });

  return (
    <>
      {isNotSupported ? (
        <WarningWrapper>
          <img src={logo} alt="icon" /> 현재 해상도는 지원하지 않습니다.
        </WarningWrapper>
      ) : (
        <>
          <GlobalStyle />
          <div
            ref={(itself) => {
              if (itself) titleRef.current[0] = itself;
            }}
          />
          <Header titleRef={titleRef} />
          <Wrapper>
            <Banner />
            <div
              ref={(itself) => {
                if (itself) titleRef.current[1] = itself;
              }}
            />
            <Title>농장 정보</Title>
            <InfoWrapper>
              <FarmInfo
                temperature={Math.round(temperature)}
                humidity={Math.round(humidity)}
                scheduledDate={scheduledDate}
              />
              <DateInfo wateredDate={wateredDate} />
            </InfoWrapper>
            <div
              ref={(itself) => {
                if (itself) titleRef.current[2] = itself;
              }}
            />
            <Title>칭찬 횟수</Title>
            <GraphWrapper>
              <Graph data={compliments} />
            </GraphWrapper>
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

const WarningWrapper = styled.div`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 0.5rem;

  img {
    margin-bottom: 0.75rem;

    width: 5rem;
    height: 5rem;
  }
`;

const Wrapper = styled.div`
  padding-top: 3rem;

  height: auto;
  min-height: calc(100vh - 8rem);
`;

const Title = styled.h2`
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 43.5rem;

  @media screen and (max-width: 767px) {
    width: 22rem;

    :last-of-type {
      margin-bottom: 0.5rem;
    }
  }
`;

const InfoWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;

  width: 43.5rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  border: 0.1px solid #ddd;
  border-radius: 0.5rem;

  @media screen and (max-width: 767px) {
    width: 22rem;
    height: 50rem;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const GraphWrapper = styled.div`
  padding: 0.75rem;
  padding-left: 1.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  width: 43.5rem;
  height: 30rem;

  border: 0.1px solid #ddd;
  border-radius: 0.5rem;

  @media screen and (max-width: 767px) {
    padding: 0rem;

    width: 32.6rem;
    height: 25rem;

    border: none;
    border-radius: 0;

    g:nth-child(8) {
      display: none;
    }

    svg {
      transform: translateX(1.575rem) translateY(-0.75rem);
    }
  }
  @media screen and (max-width: 480px) {
    width: 31.35rem;

    svg {
      transform: translateX(0.25rem) translateY(-0.75rem);
    }
  }
  @media screen and (max-width: 420px) {
    width: 28.7rem;

    svg {
      transform: translateX(-0.1rem) translateY(-0.75rem);
    }
  }
  @media screen and (max-width: 360px) {
    width: 28.75rem;

    svg {
      transform: translateX(-0.65rem) translateY(-0.75rem);
    }
  }
`;

export default App;
