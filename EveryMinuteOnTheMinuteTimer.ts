/*
 * Copyright 2022 Marek Kobida
 */

import Timer from "./Timer.js";

const INDICATOR_ELEMENT = document.getElementById("indicator");

class EveryMinuteOnTheMinuteTimer extends Timer {
  private currentRound: number = 0;

  constructor(private rounds: number, private secondsPerRound: number = 60) {
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

  enhancedSeconds(seconds: number): number {
    if ((this.seconds + 1) % this.secondsPerRound === 0) {
      this.addRound();

      return 0;
    }

    return seconds;
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
