import styled from "styled-components";
import GlobalStyle from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Banner />
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
