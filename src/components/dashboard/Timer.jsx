import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setRunning(false);
          return;
        }

        if (seconds > 0) {
          setSeconds((s) => s - 1);
        } else if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((h) => h - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, hours, minutes, seconds]);

  const pad = (n) => String(n).padStart(2, "0");

  const increase = (type) => {
    if (running) return;

    if (type === "h") setHours((h) => Math.min(h + 1, 23));
    if (type === "m") setMinutes((m) => Math.min(m + 1, 59));
    if (type === "s") setSeconds((s) => Math.min(s + 1, 59));
  };

  const decrease = (type) => {
    if (running) return;

    if (type === "h") setHours((h) => Math.max(h - 1, 0));
    if (type === "m") setMinutes((m) => Math.max(m - 1, 0));
    if (type === "s") setSeconds((s) => Math.max(s - 1, 0));
  };

  const totalTime = hours * 3600 + minutes * 60 + seconds;

const [initialTime, setInitialTime] = useState(
  hours * 3600 + minutes * 60 + seconds
);

useEffect(() => {
  if (!running) {
    setInitialTime(hours * 3600 + minutes * 60 + seconds);
  }
}, []);

const radius = 48;
const circumference = 2 * Math.PI * radius;

const progress =
  initialTime === 0
    ? circumference
    : circumference - (totalTime / initialTime) * circumference;

  return (
    <div className="w-[820px] h-[175px] bg-[#1D2248] rounded-[18px] flex items-center px-6">

      {/* Circle */}

      <div className="timer-circle relative w-[120px] h-[120px] flex items-center justify-center">

  <svg
    className="absolute -rotate-90"
    width="120"
    height="120"
  >
    {/* Background Circle */}
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke="#2A2F5F"
      strokeWidth="6"
      fill="none"
    />

    {/* Progress Circle */}
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke="#FF6A6A"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeDasharray={circumference}
      strokeDashoffset={progress}
      style={{
        transition: "stroke-dashoffset 1s linear",
      }}
    />
  </svg>

  <span className="text-white text-[18px] font-semibold z-10">
    {pad(hours)}:{pad(minutes)}:{pad(seconds)}
  </span>

</div>

      {/* Controls */}

      <div className="flex-1 ml-6 flex flex-col">

        <div className="flex gap-[112px] justify-center">

          {[
            ["Hours", hours, "h"],
            ["Minutes", minutes, "m"],
            ["Seconds", seconds, "s"],
          ].map(([label, value, key]) => (
            <div
              key={key}
              className="flex flex-col items-center"
            >
              <p className="text-[#A8A8A8] text-[18px] mb-2">
                {label}
              </p>

              <FaChevronUp
                onClick={() => increase(key)}
                className="text-[#9A9A9A] text-[12px] cursor-pointer"
              />

              <h2 className="text-white text-[28px] font-light my-[6px]">
                {pad(value)}
              </h2>

              <FaChevronDown
                onClick={() => decrease(key)}
                className="text-[#9A9A9A] text-[12px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="h-[10px]" />

        <button
          onClick={() => setRunning(!running)}
          className="mt-[14px] self-center w-[390px] h-[28px] rounded-full bg-[#FF6B6B] text-white text-[16px] font-normal"
        >
          {running ? "Pause" : "Start"}
        </button>

      </div>

    </div>
  );
};
export default Timer;