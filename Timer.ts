/*
 * Copyright 2023 Marek Kobida
 */

interface TimerNodes {
  minutes?: Node;
  seconds?: Node;
  startButton?: Node;
  stopButton?: Node;
}

class Timer {
  interval?: number | undefined;

  constructor(private nodes: TimerNodes, public seconds: number = 0) {}

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

  updateTextOfNode(node: Node | undefined, text: string) {
    node && (node.textContent = text);
  }

  updateTime(seconds: number) {
    this.seconds = this.enhanceSeconds(seconds);

    const m = ~~(this.seconds / 60);

    this.updateTextOfNode(this.nodes.minutes, m < 10 ? `0${m}` : `${m}`);

    const s = this.seconds - m * 60;

    this.updateTextOfNode(this.nodes.seconds, s < 10 ? `0${s}` : `${s}`);
  }
}

export default Timer;
