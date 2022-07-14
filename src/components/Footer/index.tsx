import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <strong>ⓒ 2022 No Named All rights reserved.</strong>
      <span>Front-End : __Rals</span>
      <span>Back-End : chlgml</span>
      <span>Embeded : choiyj0812</span>
      <span>(Dummy data, These can be changed.)</span>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #f6f6f6;
  position: relative;

  width: 100%;
  height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "B612";
  font-size: 1rem;

  span {
    font-size: 0.75rem;

    :first-of-type {
      margin-top: 0.5rem;
    }
  }
`;
