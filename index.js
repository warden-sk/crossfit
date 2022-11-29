/*
 * Copyright 2022 Marek Kobida
 */
import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";
import Timer from "./Timer.js";
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
const workoutName = url.searchParams.get("workoutName") ?? "EveryMinuteOnTheMinute";
const workouts = {
    EveryMinuteOnTheMinute: [
        EveryMinuteOnTheMinuteTimer,
        [nodes, rounds, secondsPerRound],
    ],
};
const workoutByName = workouts[workoutName];
const workout = workoutByName
    ? new workoutByName[0](...workoutByName[1])
    : new Timer(nodes);
nodes.startButton?.addEventListener("click", () => workout.start());
nodes.stopButton?.addEventListener("click", () => workout.stop());
