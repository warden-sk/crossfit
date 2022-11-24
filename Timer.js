/*
 * Copyright 2022 Marek Kobida
 */
class Timer {
    m;
    s;
    interval;
    minutes = 0;
    seconds = 0;
    assignElements({ minutes, seconds, }) {
        this.m = minutes;
        this.s = seconds;
    }
    secondsFromStart() {
        return this.minutes * 60 + this.seconds;
    }
    //
    addSeconds(seconds) {
        const next = this.seconds + seconds;
        if (next !== 60) {
            this.updateTime(this.minutes, next);
        }
        else {
            this.updateTime(this.minutes + 1, 0);
        }
    }
    before(minutes, seconds) {
        return [0, 0];
    }
    start(ms = 1000) {
        if (typeof this.interval === "undefined") {
            this.interval = setInterval(() => this.addSeconds(1), ms);
        }
    }
    stop() {
        if (typeof this.interval === "undefined") {
            return;
        }
        /* (1) */ clearInterval(this.interval);
        /* (2) */ this.interval = undefined;
    }
    updateTime(minutes, seconds) {
        const [m, s] = this.before(minutes, seconds);
        this.minutes = m;
        this.seconds = s;
        this.m && (this.m.textContent = m < 10 ? `0${m}` : `${m}`);
        this.s && (this.s.textContent = s < 10 ? `0${s}` : `${s}`);
    }
}
export default Timer;
