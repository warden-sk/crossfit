/*
 * Copyright 2022 Marek Kobida
 */
class Timer {
    seconds;
    m;
    s;
    interval;
    constructor(seconds = 0) {
        this.seconds = seconds;
    }
    assignElements(m, s) {
        this.m = m;
        this.s = s;
    }
    enhancedSeconds(seconds) {
        return seconds;
    }
    start(ms = 1000) {
        if (typeof this.interval === "undefined") {
            this.interval = setInterval(() => this.updateTime(this.seconds + 1), ms);
        }
    }
    stop() {
        if (typeof this.interval === "undefined") {
            return;
        }
        /* (1) */ clearInterval(this.interval);
        /* (2) */ this.interval = undefined;
    }
    updateTime(seconds) {
        this.seconds = this.enhancedSeconds(seconds);
        const m = ~~(this.seconds / 60);
        const s = this.seconds - m * 60;
        this.m && (this.m.textContent = m < 10 ? `0${m}` : `${m}`);
        this.s && (this.s.textContent = s < 10 ? `0${s}` : `${s}`);
    }
}
export default Timer;
