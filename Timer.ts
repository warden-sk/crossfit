/*
 * Copyright 2022 Marek Kobida
 */

class Timer {
  private m?: HTMLElement;
  private s?: HTMLElement;

  private interval?: number;

  constructor(private minutes: number = 0, private seconds: number = 0) {}

  addSeconds() {
    const $ = this.seconds + 1;

    if ($ !== 60) {
      this.updateTime(this.minutes, $);
    } else {
      this.updateTime(this.minutes + 1, 0);
    }
  }

  assignElements(m: HTMLElement, s: HTMLElement) {
    this.m = m;
    this.s = s;
  }

  onUpdateTime(minutes: number, seconds: number): [number, number] {
    return [0, 0];
  }

  secondsFromStart(): number {
    return this.minutes * 60 + this.seconds;
  }

  start(ms = 1000) {
    if (typeof this.interval === "undefined") {
      this.interval = setInterval(() => this.addSeconds(), ms);
    }
  }

  stop() {
    if (typeof this.interval === "undefined") {
      return;
    }

    /* (1) */ clearInterval(this.interval);

    /* (2) */ this.interval = undefined;
  }

  updateTime(minutes: number, seconds: number) {
    const [m, s] = this.onUpdateTime(minutes, seconds);

    this.minutes = m;
    this.seconds = s;

    this.m && (this.m.textContent = m < 10 ? `0${m}` : `${m}`);
    this.s && (this.s.textContent = s < 10 ? `0${s}` : `${s}`);
  }
}

export default Timer;
