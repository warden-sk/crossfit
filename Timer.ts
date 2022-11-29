/*
 * Copyright 2022 Marek Kobida
 */

class Timer {
  private interval?: number;

  constructor(
    private nodes: { m: Node; s: Node },
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

    this.nodes.m && (this.nodes.m.textContent = m < 10 ? `0${m}` : `${m}`);

    const s = this.seconds - m * 60;

    this.nodes.s && (this.nodes.s.textContent = s < 10 ? `0${s}` : `${s}`);
  }
}

export default Timer;
