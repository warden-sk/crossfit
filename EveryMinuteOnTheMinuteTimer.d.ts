import Timer from "./Timer.js";
declare class EveryMinuteOnTheMinuteTimer extends Timer {
    readonly rounds: number;
    readonly secondsPerRound: number;
    currentRound: number;
    constructor(rounds: number, secondsPerRound?: number);
    addRound(): void;
    before(minutes: number, seconds: number): [number, number];
    start(): void;
}
export default EveryMinuteOnTheMinuteTimer;
