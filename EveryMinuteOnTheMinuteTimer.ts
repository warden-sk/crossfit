/*
 * Copyright 2022 Marek Kobida
 */

import Timer from "./Timer.js";

const INDICATOR_ELEMENT = document.getElementById("indicator");

class EveryMinuteOnTheMinuteTimer extends Timer {
  currentRound: number = 0;

  constructor(readonly rounds: number, readonly secondsPerRound: number = 2) {
    super();
  }

  addRound() {
    this.currentRound++;

    INDICATOR_ELEMENT &&
      (INDICATOR_ELEMENT.textContent = this.currentRound.toString());

    if (this.currentRound === this.rounds) {
      this.stop();
    }
  }

  before(minutes: number, seconds: number): [number, number] {
    if ((this.secondsFromStart() + 1) % this.secondsPerRound === 0) {
      this.addRound();

      return [0, 0];
    }

    return [minutes, seconds];
  }

  start() {
    super.start();

    if (this.currentRound === this.rounds) {
      this.currentRound = 0;

      INDICATOR_ELEMENT &&
        (INDICATOR_ELEMENT.textContent = this.currentRound.toString());
    }
  }
}

export default EveryMinuteOnTheMinuteTimer;
