import styled from "styled-components";
import { banner } from "../../assets/images";

const Banner = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>무명농</h1>
        <span>No Named</span>
      </TitleWrapper>
      <Image src={banner} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;

  object-fit: cover;
`;

const TitleWrapper = styled.div`
  position: absolute;

  color: #fff;
  font-family: "Dokdo";
  font-size: 2.5rem;
  text-align: center;

  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.5));

  h1 {
    margin: 0;

    font-weight: normal;
  }
`;

export default Banner;
