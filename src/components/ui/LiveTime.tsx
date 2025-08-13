"use client";

import { useState, useEffect } from "react";

export default function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const convertTimeToText = (date: Date) => {
    // Ottieni l'ora di Roma
    const romeTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Europe/Rome" })
    );
    const hours = romeTime.getHours();
    const minutes = romeTime.getMinutes();

    const hoursText = [
      "mezzanotte",
      "una",
      "due",
      "tre",
      "quattro",
      "cinque",
      "sei",
      "sette",
      "otto",
      "nove",
      "dieci",
      "undici",
      "mezzogiorno",
      "tredici",
      "quattordici",
      "quindici",
      "sedici",
      "diciassette",
      "diciotto",
      "diciannove",
      "venti",
      "ventuno",
      "ventidue",
      "ventitré",
    ];

    const minutesText = [
      "",
      "una",
      "due",
      "tre",
      "quattro",
      "cinque",
      "sei",
      "sette",
      "otto",
      "nove",
      "dieci",
      "undici",
      "dodici",
      "tredici",
      "quattordici",
      "quindici",
      "sedici",
      "diciassette",
      "diciotto",
      "diciannove",
      "venti",
      "ventuno",
      "ventidue",
      "ventitré",
      "ventiquattro",
      "venticinque",
      "ventisei",
      "ventisette",
      "ventotto",
      "ventinove",
      "trenta",
      "trentuno",
      "trentadue",
      "trentatré",
      "trentaquattro",
      "trentacinque",
      "trentasei",
      "trentasette",
      "trentotto",
      "trentanove",
      "quaranta",
      "quarantuno",
      "quarantadue",
      "quarantatré",
      "quarantaquattro",
      "quarantacinque",
      "quarantasei",
      "quarantasette",
      "quarantotto",
      "quarantanove",
      "cinquanta",
      "cinquantuno",
      "cinquantadue",
      "cinquantatré",
      "cinquantaquattro",
      "cinquantacinque",
      "cinquantasei",
      "cinquantasette",
      "cinquantotto",
      "cinquantanove",
    ];

    let timeText = "Sono le ";

    // Gestione ore speciali
    if (hours === 0) {
      timeText = "È mezzanotte e ";
    } else if (hours === 1) {
      timeText = "È l'";
    } else if (hours === 12) {
      timeText = "È mezzogiorno e ";
    }

    timeText += hoursText[hours];

    // Gestione minuti
    if (minutes === 0) {
      if (hours === 0 || hours === 12) {
        return timeText; // "È mezzanotte" o "È mezzogiorno"
      }
      return timeText + " in punto";
    } else if (minutes === 15) {
      return timeText + " e un quarto";
    } else if (minutes === 30) {
      return timeText + " e mezza";
    } else if (minutes === 45) {
      return timeText + " e tre quarti";
    } else {
      return timeText + " e " + minutesText[minutes];
    }
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">{convertTimeToText(time)}</p>
    </div>
  );
}
