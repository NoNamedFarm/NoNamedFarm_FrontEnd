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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Banner />
        <Title>농장 정보</Title>
        <InfoWrapper>
          <FarmInfo
            temperature={Math.round(temperature)}
            humidity={Math.round(humidity)}
            scheduledDate={scheduledDate}
          />
          <DateInfo wateredDate={wateredDate} />
        </InfoWrapper>
        <Title>칭찬 횟수</Title>
        <GraphWrapper>
          <Graph data={compliments} />
        </GraphWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

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
`;

const GraphWrapper = styled.div`
  padding: 0.75rem;
  padding-left: 1.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 43.5rem;
  height: 30rem;

  border: 0.1px solid #ddd;
  border-radius: 0.5rem;
`;

export default App;
