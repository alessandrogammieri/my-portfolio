"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { HiHome, HiArrowLeft } from "react-icons/hi2";
import {
  HiOutlineSquares2X2,
  HiOutlineUserCircle,
  HiOutlineBookOpen,
} from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="min-w-0 w-full flex justify-center items-center min-h-[calc(100vh-200px)] relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-3xl w-full flex flex-col relative py-3">
          <div className="min-w-0 w-full flex flex-col items-center gap-8 md:gap-12 relative text-center">
            {/* Numero 404 stilizzato */}
            <div className="relative">
              <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-gray-300 dark:text-gray-800 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-gray-500/20 blur-3xl" />
              </div>
            </div>

            {/* Testo principale */}
            <div className="flex flex-col gap-4 relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Pagina Non Trovata
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                La pagina che stai cercando non esiste o è stata spostata.
              </p>
            </div>

            {/* Linea divisoria */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent" />

            {/* Pulsanti di navigazione */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <Button
                href="/"
                icon={HiHome}
                variant="default"
                className="w-full sm:w-auto"
              >
                Vai alla Home
              </Button>
              <Button
                onClick={() => window.history.back()}
                icon={HiArrowLeft}
                variant="transparent"
                className="w-full sm:w-auto cursor-pointer"
              >
                Torna Indietro
              </Button>
            </div>

            {/* Suggerimenti */}
            <div className="mt-8 w-full max-w-lg">
              <div className="relative p-6 md:p-8 rounded-2xl bg-gray-500/5 dark:bg-gray-500/5 border border-gray-400/20 dark:border-gray-400/10 hover:border-gray-400/30 dark:hover:border-gray-400/20 transition-all duration-300 overflow-hidden">
                {/* Gradient decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <span className="inline-block w-1 h-1 rounded-full bg-cyan-500"></span>
                    Potresti essere interessato a:
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/progetti"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-500/10 dark:hover:bg-gray-500/10 transition-all duration-200"
                      >
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/20 transition-colors">
                          <HiOutlineSquares2X2 className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                          I miei progetti
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profilo"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-500/10 dark:hover:bg-gray-500/10 transition-all duration-200"
                      >
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/20 transition-colors">
                          <HiOutlineUserCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                          Chi sono
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-500/10 dark:hover:bg-gray-500/10 transition-all duration-200"
                      >
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/20 transition-colors">
                          <HiOutlineBookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                          Ultimi articoli
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
