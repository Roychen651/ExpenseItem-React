import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const date = time.toLocaleDateString('en-GB'); // Format date as day/month/year

  return (
    <div className="clock">
      <div className="clock__time">{hours}:{minutes}:{seconds}</div>
      <div className="clock__date">{date}</div>
    </div>
  );
};

export default Clock;
