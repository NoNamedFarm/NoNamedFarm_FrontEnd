import { icon } from "../../assets/images";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Image src={icon} />
      <ContentsWrapper>
        <span>무명농</span>|<span>농장 정보</span>|<span>그래프</span>
      </ContentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;

  position: fixed;

  padding: 0.5rem;

  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  z-index: 3;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;

  object-fit: cover;
  pointer-events: auto;

  cursor: pointer;
`;

const ContentsWrapper = styled.div`
  color: #ddd;
  font-size: 1rem;

  span:first-of-type {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    color: #66cc33;
    font-family: "B612";
    font-size: 0.75rem;

    cursor: pointer;
  }
`;

export default Header;
