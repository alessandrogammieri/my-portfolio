import Image from "next/image";
import Link from "next/link";

export default function WorkExperience() {
  return (
    <div className="min-w-0 w-full relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
        Esperienze
      </h2>
      <div className="min-w-0 w-full flex flex-col gap-10 relative mb-10">
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <Link
              href="https://www.adnkronos.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="ADNKRONOS"
              className="text-lg font-semibold"
            >
              ADNKRONOS
            </Link>
            <span className="text-gray-600 dark:text-gray-400">
              lug 2025 - Presente
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Sviluppo e manutenzione di soluzioni web scalabili, con
              particolare attenzione all'integrazione tra sistemi e alla
              gestione delle applicazioni.
            </li>
            <li>
              Collaborazione ai processi di System Integration e DevOps,
              contribuendo al miglioramento continuo delle infrastrutture e dei
              flussi di lavoro.
            </li>
          </ul>
          <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/adnkronos/Immediapress-Dashboard.png"
                  width={255}
                  height={143}
                  alt="Immediapress Dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <Link
              href="https://www.hays.it/"
              target="_blank"
              rel="noopener noreferrer"
              title="HAYS SOLUTIONS"
              className="text-lg font-semibold"
            >
              HAYS SOLUTIONS
            </Link>
            <span className="text-gray-600 dark:text-gray-400">
              nov 2024 - giu 2025
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <p>
            Consulenza c/o{" "}
            <Link
              href="https://www.adnkronos.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="ADNKRONOS"
              className="font-semibold"
            >
              ADNKRONOS
            </Link>
          </p>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Implementazione di una piattaforma gestionale in Laravel con
              funzioni avanzate di distribuzione comunicati e gestione clienti.
            </li>
            <li>
              Gestione della manutenzione e aggiornamento del CMS aziendale, con
              interventi mirati su performance e sicurezza.
            </li>
            <li>
              Sviluppo di portali evento con React.js e WordPress, integrando
              componenti interattivi e responsive design.
            </li>
          </ul>
          <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/adnkronos/Adnkronos-Corporate.png"
                  width={255}
                  height={143}
                  alt="Adnkronos Corporate"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/adnkronos/Aki-Arabic-Adnkronos.png"
                  width={255}
                  height={143}
                  alt="Aki Arabic Adnkronos"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <Link
              href="https://business-changers.it/"
              target="_blank"
              rel="noopener noreferrer"
              title="BUSINESS CHANGERS"
              className="text-lg font-semibold"
            >
              BUSINESS CHANGERS
            </Link>
            <span className="text-gray-600 dark:text-gray-400">
              ago 2024 - ott 2024
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Ho contribuito allo sviluppo e alla manutenzione di piattaforme
              e-commerce e di una piattaforma per la gestione di asset cripto,
              collaborando con il team Innovation Labs.
            </li>
            <li>
              Mi sono occupato dell'implementazione di nuove funzionalità e del
              bug fixing su front-end e back-end, con particolare attenzione a
              performance, usabilità e scalabilità.
            </li>
            <li>
              Sul front-end ho utilizzato JavaScript, React.js, TypeScript e
              Next.js per ottimizzare la user experience e le prestazioni delle
              applicazioni.
            </li>
            <li>
              Sul back-end ho lavorato con Node.js, Express e MongoDB,
              sviluppando API REST e ottimizzando la gestione dei dati.
            </li>
          </ul>
        </div>
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <Link
              href="https://business-changers.it/"
              target="_blank"
              rel="noopener noreferrer"
              title="BUSINESS CHANGERS"
              className="text-lg font-semibold"
            >
              BUSINESS CHANGERS
            </Link>
            <span className="text-gray-600 dark:text-gray-400">
              mar 2022 - lug 2024
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <p>
            Consulenza c/o{" "}
            <Link
              href="https://www.coninet.it/"
              target="_blank"
              rel="noopener noreferrer"
              title="CONI NET"
              className="font-semibold"
            >
              CONI NET
            </Link>
          </p>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Ho collaborato allo sviluppo e alla manutenzione di siti web e
              portali, concentrandomi sull'ottimizzazione delle interfacce
              utente e sull'implementazione di soluzioni responsive.
            </li>
            <li>
              Ho utilizzato tecnologie come HTML, CSS (SASS/LESS), JavaScript,
              jQuery, PHP, Joomla e diverse versioni di Bootstrap per garantire
              compatibilità cross-browser e mobile.
            </li>
            <li>
              Negli ultimi mesi, ho integrato React.js su Joomla come headless
              CMS, modernizzando l'architettura front-end per migliorare
              flessibilità e prestazioni.
            </li>
            <li>
              Mi sono inoltre occupato della migrazione e ottimizzazione di
              database MySQL, assicurando continuità operativa e maggiore
              efficienza delle query.
            </li>
          </ul>
          <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/coni/Home-Sport-e-Salute.png"
                  width={255}
                  height={143}
                  alt="Inserire immagine Immediapress"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/coni/Home-Piazza-di-Siena.png"
                  width={255}
                  height={143}
                  alt="Inserire immagine Corporate"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/coni/Home-XXXIII-Giochi-Olimpici-Estivi-Parigi-2024.png"
                  width={255}
                  height={143}
                  alt="Inserire immagine Corporate"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/projects/coni/Home-Comitato-Olimpico-Nazionale.png"
                  width={255}
                  height={143}
                  alt="Inserire immagine Corporate"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <Link
              href="https://accentra.it/"
              target="_blank"
              rel="noopener noreferrer"
              title="ACCENTRA"
              className="text-lg font-semibold"
            >
              ACCENTRA
            </Link>
            <span className="text-gray-600 dark:text-gray-400">
              ott 2020 - feb 2022
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Web Developer
          </span>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Sviluppo e manutenzione di siti web con interfacce utente
              dinamiche e responsive.
            </li>
            <li>
              Implementazione di funzionalità interattive utilizzando HTML, CSS,
              JavaScript e jQuery.
            </li>
            <li>Gestione dei contenuti tramite PHP e WordPress.</li>
            <li>Integrazione di animazioni fluide con GSAP.</li>
            <li>
              Utilizzo di Bootstrap 3/4 per garantire compatibilità
              cross-device.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
