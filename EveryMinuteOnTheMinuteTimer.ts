/*
 * Copyright 2022 Marek Kobida
 */

import Timer from "./Timer.js";

const indicator = document.querySelector("#indicator");
const text = document.querySelector("#text");

class EveryMinuteOnTheMinuteTimer extends Timer {
  private currentRound: number = 0;

  constructor(
    nodes: Timer["nodes"],
    private rounds: number = 10,
    private secondsPerRound: number = 60
  ) {
    super(nodes);

    indicator && (indicator.textContent = this.currentRound.toString());
    text &&
      (text.textContent = `of ${rounds} round(s)\n${secondsPerRound} second(s) per round`);
  }

  addRound() {
    this.currentRound++;

    indicator && (indicator.textContent = this.currentRound.toString());

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

      indicator && (indicator.textContent = this.currentRound.toString());
    }
  }

  stop() {
    super.stop();

    if (typeof this.interval === "undefined") {
      this.currentRound = 0;

      indicator && (indicator.textContent = this.currentRound.toString());
    }
  }
}

export default EveryMinuteOnTheMinuteTimer;
