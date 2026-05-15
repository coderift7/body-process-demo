"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  Clock3,
  Dumbbell,
  History,
  Minus,
  Plus,
  StickyNote,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import { assetPath } from "@/lib/paths";

const clients = [
  { name: "Benedict G.", goal: "-23 kg, Kraft erhalten", state: "Heute" },
  { name: "Miriam K.", goal: "Rücken stabilisieren", state: "Do" },
  { name: "Tobias R.", goal: "Hypertrophie", state: "Fr" },
];

const exercises = [
  { name: "Brustpresse", load: "62,5 kg", reps: "8" },
  { name: "Latziehen eng", load: "55 kg", reps: "10" },
  { name: "Beinpresse", load: "140 kg", reps: "12" },
  { name: "Face Pulls", load: "22,5 kg", reps: "15" },
];

const sets = [
  { set: 1, last: "60 kg x 10", load: "62,5", reps: "8", done: true },
  { set: 2, last: "60 kg x 9", load: "62,5", reps: "8", done: true },
  { set: 3, last: "57,5 kg x 10", load: "60", reps: "9", done: false },
];

const history = [
  { date: "08.05.", value: "60 kg x 10 / 9 / 57,5 x 10" },
  { date: "01.05.", value: "57,5 kg x 10 / 10 / 9" },
  { date: "24.04.", value: "55 kg x 12 / 10 / 10" },
];

export default function TrainingAppMockup() {
  const [activeClient, setActiveClient] = useState(0);
  const [activeExercise, setActiveExercise] = useState(0);
  const [sessionSets, setSessionSets] = useState(sets);
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionFinished, setSessionFinished] = useState(false);

  const client = clients[activeClient];
  const exercise = exercises[activeExercise];
  const completedSets = sessionSets.filter((item) => item.done).length + 8;

  function adjustSet(
    setIndex: number,
    field: "load" | "reps",
    direction: 1 | -1,
  ) {
    setSessionSets((current) =>
      current.map((item, index) => {
        if (index !== setIndex) return item;
        const rawValue = Number(item[field].replace(",", "."));
        const step = field === "load" ? 2.5 : 1;
        const nextValue = Math.max(0, rawValue + direction * step);
        const formatted =
          field === "load"
            ? String(nextValue).replace(".", ",")
            : String(Math.round(nextValue));
        return { ...item, [field]: formatted };
      }),
    );
  }

  function toggleDone(setIndex: number) {
    setSessionSets((current) =>
      current.map((item, index) =>
        index === setIndex ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function addSet() {
    setSessionSets((current) => {
      const last = current[current.length - 1];
      return [
        ...current,
        {
          set: current.length + 1,
          last: "neu",
          load: last?.load ?? "0",
          reps: last?.reps ?? "0",
          done: false,
        },
      ];
    });
  }

  function goToNextExercise() {
    setActiveExercise((current) => (current + 1) % exercises.length);
    setTimerRunning(false);
  }

  return (
    <main className="min-h-screen bg-[#EEE8DE] text-graphite">
      <div className="mx-auto grid min-h-screen max-w-[92rem] grid-rows-[auto_1fr] px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-graphite/14 pb-4">
          <div className="flex items-center gap-3">
            <a
              href={assetPath("/")}
              aria-label="Zur Website"
              className="grid h-10 w-10 place-items-center bg-graphite text-editorial"
            >
              <ChevronLeft className="h-5 w-5" />
            </a>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">
                Body Process
              </p>
              <h1 className="font-heading text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                Training Session
              </h1>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p className="text-sm font-semibold">Justin Doms</p>
              <p className="text-xs text-graphite/58">Live im Training</p>
            </div>
            <div className="relative h-11 w-11 overflow-hidden bg-graphite">
              <Image
                src={assetPath("/images/justin-consulting-portrait-hero.jpeg")}
                alt="Justin Doms"
                fill
                sizes="44px"
                className="object-cover object-[62%_18%]"
              />
            </div>
          </div>
        </header>

        <div className="grid gap-4 py-4 lg:grid-cols-[18rem_minmax(0,1fr)_20rem]">
          <aside className="order-2 space-y-4 lg:order-none">
            <section className="border border-graphite/14 bg-editorial p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite/58">
                  Kunden
                </p>
                <span className="font-mono text-xs text-copper">3 aktiv</span>
              </div>
              <div className="mt-4 space-y-2">
                {clients.map((client, index) => (
                  <button
                    key={client.name}
                    onClick={() => setActiveClient(index)}
                    className={`w-full border px-3 py-3 text-left transition ${
                      index === activeClient
                        ? "border-graphite bg-graphite text-editorial"
                        : "border-graphite/12 bg-transparent text-graphite hover:border-graphite/35"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-semibold">{client.name}</span>
                      <span
                        className={`font-mono text-[0.68rem] uppercase tracking-[0.16em] ${
                          index === activeClient ? "text-copper" : "text-graphite/52"
                        }`}
                      >
                        {client.state}
                      </span>
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        index === activeClient ? "text-editorial/64" : "text-graphite/58"
                      }`}
                    >
                      {client.goal}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="border border-graphite/14 bg-[#D8CDBE] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock3 className="h-4 w-4 text-copper" />
                Oberkörper A
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-graphite/12 pt-4">
                <div>
                  <p className="font-mono text-2xl font-semibold">42</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-graphite/58">
                    Minuten
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-semibold">
                    {completedSets}/16
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-graphite/58">
                    Sätze
                  </p>
                </div>
              </div>
            </section>
          </aside>

          <section className="order-1 border border-graphite/14 bg-editorial lg:order-none">
            <div className="border-b border-graphite/12 p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
                    Heute · {client.name}
                  </p>
                  <h2 className="mt-3 font-heading text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-6xl">
                    {exercise.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSessionFinished((current) => !current)}
                  className="inline-flex w-fit items-center gap-2 bg-copper px-4 py-3 text-sm font-semibold text-editorial"
                >
                  {sessionFinished ? "Einheit gespeichert" : "Einheit beenden"}
                  <Check className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {exercises.map((exercise, index) => (
                  <button
                    key={exercise.name}
                    onClick={() => setActiveExercise(index)}
                    className={`border px-3 py-3 text-left ${
                      index === activeExercise
                        ? "border-copper bg-copper text-editorial"
                        : "border-graphite/14 bg-transparent text-graphite"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {exercise.name}
                    </span>
                    <span
                      className={`mt-1 block font-mono text-xs ${
                        index === activeExercise ? "text-editorial/72" : "text-graphite/54"
                      }`}
                    >
                      {exercise.load} · {exercise.reps} Wdh
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid gap-3">
                <div className="hidden grid-cols-[4rem_1fr_11rem_9rem_4rem] gap-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-graphite/48 sm:grid">
                  <span>Satz</span>
                  <span>Letztes Mal</span>
                  <span>Gewicht</span>
                  <span>Wdh</span>
                  <span />
                </div>

                {sessionSets.map((item, index) => (
                  <div
                    key={item.set}
                    className="grid gap-3 border border-graphite/14 bg-[#FAF7F1] p-3 sm:grid-cols-[4rem_1fr_11rem_9rem_4rem] sm:items-center"
                  >
                    <div className="flex items-center justify-between sm:block">
                      <p className="font-mono text-2xl font-semibold">
                        {item.set}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-graphite/48 sm:hidden">
                        Satz
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-graphite/62">
                      <History className="h-4 w-4 text-copper" />
                      {item.last}
                    </div>
                    <Stepper
                      value={`${item.load} kg`}
                      onDecrease={() => adjustSet(index, "load", -1)}
                      onIncrease={() => adjustSet(index, "load", 1)}
                    />
                    <Stepper
                      value={item.reps}
                      onDecrease={() => adjustSet(index, "reps", -1)}
                      onIncrease={() => adjustSet(index, "reps", 1)}
                    />
                    <button
                      aria-label={`Satz ${item.set} erledigt`}
                      onClick={() => toggleDone(index)}
                      className={`grid h-12 w-full place-items-center border sm:w-12 ${
                        item.done
                          ? "border-graphite bg-graphite text-editorial"
                          : "border-graphite/20 text-graphite"
                      }`}
                    >
                      <Check className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <button
                  onClick={addSet}
                  className="inline-flex items-center justify-center gap-2 border border-graphite/18 px-4 py-4 text-sm font-semibold"
                >
                  <Plus className="h-4 w-4" />
                  Satz
                </button>
                <button
                  onClick={() => setTimerRunning((current) => !current)}
                  className={`inline-flex items-center justify-center gap-2 border px-4 py-4 text-sm font-semibold ${
                    timerRunning
                      ? "border-copper bg-copper text-editorial"
                      : "border-graphite/18"
                  }`}
                >
                  <TimerReset className="h-4 w-4" />
                  {timerRunning ? "Pause läuft" : "Pause 90s"}
                </button>
                <button
                  onClick={goToNextExercise}
                  className="inline-flex items-center justify-center gap-2 bg-graphite px-4 py-4 text-sm font-semibold text-editorial"
                >
                  Nächste Übung
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>

          <aside className="order-3 space-y-4 lg:order-none">
            <section className="border border-graphite/14 bg-graphite p-4 text-editorial">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-copper" />
                <p className="text-sm font-semibold">Progression</p>
              </div>
              <p className="mt-4 font-heading text-4xl font-semibold tracking-[-0.05em] text-copper">
                +2,5 kg
              </p>
              <p className="mt-2 text-sm leading-6 text-editorial/64">
                Wenn Satz 3 sauber über 9 Wiederholungen bleibt, nächstes Mal
                mit 62,5 kg starten.
              </p>
            </section>

            <section className="border border-graphite/14 bg-editorial p-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4 text-copper" />
                <p className="text-sm font-semibold">Verlauf</p>
              </div>
              <div className="mt-4 space-y-3">
                {history.map((entry) => (
                  <div
                    key={entry.date}
                    className="border-b border-graphite/10 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="font-mono text-xs text-copper">{entry.date}</p>
                    <p className="mt-1 text-sm leading-6 text-graphite/68">
                      {entry.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-graphite/14 bg-editorial p-4">
              <div className="flex items-center gap-2">
                <StickyNote className="h-4 w-4 text-copper" />
                <p className="text-sm font-semibold">Coach-Notiz</p>
              </div>
              <p className="mt-4 border-l-2 border-copper pl-4 text-sm leading-6 text-graphite/68">
                Schulter bleibt stabil. Exzentrik langsamer cueen. Nächste
                Einheit zuerst Brustpresse, dann Latziehen.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Stepper({
  value,
  onDecrease,
  onIncrease,
}: {
  value: string;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr_2.75rem] border border-graphite/14 bg-editorial">
      <button
        aria-label="Wert verringern"
        onClick={onDecrease}
        className="grid h-12 place-items-center border-r border-graphite/12"
      >
        <Minus className="h-4 w-4" />
      </button>
      <div className="grid h-12 place-items-center whitespace-nowrap font-mono text-lg font-semibold">
        {value}
      </div>
      <button
        aria-label="Wert erhöhen"
        onClick={onIncrease}
        className="grid h-12 place-items-center border-l border-graphite/12"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
