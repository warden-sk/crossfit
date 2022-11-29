/*
 * Copyright 2022 Marek Kobida
 */
class Timer {
    nodes;
    seconds;
    interval;
    constructor(nodes, seconds = 0) {
        this.nodes = nodes;
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
            this.updateTime(0);
            return;
        }
        /* (1) */ clearInterval(this.interval);
        /* (2) */ this.interval = undefined;
    }
    updateTextOfNode(node, text) {
        node && (node.textContent = text);
    }
    updateTime(seconds) {
        this.seconds = this.enhanceSeconds(seconds);
        const m = ~~(this.seconds / 60);
        this.updateTextOfNode(this.nodes.minutes, m < 10 ? `0${m}` : `${m}`);
        const s = this.seconds - m * 60;
        this.updateTextOfNode(this.nodes.seconds, s < 10 ? `0${s}` : `${s}`);
    }
}
export default Timer;
