"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-sm tabular-nums"
        key={time.getSeconds()}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 0.2 }}
      >
        {time.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Rome",
        })}
      </motion.p>
    </motion.div>
  );
}
