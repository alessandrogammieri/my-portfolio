"use client";

import { useState, useEffect } from "react";

export default function LiveTimeNumber() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeInNumbers = (date: Date): string => {
    const romeTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Europe/Rome" })
    );

    const hours = romeTime.getHours().toString().padStart(2, "0");
    const minutes = romeTime.getMinutes().toString().padStart(2, "0");
    const seconds = romeTime.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="hidden md:flex md:items-center md:gap-2 xl:hidden">
      <p className="text-sm tabular-nums">{formatTimeInNumbers(time)}</p>
    </div>
  );
}
