/*
 * Copyright 2022 Marek Kobida
 */

import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";
import Timer from "./Timer.js";

const url = new URL(location.toString());

function toNumber(input: null | string): number | undefined {
  if (input && /[0-9]+/.test(input)) {
    return +input;
  }
}

const nodes: Timer["nodes"] = {
  minutes: document.querySelector("#minutes")!,
  seconds: document.querySelector("#seconds")!,
  startButton: document.querySelector("#start")!,
  stopButton: document.querySelector("#stop")!,
};
const rounds: number | undefined = toNumber(url.searchParams.get("rounds"));
const secondsPerRound: number | undefined = toNumber(
  url.searchParams.get("secondsPerRound")
);

const workoutName: string =
  url.searchParams.get("workoutName") ?? "EveryMinuteOnTheMinuteTimer";

const workouts: {
  [workoutName: string]: new (nodes: Timer["nodes"]) => Timer;
} = { EveryMinuteOnTheMinuteTimer };

const workoutByName = workouts[workoutName];

const workout = workoutByName
  ? new workoutByName(nodes)
  : new EveryMinuteOnTheMinuteTimer(nodes, rounds, secondsPerRound);

nodes.startButton?.addEventListener("click", () => workout.start());
nodes.stopButton?.addEventListener("click", () => workout.stop());
