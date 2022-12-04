import React from "react";
import { useCountDown } from "../hooks/useCountDown";
import ExpiredNotice from "./expiredNotice";
import ShowCounter from "./showCounter";

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountDownTimer;
