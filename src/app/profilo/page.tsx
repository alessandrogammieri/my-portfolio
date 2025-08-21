export const metadata = {
  title: {
    default: "Profilo",
  },
  description:
    "Sono uno sviluppatore full stack specializzato nello sviluppo di applicazioni web moderne e performanti. Realizzo soluzioni digitali su misura per ogni esigenza.",
};

export default function About() {
  return (
    <div
      id="about"
      className="min-h-[calc(100vh-10.5rem)] md:min-h-[calc(100vh-9rem)] min-w-0 w-full flex justify-center relative p-3 md:p-10"
    >
      <main className="min-h-0 min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative">
          <div className="min-w-0 w-full flex flex-col md:flex-row justify-center relative">
            <div
              id="profile-picture"
              className="min-w-[10rem] h-fit flex flex-col items-center grow-3 shrink md:sticky md:top-16 px-10 pb-20"
            >
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  backgroundColor: "red",
                }}
              ></div>
            </div>
            <div
              id="profile-description"
              className="max-w-[40rem] w-full flex self-center md:self-auto grow-9 shrink relative"
            >
              <div
                style={{
                  width: "100%",
                  height: "1600px",
                  backgroundColor: "green",
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
