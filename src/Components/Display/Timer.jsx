
import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const TimePickerTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const getTotalTime = () => hours * 3600 + minutes * 60 + seconds;

  const handleStart = () => {
    const total = getTotalTime();
    if (total > 0) {
      setTotalSeconds(total);
      setIsPlaying(true);
    }
  };

  const increase = (max, setter) => setter((prev) => (prev + 1) % max);
  const decrease = (max, setter) => setter((prev) => (prev - 1 + max) % max);

  const formatTime = (remainingTime) => {
    const h = Math.floor(remainingTime / 3600);
    const m = Math.floor((remainingTime % 3600) / 60);
    const s = remainingTime % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      {/* Timer */}
      <div>
        <CountdownCircleTimer
          key={totalSeconds}
          isPlaying={isPlaying}
          duration={totalSeconds}
          colors={["#FF6A6A"]}
          size={150}
          strokeWidth={8}
          onComplete={() => {
            setIsPlaying(false);
          }}
        >
          {({ remainingTime }) => (
            <div style={{ fontSize: "24px", fontWeight:"600" }}>{formatTime(remainingTime)}</div>
          )}
        </CountdownCircleTimer>
      </div>

      {/* Time Picker */}
      <div className="timer-picker">
        <div className="time-controls">
          {[
            { label: "Hours", value: hours, max: 24, setter: setHours },
            { label: "Minutes", value: minutes, max: 60, setter: setMinutes },
            { label: "Seconds", value: seconds, max: 60, setter: setSeconds }
          ].map(({ label, value, max, setter }) => (
            <div key={label} className="time-unit">
              <div className="time-label">{label}</div>
              <div className="time-arrow" onClick={() => increase(max, setter)}>▲</div>
              <div className="time-value">{String(value).padStart(2, "0")} </div> 
              <div className="time-arrow" onClick={() => decrease(max, setter)}>▼</div>
            </div>
          ))}
        </div>

        <button onClick={handleStart} className="start-button">
          Start
        </button>
      </div>
    </div>
  );
};

export default TimePickerTimer;

