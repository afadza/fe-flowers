import React, { useState, useEffect } from "react";

const CountdownComponent = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex gap-4 items-center justify-center">
      {days !== undefined && (
        <div>
          <p className="text-xs">Days</p>
          <p className="text-3xl font-bold">{addLeadingZero(days)} :</p>
        </div>
      )}

      {hours !== undefined && (
        <div>
          <p className="text-xs">Hours</p>
          <p className="text-3xl font-bold">{addLeadingZero(hours)} :</p>
        </div>
      )}
      {minutes !== undefined && (
        <div>
          <p className="text-xs">Minutes</p>
          <p className="text-3xl font-bold">{addLeadingZero(minutes)} :</p>
        </div>
      )}
      {seconds !== undefined && (
        <div>
          <p className="text-xs">Seconds</p>
          <p className="text-3xl font-bold">{addLeadingZero(seconds)}</p>
        </div>
      )}
    </div>
  );
};

export default CountdownComponent;
