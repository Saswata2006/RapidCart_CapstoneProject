import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
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

  return (
    <div className="countdown">
      <h2>Flash Sale Ends In:</h2>
      <div className="timer">
        <span>{timeLeft.days}d</span>:
        <span>{timeLeft.hours}h</span>:
        <span>{timeLeft.minutes}m</span>:
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
