/*
 * Copyright 2022 Marek Kobida
 */
import EveryMinuteOnTheMinuteTimer from "./EveryMinuteOnTheMinuteTimer.js";
const $ = new EveryMinuteOnTheMinuteTimer(10);
$.assignElements(document.getElementById("minutes"), document.getElementById("seconds"));
document.getElementById("start")?.addEventListener("click", () => $.start());
document.getElementById("stop")?.addEventListener("click", () => $.stop());
