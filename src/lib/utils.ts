import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina e ottimizza le classi CSS per componenti React.
 * Utilizza clsx per la logica condizionale e twMerge per risolvere i conflitti tra classi Tailwind.
 *
 * @param inputs - Array di classi CSS (stringhe, oggetti condizionali, array, undefined/null)
 * @returns Stringa di classi CSS ottimizzata senza conflitti
 *
 * @example
 * cn("p-4", "bg-red-500", isActive && "bg-blue-500") // "p-4 bg-blue-500"
 * cn("text-sm", { "font-bold": isHighlighted }, className) // Combina classi condizionali
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatta una data secondo le convenzioni italiane.
 * Converte stringhe o oggetti Date in formato leggibile italiano.
 *
 * @param date - Data come stringa ISO o oggetto Date
 * @returns Data formattata in italiano (es. "15 dicembre 2024")
 *
 * @example
 * formatDate("2024-12-15") // "15 dicembre 2024"
 * formatDate(new Date()) // "14 agosto 2025"
 */
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Converte un testo in uno slug URL-friendly.
 * Rimuove caratteri speciali, spazi e converte in minuscolo per creare URL puliti.
 *
 * @param text - Testo da convertire in slug
 * @returns Slug URL-friendly con solo lettere, numeri e trattini
 *
 * @example
 * slugify("Il Mio Primo Post!") // "il-mio-primo-post"
 * slugify("React & TypeScript Guide") // "react-typescript-guide"
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

/**
 * Calcola il tempo di lettura stimato per un contenuto testuale.
 * Basato su una velocità media di lettura di 200 parole al minuto.
 *
 * @param content - Contenuto testuale di cui calcolare il tempo di lettura
 * @returns Tempo di lettura in minuti (arrotondato per eccesso)
 *
 * @example
 * getReadingTime("Lorem ipsum dolor sit amet...") // 3 (minuti)
 * getReadingTime("Breve testo") // 1 (minimo 1 minuto)
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Tronca un testo a una lunghezza massima aggiungendo puntini di sospensione.
 * Utile per anteprime, descrizioni brevi e preview di contenuti.
 *
 * @param text - Testo da troncare
 * @param maxLength - Lunghezza massima consentita (inclusi i puntini)
 * @returns Testo troncato con "..." se necessario, altrimenti testo originale
 *
 * @example
 * truncateText("Questo è un testo molto lungo", 10) // "Questo è ..."
 * truncateText("Breve", 20) // "Breve"
 */
export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}