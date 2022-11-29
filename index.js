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
    m: document.querySelector("#minutes"),
    s: document.querySelector("#seconds"),
};
const rounds = toNumber(url.searchParams.get("rounds"));
const secondsPerRound = toNumber(url.searchParams.get("secondsPerRound"));
const workoutName = url.searchParams.get("workoutName") ?? "EveryMinuteOnTheMinuteTimer";
const workouts = { EveryMinuteOnTheMinuteTimer };
const workoutByName = workouts[workoutName];
const workout = workoutByName
    ? new workoutByName(nodes)
    : new EveryMinuteOnTheMinuteTimer(nodes, rounds, secondsPerRound);
document
    .getElementById("start")
    ?.addEventListener("click", () => workout.start());
document
    .getElementById("stop")
    ?.addEventListener("click", () => workout.stop());
