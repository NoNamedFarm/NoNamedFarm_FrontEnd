import styled from "styled-components";
import GlobalStyle from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmInfo from "./components/FarmInfo";
import DateInfo from "./components/DateInfo";

const App = () => {
  const scheduledDate: Date = new Date("July 13, 2022, 20:30:00");
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

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Banner />
        <InfoWrapper>
          <FarmInfo
            temperature={Math.round(temperature)}
            humidity={Math.round(humidity)}
            scheduledDate={scheduledDate}
          />
          <DateInfo wateredDate={wateredDate} />
        </InfoWrapper>
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

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default App;
