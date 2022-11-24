/*
 * Copyright 2022 Marek Kobida
 */

import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";

const $ = new EveryMinuteOnTheMinuteTimer(2);

$.assignElements({
  minutes: document.getElementById("minutes")!,
  seconds: document.getElementById("seconds")!,
});

document.getElementById("start")?.addEventListener("click", () => $.start());
document.getElementById("stop")?.addEventListener("click", () => $.stop());
