/*
 * Copyright 2022 Marek Kobida
 */

import Timer from "./Timer.js";

const INDICATOR_ELEMENT = document.querySelector("#indicator");

class EveryMinuteOnTheMinuteTimer extends Timer {
  private currentRound: number = 0;

  constructor(
    nodes: Timer["nodes"],
    private rounds: number = 10,
    private secondsPerRound: number = 60
  ) {
    super(nodes);
  }

  addRound() {
    this.currentRound++;

    INDICATOR_ELEMENT &&
      (INDICATOR_ELEMENT.textContent = this.currentRound.toString());

    if (this.currentRound === this.rounds) {
      this.stop();
    }
  }

  enhanceSeconds(seconds: number): number {
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
