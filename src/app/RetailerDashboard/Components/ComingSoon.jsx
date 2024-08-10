import React, { useState, useEffect } from "react";

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2024-09-31T00:00:00"); // Set your event date here
    const currentTime = new Date();
    const difference = eventDate - currentTime;

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
  }

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="h-screen bg-black/90 flex items-center justify-center relative z-20 text-white">
      <img
        src="https://plus.unsplash.com/premium_photo-1682148014710-095131cd99a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="bgimg"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
      />
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Coming Soon</h1>
        <p className="text-lg md:text-2xl">
          We are working hard to give you a better experience!
        </p>
        <div className="flex justify-center space-x-4 text-xl md:text-3xl font-semibold">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <form className="mt-6 space-y-4 space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full w-64 md:w-96 text-black"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-700 font-semibold text-white"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComingSoon;
