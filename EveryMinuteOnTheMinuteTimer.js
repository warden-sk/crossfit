/*
 * Copyright 2022 Marek Kobida
 */
import Timer from "./Timer.js";
const indicator = document.querySelector("#indicator");
const text = document.querySelector("#text");
class EveryMinuteOnTheMinuteTimer extends Timer {
    rounds;
    secondsPerRound;
    currentRound = 0;
    constructor(nodes, rounds = 10, secondsPerRound = 60) {
        super(nodes);
        this.rounds = rounds;
        this.secondsPerRound = secondsPerRound;
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
    enhanceSeconds(seconds) {
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
}
export default EveryMinuteOnTheMinuteTimer;
