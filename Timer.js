/*
 * Copyright 2022 Marek Kobida
 */
import toNumber from "./toNumber.js";
class Timer {
    nodes;
    seconds;
    interval;
    last = toNumber(localStorage.getItem("last")) ?? 0; // dokončiť
    constructor(nodes, seconds = 0) {
        this.nodes = nodes;
        this.seconds = seconds;
        // dokončiť
        setInterval(() => this.updateTextOfNode(document.querySelector("#last"), this.last.toString()), 1000);
    }
    enhanceSeconds(seconds) {
        return seconds;
    }
    start(ms = 1000) {
        if (typeof this.interval === "undefined") {
            this.interval = setInterval(() => this.updateTime(this.seconds + 1), ms);
            // dokončiť
            this.last = +new Date();
            localStorage.setItem("last", this.last.toString());
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
