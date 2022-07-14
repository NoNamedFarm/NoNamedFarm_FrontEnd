import styled from "styled-components";
import GlobalStyle from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmInfo from "./components/FarmInfo";
import DateInfo from "./components/DateInfo";
import Graph from "./components/Graph";
import { ComplimentsType } from "./lib/complimentsType";

const App = () => {
  const scheduledDate: Date = new Date("July 14, 2022, 20:30:00");
  const temperature: number = 36.5;
  const humidity: number = 41;
  const wateredDate: string[] = [
    "05-07-2022",
    "07-07-2022",
    "08-07-2022",
    "10-07-2022",
    "11-07-2022",
    "13-07-2022",
  ];
  const compliments: ComplimentsType[] = [
    {
      id: "칭찬 횟수",
      color: "#66cc33",
      data: [
        {
          x: "2022-07-08",
          y: 5,
        },
        {
          x: "2022-07-09",
          y: 13,
        },
        {
          x: "2022-07-10",
          y: 8,
        },
        {
          x: "2022-07-11",
          y: 6,
        },
        {
          x: "2022-07-12",
          y: 11,
        },
        {
          x: "2022-07-13",
          y: 10,
        },
        {
          x: "2022-07-14",
          y: 3,
        },
      ],
    },
  ];

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
