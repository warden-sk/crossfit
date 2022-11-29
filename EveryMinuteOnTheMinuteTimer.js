/*
 * Copyright 2022 Marek Kobida
 */
import Timer from "./Timer.js";
const INDICATOR_ELEMENT = document.getElementById("indicator");
class EveryMinuteOnTheMinuteTimer extends Timer {
    rounds;
    secondsPerRound;
    currentRound = 0;
    constructor(nodes, rounds, secondsPerRound = 60) {
        super(nodes);
        this.rounds = rounds;
        this.secondsPerRound = secondsPerRound;
    }
    addRound() {
        this.currentRound++;
        INDICATOR_ELEMENT &&
            (INDICATOR_ELEMENT.textContent = this.currentRound.toString());
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
            INDICATOR_ELEMENT &&
                (INDICATOR_ELEMENT.textContent = this.currentRound.toString());
        }
    }
}
export default EveryMinuteOnTheMinuteTimer;
