/*
 * Copyright 2022 Marek Kobida
 */

import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";

const url = new URL(location.toString());

function toNumber(input: null | string): number | undefined {
  if (input && /[0-9]+/.test(input)) {
    return +input;
  }
}

const rounds = toNumber(url.searchParams.get("rounds")) ?? 10;
const secondsPerRound = toNumber(url.searchParams.get("secondsPerRound")) ?? 60;

const $ = new EveryMinuteOnTheMinuteTimer(rounds, secondsPerRound);

$.assignElements(
  document.getElementById("minutes")!,
  document.getElementById("seconds")!
);

document.getElementById("start")?.addEventListener("click", () => $.start());
document.getElementById("stop")?.addEventListener("click", () => $.stop());
