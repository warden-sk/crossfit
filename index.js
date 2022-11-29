/*
 * Copyright 2022 Marek Kobida
 */
import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";
const url = new URL(location.toString());
function toNumber(input) {
    if (input && /[0-9]+/.test(input)) {
        return +input;
    }
}
const nodes = {
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
    startButton: document.querySelector("#start"),
    stopButton: document.querySelector("#stop"),
};
const rounds = toNumber(url.searchParams.get("rounds"));
const secondsPerRound = toNumber(url.searchParams.get("secondsPerRound"));
const workoutName = url.searchParams.get("workoutName") ?? "EveryMinuteOnTheMinuteTimer";
const workouts = { EveryMinuteOnTheMinuteTimer };
const workoutByName = workouts[workoutName];
const workout = workoutByName
    ? new workoutByName(nodes)
    : new EveryMinuteOnTheMinuteTimer(nodes, rounds, secondsPerRound);
nodes.startButton?.addEventListener("click", () => workout.start());
nodes.stopButton?.addEventListener("click", () => workout.stop());
