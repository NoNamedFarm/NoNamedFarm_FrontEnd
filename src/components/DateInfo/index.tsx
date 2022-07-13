import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

interface DateInfoProps {
  wateredDate: string[];
}

const DateInfo = ({ wateredDate }: DateInfoProps) => {
  const now: number = Date.now();

  const [value, onChange] = useState(new Date());

  return (
    <Wrapper>
      <Calendar
        onChange={onChange}
        value={value}
        minDetail="year"
        maxDetail="month"
        tileClassName={({ date }): string => {
          if (date.getTime() < now)
            if (
              wateredDate.find(
                (watered) => watered === moment(date).format("DD-MM-YYYY")
              )
            )
              return "watered";
            else return "notWatered";
          else return "";
        }}
      />
      <InfoWrapper>
        <div>
          <strong /> <span>: 물을 준 날</span>
        </div>
        <div>
          <strong /> <span>: 물을 주지 못한 날</span>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 0.5rem;

  max-width: max-content;

  border-radius: 0.5rem;

  .watered {
    background-color: #66cc33;

    :hover,
    :focus {
      background-color: #77dd44;
    }
  }

  .notWatered {
    background-color: #e1e1e1;
  }

  .react-calendar__tile--active {
    background-color: #006edc !important;

    :hover {
      background-color: #1087ff !important;
    }
  }
`;

const InfoWrapper = styled.div`
  div {
    margin-top: 0.5rem;

    display: flex;
    justify-content: right;
    align-items: center;

    font-size: 1rem;

    strong {
      all: unset;

      margin-right: 0.4rem;

      width: 1rem;
      height: 1rem;

      border-radius: 50%;
    }

    :first-of-type strong {
      background-color: #66cc33;
    }

    :last-of-type strong {
      background-color: #e1e1e1;
    }
  }
`;

export default DateInfo;
