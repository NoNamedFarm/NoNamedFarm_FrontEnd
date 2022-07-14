import { icon } from "../../assets/images";
import styled from "styled-components";
import { MutableRefObject, useEffect, useState } from "react";

interface HeaderProps {
  titleRef: MutableRefObject<HTMLHeadingElement[]>;
}

const Header = ({ titleRef }: HeaderProps) => {
  const [hideHeaderState, setHideHeaderState] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollTop = 0;
    const toggleHeader = () => {
      const nextScrollTop = window.pageYOffset || 0;
      if (prevScrollTop > 45 && nextScrollTop > prevScrollTop) {
        setHideHeaderState(true);
      } else if (nextScrollTop < prevScrollTop) {
        setHideHeaderState(false);
      }
      prevScrollTop = nextScrollTop;
    };
    document.addEventListener("scroll", toggleHeader);
    return () => document.removeEventListener("scroll", toggleHeader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper hideHeaderState={hideHeaderState}>
      <Image src={icon} />
      <ContentsWrapper>
        <span
          onClick={() => {
            titleRef.current[0].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          무명농
        </span>
        |
        <span
          onClick={() => {
            titleRef.current[1].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          농장 정보
        </span>
        |
        <span
          onClick={() => {
            titleRef.current[2].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          칭찬 횟수
        </span>
      </ContentsWrapper>
    </Wrapper>
  );
};

interface WrapperProps {
  hideHeaderState: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: #fff;

  position: fixed;
  ${(props) => (props.hideHeaderState ? "top: -3rem;" : "top: 0;")}

  padding: 0.5rem;

  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  transition: top 0.25s ease;
  z-index: 4;
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

  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    color: #66cc33;
    font-family: "B612";
    font-size: 0.75rem;

    cursor: pointer;
  }

  span:first-of-type {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default Header;
