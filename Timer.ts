/*
 * Copyright 2022 Marek Kobida
 */

class Timer {
  private interval?: number;

  constructor(
    private elements: { m: HTMLElement; s: HTMLElement },
    public seconds: number = 0
  ) {}

  enhanceSeconds(seconds: number): number {
    return seconds;
  }

  start(ms = 1000) {
    if (typeof this.interval === "undefined") {
      this.interval = setInterval(() => this.updateTime(this.seconds + 1), ms);
    }
  }

  stop() {
    if (typeof this.interval === "undefined") {
      this.updateTime(0);

      return;
    }

    /* (1) */ clearInterval(this.interval);

    /* (2) */ this.interval = undefined;
  }

  updateTime(seconds: number) {
    this.seconds = this.enhanceSeconds(seconds);

    const m = ~~(this.seconds / 60);

    this.elements.m &&
      (this.elements.m.textContent = m < 10 ? `0${m}` : `${m}`);

    const s = this.seconds - m * 60;

    this.elements.s &&
      (this.elements.s.textContent = s < 10 ? `0${s}` : `${s}`);
  }
}

export default Timer;
