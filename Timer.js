/*
 * Copyright 2022 Marek Kobida
 */
class Timer {
    elements;
    seconds;
    interval;
    constructor(elements, seconds = 0) {
        this.elements = elements;
        this.seconds = seconds;
    }
    enhanceSeconds(seconds) {
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
        this.seconds = this.enhanceSeconds(seconds);
        const m = ~~(this.seconds / 60);
        const s = this.seconds - m * 60;
        this.elements.m &&
            (this.elements.m.textContent = m < 10 ? `0${m}` : `${m}`);
        this.elements.s &&
            (this.elements.s.textContent = s < 10 ? `0${s}` : `${s}`);
    }
}
export default Timer;
