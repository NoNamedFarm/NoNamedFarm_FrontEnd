import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRemaining } from "../../lib/getRemaining";

interface FarmInfoProps {
  temperature: number;
  humidity: number;
  scheduledDate: Date;
}

const FarmInfo = ({ temperature, humidity, scheduledDate }: FarmInfoProps) => {
  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    const Timer = setInterval(() => {
      setRemainingTime(getRemaining(scheduledDate));
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <h3>농장 상태</h3>
      <Gauge type="temperature" value={temperature + 20}>
        온도 (℃)
        <MinMax>
          <span>-20</span>
          <span>80</span>
        </MinMax>
        <input
          type="range"
          min="-20"
          max="80"
          defaultValue={temperature}
          disabled={true}
        />
        <strong>{temperature}</strong>
      </Gauge>
      <Gauge type="humidity" value={humidity}>
        습도 (%)
        <MinMax>
          <span>0</span>
          <span>100</span>
        </MinMax>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={humidity}
          disabled={true}
        />
        <strong>{humidity}</strong>
      </Gauge>
      <Switch>
        <span>물 주기</span>
        <input type="checkbox" id="water" />
        <label htmlFor="water">
          <button />
        </label>
      </Switch>
      <Switch>
        <span>빛 주기</span>
        <input type="checkbox" id="light" />
        <label htmlFor="light">
          <button />
        </label>
      </Switch>
      <InputWrapper>
        <span>물 주기 설정</span>
        <input type="number" min={0} max={168} placeholder="3" />
        <span>H</span>
        <input type="number" min={0} max={59} placeholder="0" />
        <span>M</span>
        <input type="number" min={0} max={59} placeholder="0" />
        <span>S</span>
      </InputWrapper>
      <Timer>
        {remainingTime && "다음 물 주기까지"}
        <strong>{remainingTime ? remainingTime : "..."}</strong>
      </Timer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 0.5rem;

  width: max-content;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 0.75rem;

  h3 {
    margin: 0;
    margin-bottom: 0.75rem;

    font-size: 1rem;
  }
`;

interface GaugeProps {
  type: string;
  value: number;
}

const Gauge = styled.div<GaugeProps>`
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.5rem;

    z-index: 2;
  }

  input {
    all: unset;

    background-color: ${(props) =>
      props.type === "temperature" ? "#ef7777" : "#7791EF"};

    margin-left: 0.5rem;

    width: 15rem;
    height: 1rem;

    border-radius: 0.5rem;
    z-index: 1;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;

      background: #fff;

      width: 0.1rem;
      height: 1rem;
    }
  }

  strong {
    position: absolute;

    transform: translateX(${(props) => -5.75 + (props.value * 14.875) / 100}rem)
      translateY(1rem);

    font-size: 0.5rem;

    z-index: 2;
  }
`;

const MinMax = styled.div`
  position: absolute;

  transform: translateX(1.7rem) translateY(-1rem);

  width: 15rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 2;
`;

const Switch = styled.div`
  height: 2.65rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  input:checked + label button {
    transform: translateX(1.05rem) translateY(-0.1vh);
  }

  input:checked + label {
    background-color: #0377ff;
  }

  label {
    filter: opacity(75%);
  }

  label {
    background-color: #000;

    margin-left: 0.5rem;

    width: 2rem;
    height: 1rem;

    border: 0.1px solid #ddd;
    border-radius: 0.5rem;

    transition: background-color 0.25s ease;
    cursor: pointer;
  }

  button {
    background-color: #fff;

    position: absolute;

    transform: translateX(-0.05rem) translateY(-0.1vh);

    width: 1rem;
    height: 1rem;

    border: 0.1px solid #ddd;
    border-radius: 50%;

    transition: transform 0.25s ease;
    pointer-events: none;
  }

  input {
    position: absolute;

    display: none;
  }
`;

const InputWrapper = styled.div`
  background-color: #f6f6f6;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  width: 100%;
  height: 2.65rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 3rem;
  }
`;

const Timer = styled.div`
  background-color: #f6f6f6;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;

  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: #a1a1a1;
  font-size: 1rem;

  border-radius: 0.5rem;

  strong {
    color: #000;
    font-size: 1.25rem;
  }
`;

export default FarmInfo;
