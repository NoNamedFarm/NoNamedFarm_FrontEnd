import styled from "styled-components";
import GlobalStyle from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmStatus from "./components/Status";

const App = () => {
  const dday: Date = new Date("July 13, 2022, 20:30:00");
  const temperature: number = 36.5;
  const humidity: number = 41;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Banner />
        <FarmStatus
          temperature={Math.round(temperature)}
          humidity={Math.round(humidity)}
          remaining={dday}
        />
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

export default App;
