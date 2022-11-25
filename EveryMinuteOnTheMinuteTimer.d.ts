import Timer from "./Timer.js";
declare class EveryMinuteOnTheMinuteTimer extends Timer {
    private rounds;
    private secondsPerRound;
    private currentRound;
    constructor(rounds: number, secondsPerRound?: number);
    addRound(): void;
    enhancedSeconds(seconds: number): number;
    start(): void;
}
export default EveryMinuteOnTheMinuteTimer;
