"use client";

import { useState, useEffect } from "react";

export default function LiveTimeString() {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeInItalian = (date: Date): string => {
    const romeTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Europe/Rome" })
    );

    const hours = romeTime.getHours();
    const minutes = romeTime.getMinutes();

    const hourNames = [
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

    const minuteNames = [
      "",
      "uno",
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

    // Gestione casi speciali
    if (hours === 0 && minutes === 0) return "È mezzanotte";
    if (hours === 12 && minutes === 0) return "È mezzogiorno";

    if (hours === 0) {
      if (minutes === 15) return "È mezzanotte e un quarto";
      if (minutes === 30) return "È mezzanotte e mezza";
      if (minutes === 45) return "È mezzanotte e tre quarti";
      return `È mezzanotte e ${minuteNames[minutes]}`;
    }

    if (hours === 12) {
      if (minutes === 15) return "È mezzogiorno e un quarto";
      if (minutes === 30) return "È mezzogiorno e mezza";
      if (minutes === 45) return "È mezzogiorno e tre quarti";
      return `È mezzogiorno e ${minuteNames[minutes]}`;
    }

    const hourText = hourNames[hours];
    const isOne = hours === 1 || hours === 13;

    if (minutes === 0) {
      return isOne ? `È l'${hourText}` : `Sono le ${hourText}`;
    }

    if (minutes === 15) {
      return isOne
        ? `È l'${hourText} e un quarto`
        : `Sono le ${hourText} e un quarto`;
    }

    if (minutes === 30) {
      return isOne ? `È l'${hourText} e mezza` : `Sono le ${hourText} e mezza`;
    }

    if (minutes === 45) {
      return isOne
        ? `È l'${hourText} e tre quarti`
        : `Sono le ${hourText} e tre quarti`;
    }

    const minuteText = minuteNames[minutes];
    return isOne
      ? `È l'${hourText} e ${minuteText}`
      : `Sono le ${hourText} e ${minuteText}`;
  };

  // Mostra placeholder durante SSR e prima del mount
  if (!mounted || !time) {
    return (
      <div className="hidden xl:flex xl:items-center xl:gap-2">
        <p className="text-sm">Caricamento orario...</p>
      </div>
    );
  }

  return (
    <div className="hidden xl:flex xl:items-center xl:gap-2">
      <p className="text-sm">{formatTimeInItalian(time)}</p>
    </div>
  );
}
